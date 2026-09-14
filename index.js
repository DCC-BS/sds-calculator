(function () {
  const elements = {
    title: document.getElementById('page-title'),
    form: document.getElementById('questionsForm'),
    template: document.getElementById('questionTemplate'),
    softwareName: document.getElementById('softwareName'),
    scoreNumber: document.getElementById('scoreNumber'),
    scoreMeta: document.getElementById('scoreMeta'),
    scoreLabel: document.getElementById('scoreLabel'),
    scoreFlags: document.getElementById('scoreFlags'),
    notesList: document.getElementById('notesList'),
    copyLink: document.getElementById('copyLink'),
    copyStatus: document.getElementById('copyStatus'),
    resetButton: document.getElementById('resetButton'),
    shareSection: document.getElementById('shareSection')
  };

  init();

  async function init() {
    try {
      renderPage(QUESTIONS);
      applyUrlParams(QUESTIONS);
      updateScore(QUESTIONS);
      bindEvents(QUESTIONS);
    } catch (error) {
      elements.form.innerHTML = '<p role="alert">Die Fragen konnten nicht geladen werden.</p>';
      console.error(error);
    }
  }

  function renderPage(data) {
    document.title = data.title || document.title;
    elements.title.textContent = data.title || elements.title.textContent;

    elements.form.replaceChildren(...data.questions.map((question, index) => renderQuestion(question, index, data.answers)));
    elements.notesList.replaceChildren(...(data.notes || []).map(renderNote));

    try {
      if (window.top !== window.self && elements.shareSection) {
        elements.shareSection.remove();
      }
    } catch (_) {
      // Cross-Origin-Frames sollen die Seite nicht brechen.
    }
  }

  function renderQuestion(question, index, answers) {
    const fragment = elements.template.content.cloneNode(true);
    const fieldset = fragment.querySelector('.question-card');
    const indexEl = fragment.querySelector('.question-card__index');
    const dimensionEl = fragment.querySelector('.question-card__dimension');
    const legendEl = fragment.querySelector('legend');
    const textEl = fragment.querySelector('.question-card__text');
    const weightEl = fragment.querySelector('.question-card__weight');
    const helpEl = fragment.querySelector('.question-card__help');
    const answersEl = fragment.querySelector('.question-card__answers');

    fieldset.dataset.questionId = question.id;
    legendEl.textContent = `${index + 1}. ${question.dimension}: ${question.text}`;
    indexEl.textContent = String(index + 1);
    dimensionEl.textContent = question.dimension;
    textEl.textContent = question.text;
    weightEl.textContent = `${question.weight} % Gewicht`;
    helpEl.textContent = question.help || '';
    helpEl.id = `help-${question.id}`;
    fieldset.setAttribute('aria-describedby', helpEl.id);

    answers.forEach((answer) => {
      answersEl.appendChild(renderAnswer(question, answer));
    });

    return fieldset;
  }

  function renderAnswer(question, answer) {
    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const inputId = `${question.id}-${answer.id}`;

    wrapper.className = 'answer-option';
    input.className = 'answer-option__input';
    input.type = 'radio';
    input.id = inputId;
    input.name = question.id;
    input.value = answer.id;
    input.dataset.value = String(answer.value);

    label.className = 'answer-option__label';
    label.setAttribute('for', inputId);
    label.textContent = answer.label;

    wrapper.append(input, label);
    return wrapper;
  }

  function renderNote(text) {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
  }

  function bindEvents(data) {
    elements.form.addEventListener('change', () => {
      updateScore(data);
      syncUrl(data);
    });

    elements.softwareName.addEventListener('input', () => syncUrl(data));

    if (elements.copyLink) {
      elements.copyLink.addEventListener('click', () => copyCurrentLink(data));
    }

    if (elements.resetButton) {
      elements.resetButton.addEventListener('click', () => resetAll(data));
    }
  }

  function resetAll(data) {
    elements.form.querySelectorAll('input[type="radio"]:checked').forEach((input) => {
      input.checked = false;
    });
    elements.softwareName.value = '';

    updateScore(data);
    syncUrl(data);
  }

  function getAnswer(questionId) {
    return elements.form.querySelector(`input[name="${cssEscape(questionId)}"]:checked`);
  }

  function updateScore(data) {
    const maxPoints = data.questions.reduce((sum, question) => sum + Number(question.weight || 0), 0);
    const points = data.questions.reduce((sum, question) => {
      const selected = getAnswer(question.id);
      const value = selected ? Number(selected.dataset.value) : Number(data.score?.unansweredValue || 0);
      return sum + value * Number(question.weight || 0);
    }, 0);

    const min = Number(data.score?.min || 1);
    const max = Number(data.score?.max || 100);
    const normalized = maxPoints > 0 ? (points / maxPoints) * max : 0;
    const score = Math.max(min, Math.min(max, normalized));
    const rounding = Number(data.score?.rounding || 0);
    const displayScore = round(score, rounding);

    elements.scoreNumber.textContent = String(displayScore);
    elements.scoreMeta.textContent = `${round(points, 1)} von ${maxPoints} gewichteten Punkten`;
    elements.scoreLabel.textContent = findScoreLabel(data, displayScore);
    updateFlags(data);
  }

  function updateFlags(data) {
    const flaggedDimensions = data.questions
      .filter((question) => {
        const selected = getAnswer(question.id);
        return selected && (selected.value === 'no' || selected.value === 'unknown');
      })
      .map((question) => question.dimension);

    const dimensions = [...new Set(flaggedDimensions)];

    elements.scoreFlags.hidden = dimensions.length === 0;
    elements.scoreFlags.textContent = dimensions.length
      ? `⚠ Zu beachten: ${dimensions.join(', ')}`
      : '';
  }

  function findScoreLabel(data, score) {
    const label = (data.score?.labels || []).find((entry) => score >= entry.min && score <= entry.max);
    return label ? label.text : '';
  }

  function round(value, decimals) {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
  }

  function currentUrl() {
    return new URL(window.location.href);
  }

  function syncUrl(data) {
    const url = currentUrl();

    data.questions.forEach((question) => {
      const selected = getAnswer(question.id);
      if (selected) {
        url.searchParams.set(question.param || question.id, selected.value);
      } else {
        url.searchParams.delete(question.param || question.id);
      }
    });

    const name = elements.softwareName.value.trim();
    if (name) {
      url.searchParams.set('name', name);
    } else {
      url.searchParams.delete('name');
    }

    window.history.replaceState({}, '', url);
  }

  function applyUrlParams(data) {
    const url = currentUrl();
    elements.softwareName.value = url.searchParams.get('name') || '';

    data.questions.forEach((question) => {
      const value = url.searchParams.get(question.param || question.id);
      if (!value) return;
      const selector = `input[name="${cssEscape(question.id)}"][value="${cssEscape(value)}"]`;
      const input = elements.form.querySelector(selector);
      if (input) input.checked = true;
    });
  }

  async function copyCurrentLink(data) {
    syncUrl(data);
    const originalText = elements.copyLink.textContent;
    const link = window.location.href;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(link);
      } else {
        copyWithFallback(link);
      }
      elements.copyLink.textContent = 'Kopiert';
      elements.copyStatus.textContent = 'Link wurde kopiert.';
    } catch (_) {
      elements.copyLink.textContent = 'Nicht kopiert';
      elements.copyStatus.textContent = 'Link konnte nicht kopiert werden.';
    }

    elements.copyLink.disabled = true;
    window.setTimeout(() => {
      elements.copyLink.textContent = originalText;
      elements.copyLink.disabled = false;
      elements.copyStatus.textContent = '';
    }, 1500);
  }

  function copyWithFallback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === 'function') {
      return window.CSS.escape(value);
    }
    return String(value).replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }
})();
