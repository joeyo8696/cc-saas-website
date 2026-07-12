const LOGO_PLACEHOLDER = "%%LOGO%%";

const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scheduled Maintenance | Case Compass</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%);
      color: #e2e8f0;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      overflow: hidden;
      position: relative;
    }

    /* Animated background orbs */
    .orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.12;
      animation: drift 12s ease-in-out infinite;
      pointer-events: none;
    }
    .orb-1 { width: 500px; height: 500px; background: #3b82f6; top: -150px; left: -150px; animation-delay: 0s; }
    .orb-2 { width: 400px; height: 400px; background: #8b5cf6; bottom: -100px; right: -100px; animation-delay: -4s; }
    .orb-3 { width: 300px; height: 300px; background: #06b6d4; top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: -8s; }

    @keyframes drift {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.05); }
      66% { transform: translate(-20px, 30px) scale(0.95); }
    }

    .card {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 20px;
      padding: 52px 48px;
      max-width: 580px;
      width: 100%;
      text-align: center;
      position: relative;
      z-index: 1;
      animation: fadeUp 0.7s ease both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .logo { margin-bottom: 36px; }
    .logo img {
      height: 32px;
      width: auto;
      filter: brightness(0) invert(1);
      opacity: 0.9;
    }

    /* Gear animation */
    .gears {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      margin: 0 auto 28px;
      width: 80px;
      height: 80px;
      position: relative;
    }
    .gear-wrap {
      position: relative;
      width: 80px;
      height: 80px;
    }
    .gear {
      position: absolute;
      animation: spin 4s linear infinite;
    }
    .gear-large {
      width: 52px; height: 52px;
      top: 0; left: 0;
      stroke: #94a3b8; fill: none; stroke-width: 2;
    }
    .gear-small {
      width: 30px; height: 30px;
      bottom: 0; right: 0;
      stroke: #64748b; fill: none; stroke-width: 2;
      animation-direction: reverse;
      animation-duration: 2.5s;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(251,191,36,0.12);
      border: 1px solid rgba(251,191,36,0.25);
      color: #fbbf24;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 999px;
      margin-bottom: 24px;
    }
    .badge-dot {
      width: 7px; height: 7px;
      background: #fbbf24;
      border-radius: 50%;
      animation: pulse 1.6s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: 0.3; transform: scale(0.7); }
    }

    h1 {
      font-size: 28px;
      font-weight: 700;
      color: #f8fafc;
      letter-spacing: -0.5px;
      margin-bottom: 14px;
    }

    p {
      font-size: 15.5px;
      color: #94a3b8;
      line-height: 1.7;
      margin-bottom: 32px;
    }

    /* AWS info block */
    .aws-block {
      background: rgba(255,153,0,0.06);
      border: 1px solid rgba(255,153,0,0.2);
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      gap: 14px;
      text-align: left;
    }
    .aws-icon {
      flex-shrink: 0;
      width: 36px; height: 36px;
      background: rgba(255,153,0,0.12);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
    }
    .aws-icon svg { width: 20px; height: 20px; }
    .aws-text { font-size: 13.5px; color: #94a3b8; line-height: 1.55; }
    .aws-text strong { color: #ff9900; font-weight: 600; }

    .divider { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 0 0 24px; }

    .contact { font-size: 13.5px; color: #64748b; }
    .contact a { color: #94a3b8; text-decoration: none; font-weight: 500; }
    .contact a:hover { color: #e2e8f0; }

    /* Progress bar */
    .progress-wrap {
      background: rgba(255,255,255,0.06);
      border-radius: 999px;
      height: 3px;
      margin-bottom: 32px;
      overflow: hidden;
    }
    .progress-bar {
      height: 100%;
      width: 40%;
      background: linear-gradient(90deg, #3b82f6, #8b5cf6);
      border-radius: 999px;
      animation: progress 3s ease-in-out infinite alternate;
    }
    @keyframes progress {
      from { width: 20%; margin-left: 0; }
      to   { width: 50%; margin-left: 30%; }
    }

    @media (max-width: 480px) {
      .card { padding: 36px 24px; }
      h1 { font-size: 23px; }
    }
  </style>
</head>
<body>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>

  <div class="card">
    <div class="logo">
      <img src="%%LOGO%%" alt="Case Compass">
    </div>

    <div class="gear-wrap">
      <!-- large gear -->
      <svg class="gear gear-large" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
      <!-- small gear -->
      <svg class="gear gear-small" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    </div>

    <div class="badge"><span class="badge-dot"></span>Maintenance in progress</div>

    <h1>We'll be right back</h1>
    <p>We're performing scheduled infrastructure maintenance to improve your experience. The portal will be back online shortly.</p>

    <div class="aws-block">
      <div class="aws-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff9900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
        </svg>
      </div>
      <div class="aws-text">
        <strong>AWS Infrastructure Maintenance</strong><br>
        Our team is performing updates to our AWS environment. All data is safe and services will be fully restored shortly.
      </div>
    </div>

    <div class="progress-wrap">
      <div class="progress-bar"></div>
    </div>

    <hr class="divider">
    <p class="contact">
      Need immediate assistance? Contact us at <a href="mailto:support@casecompass.io">support@casecompass.io</a>
    </p>
  </div>
</body>
</html>`;

export default {
  async fetch() {
    const LOGO = "data:image/png;base64,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";
    const html = HTML_TEMPLATE.replace("%%LOGO%%", LOGO);
    return new Response(html, {
      status: 503,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Retry-After': '3600',
        'Cache-Control': 'no-store',
      },
    });
  },
};
