import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, firmName, email, phone, message } = body

    // Validate required fields
    if (!name || !firmName || !email || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Case Compass <noreply@casecompass.io>',
      to: ['tcavan@casecompass.io', 'jorganisciak@casecompass.io'],
      subject: `New Demo Request from ${firmName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #4f46e5, #7c3aed);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
              }
              .content {
                background: #f8fafc;
                padding: 30px;
                border: 1px solid #e2e8f0;
                border-top: none;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 6px;
                border: 1px solid #e2e8f0;
              }
              .field-label {
                font-weight: 600;
                color: #4f46e5;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #0f172a;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
                color: #64748b;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                New Demo Request
              </h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Contact Name</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Firm Name</div>
                <div class="field-value">${firmName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">Phone Number</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #4f46e5; text-decoration: none;">${phone}</a></div>
              </div>

              ${message ? `
              <div class="field">
                <div class="field-label">Message</div>
                <div class="field-value" style="white-space: pre-wrap;">${message}</div>
              </div>
              ` : ''}
              
              <div class="footer">
                <p>This demo request was submitted via casecompass.io</p>
                <p style="margin-top: 10px;">
                  <strong>Next Steps:</strong> Reach out to schedule a personalized demo walkthrough.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500, headers: CORS_HEADERS }
      )
    }

    return NextResponse.json({ success: true, data }, { headers: CORS_HEADERS })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: CORS_HEADERS }
    )
  }
}
