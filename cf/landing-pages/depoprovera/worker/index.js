const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const { firmName, name, email, phone, leadVolume, currentIntake, crm, additionalInfo } = body;

    if (!firmName || !name || !email) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Case Compass <hello@casecompass.io>',
        to: ['tcavan@casecompass.io'],
        reply_to: email,
        subject: 'New Depo-Provera Demo Request',
        html: `
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #2563eb;">New Depo-Provera Demo Request</h2>
  <table style="border-collapse: collapse; margin: 20px 0; width: 100%;">
    <tr>
      <td style="padding: 8px; font-weight: bold; width: 180px;">Law Firm:</td>
      <td style="padding: 8px;">${firmName}</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 8px; font-weight: bold;">Contact Name:</td>
      <td style="padding: 8px;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">Email:</td>
      <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 8px; font-weight: bold;">Phone:</td>
      <td style="padding: 8px;">${phone || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">Monthly Lead Volume:</td>
      <td style="padding: 8px;">${leadVolume || 'Not provided'}</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 8px; font-weight: bold;">Current Intake Method:</td>
      <td style="padding: 8px;">${currentIntake || 'Not provided'}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">CRM / Case Mgmt:</td>
      <td style="padding: 8px;">${crm || 'Not provided'}</td>
    </tr>
  </table>
  ${additionalInfo ? `
  <div style="margin: 20px 0;">
    <strong>Biggest Intake Challenge:</strong>
    <p style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">${additionalInfo}</p>
  </div>` : ''}
  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
  <p style="color: #64748b; font-size: 12px;">Submitted via depoprovera.casecompass.io</p>
</body>
</html>`,
        text: `New Depo-Provera Demo Request\n\nLaw Firm: ${firmName}\nContact Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMonthly Lead Volume: ${leadVolume || 'Not provided'}\nCurrent Intake Method: ${currentIntake || 'Not provided'}\nCRM / Case Mgmt: ${crm || 'Not provided'}\n\nBiggest Intake Challenge:\n${additionalInfo || 'None'}\n\n---\nSubmitted via depoprovera.casecompass.io`,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, message: 'Demo request sent successfully' }), {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    });
  },
};
