(function () {
  var MODAL_ID = 'cc-demo-modal';
  var API_URL = 'https://www.casecompass.io/api/demo-request';

  function injectStyles() {
    if (document.getElementById('cc-demo-modal-styles')) return;
    var style = document.createElement('style');
    style.id = 'cc-demo-modal-styles';
    style.textContent = [
      '#cc-demo-modal{display:none;position:fixed;inset:0;z-index:9999;align-items:center;justify-content:center;padding:20px}',
      '#cc-demo-modal.open{display:flex}',
      '#cc-demo-modal-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(8px)}',
      '#cc-demo-modal-box{position:relative;background:#fff;border-radius:20px;max-width:520px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 24px 64px rgba(0,0,0,.3)}',
      '#cc-demo-modal-header{padding:28px 28px 20px;border-bottom:1px solid #e2e8f0}',
      '#cc-demo-modal-icon{width:44px;height:44px;border-radius:11px;background:linear-gradient(135deg,#4f46e5,#7c3aed);display:flex;align-items:center;justify-content:center;margin-bottom:14px}',
      '#cc-demo-modal-close{position:absolute;top:20px;right:20px;background:none;border:none;cursor:pointer;padding:8px;border-radius:8px;line-height:0}',
      '#cc-demo-modal-close:hover{background:#f1f5f9}',
      '#cc-demo-modal-title{font-family:Georgia,serif;font-size:1.5rem;color:#0f172a;margin:0 0 6px;line-height:1.2}',
      '#cc-demo-modal-sub{font-size:.9rem;color:#64748b;margin:0;line-height:1.55}',
      '#cc-demo-modal form{padding:28px;display:flex;flex-direction:column;gap:16px}',
      '#cc-demo-modal .cc-field label{display:block;font-size:.8rem;font-weight:600;color:#0f172a;margin-bottom:6px;letter-spacing:.01em}',
      '#cc-demo-modal .cc-field input,#cc-demo-modal .cc-field textarea{width:100%;padding:11px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:.95rem;font-family:inherit;outline:none;box-sizing:border-box;transition:border-color .2s,box-shadow .2s;color:#0f172a}',
      '#cc-demo-modal .cc-field input:focus,#cc-demo-modal .cc-field textarea:focus{border-color:#4f46e5;box-shadow:0 0 0 3px rgba(79,70,229,.1)}',
      '#cc-demo-modal .cc-field textarea{resize:vertical;line-height:1.55}',
      '#cc-demo-modal-submit{width:100%;padding:13px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;border:none;border-radius:8px;font-size:.95rem;font-weight:700;cursor:pointer;box-shadow:0 8px 24px rgba(79,70,229,.3);transition:all .25s}',
      '#cc-demo-modal-submit:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 32px rgba(79,70,229,.4)}',
      '#cc-demo-modal-submit:disabled{background:#94a3b8;box-shadow:none;cursor:not-allowed}',
      '#cc-demo-modal-success{margin-top:4px;padding:11px 14px;background:#dcfce7;border:1px solid #86efac;border-radius:8px;color:#166534;font-size:.85rem;font-weight:500;display:none}',
      '#cc-demo-modal-error{margin-top:4px;padding:11px 14px;background:#fee2e2;border:1px solid #fca5a5;border-radius:8px;color:#991b1b;font-size:.85rem;display:none}',
    ].join('');
    document.head.appendChild(style);
  }

  function injectModal() {
    if (document.getElementById(MODAL_ID)) return;
    var modal = document.createElement('div');
    modal.id = MODAL_ID;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'cc-demo-modal-title');
    modal.innerHTML = [
      '<div id="cc-demo-modal-backdrop"></div>',
      '<div id="cc-demo-modal-box">',
        '<div id="cc-demo-modal-header">',
          '<button id="cc-demo-modal-close" aria-label="Close">',
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
          '</button>',
          '<div id="cc-demo-modal-icon">',
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
          '</div>',
          '<h2 id="cc-demo-modal-title">Schedule a Demo</h2>',
          '<p id="cc-demo-modal-sub">See how Case Compass can transform your firm&#39;s intake process. We&#39;ll reach out to schedule a personalized walkthrough.</p>',
        '</div>',
        '<form id="cc-demo-modal-form" novalidate>',
          '<div class="cc-field"><label for="cc-name">Your Name *</label><input type="text" id="cc-name" name="name" required placeholder="Jane Smith" /></div>',
          '<div class="cc-field"><label for="cc-firm">Firm Name *</label><input type="text" id="cc-firm" name="firmName" required placeholder="Smith &amp; Associates" /></div>',
          '<div class="cc-field"><label for="cc-email">Email Address *</label><input type="email" id="cc-email" name="email" required placeholder="jane@smithlaw.com" /></div>',
          '<div class="cc-field"><label for="cc-phone">Phone Number *</label><input type="tel" id="cc-phone" name="phone" required placeholder="(555) 000-0000" /></div>',
          '<div class="cc-field"><label for="cc-message">Anything you&#39;d like us to know?</label><textarea id="cc-message" name="message" rows="3" placeholder="Tell us about your practice, case volume, or what you&#39;re looking to solve..."></textarea></div>',
          '<div id="cc-demo-modal-success">&#10003; Thank you! We&#39;ll be in touch shortly.</div>',
          '<div id="cc-demo-modal-error">Something went wrong. Please try again.</div>',
          '<button type="submit" id="cc-demo-modal-submit">Request Demo</button>',
        '</form>',
      '</div>',
    ].join('');
    document.body.appendChild(modal);

    document.getElementById('cc-demo-modal-backdrop').addEventListener('click', window.closeDemoModal);
    document.getElementById('cc-demo-modal-close').addEventListener('click', window.closeDemoModal);

    document.getElementById('cc-demo-modal-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = document.getElementById('cc-demo-modal-submit');
      var success = document.getElementById('cc-demo-modal-success');
      var error = document.getElementById('cc-demo-modal-error');
      success.style.display = 'none';
      error.style.display = 'none';
      btn.disabled = true;
      btn.textContent = 'Submitting…';

      var payload = {
        name: document.getElementById('cc-name').value,
        firmName: document.getElementById('cc-firm').value,
        email: document.getElementById('cc-email').value,
        phone: document.getElementById('cc-phone').value,
        message: document.getElementById('cc-message').value,
      };

      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(function (res) {
          if (res.ok) {
            success.style.display = 'block';
            document.getElementById('cc-demo-modal-form').reset();
            setTimeout(window.closeDemoModal, 2200);
          } else {
            throw new Error('bad response');
          }
        })
        .catch(function () {
          error.style.display = 'block';
        })
        .finally(function () {
          btn.disabled = false;
          btn.textContent = 'Request Demo';
        });
    });
  }

  window.openDemoModal = function () {
    injectStyles();
    injectModal();
    document.getElementById(MODAL_ID).classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeDemoModal = function () {
    var modal = document.getElementById(MODAL_ID);
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeDemoModal();
  });
})();
