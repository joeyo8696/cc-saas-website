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
    const { name, email, phone, practiceName, challenge } = body

    if (!name || !email || !phone || !practiceName) {
      return NextResponse.json(
        { error: 'Name, email, phone and practice name are required' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    const { error } = await resend.emails.send({
      from: 'Torvana <noreply@casecompass.io>',
      to: ['tcavan@casecompass.io', 'jorganisciak@casecompass.io'],
      subject: `Torvana Brief Download — ${practiceName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0e1a35, #504ce2); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
              .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.75; }
              .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 16px; background: white; padding: 14px 16px; border-radius: 6px; border: 1px solid #e2e8f0; }
              .field-label { font-weight: 700; color: #504ce2; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
              .field-value { font-size: 15px; color: #0f172a; }
              .field-value a { color: #504ce2; text-decoration: none; }
              .challenge { background: #f0effe; border-color: #d0cbfb; }
              .challenge .field-label { color: #3935b8; }
              .footer { text-align: center; margin-top: 24px; padding-top: 18px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 13px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Torvana Brief Download</h1>
              <p>A practice downloaded the Torvana brief from casecompass.io/torvana</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Contact Name</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Practice Name</div>
                <div class="field-value">${practiceName}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              ${challenge ? `
              <div class="field challenge">
                <div class="field-label">Where the workflow slows down</div>
                <div class="field-value" style="white-space: pre-wrap;">${challenge}</div>
              </div>` : ''}
              <div class="footer">
                <p>Submitted via casecompass.io/torvana — PDF brief was downloaded.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500, headers: CORS_HEADERS })
    }

    return NextResponse.json({ success: true }, { headers: CORS_HEADERS })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: CORS_HEADERS })
  }
}
