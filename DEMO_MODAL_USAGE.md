# Demo Modal Usage Guide

## Setup

1. **Add your Resend API key** to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

2. **Verify your domain** in Resend (casecompass.io) to send emails

## How to Use

### Option 1: Use the DemoButton Component (Recommended)

Replace any "Schedule a Demo" link with the `DemoButton` component:

```tsx
import DemoButton from '@/components/DemoButton'

// Primary style (gradient button)
<DemoButton>Schedule a Demo →</DemoButton>

// Secondary style (outlined button)
<DemoButton variant="secondary">See It in Action</DemoButton>

// Custom text
<DemoButton>Request a Walkthrough</DemoButton>

// With custom styles
<DemoButton style={{ padding: '18px 48px', fontSize: '1.05rem' }}>
  Book Your Demo
</DemoButton>
```

### Option 2: Use the Hook Directly

For more control, use the `useDemoModal` hook:

```tsx
'use client'

import { useDemoModal } from '@/components/DemoModalProvider'

export default function MyComponent() {
  const { openModal } = useDemoModal()
  
  return (
    <button onClick={openModal}>
      Custom Button
    </button>
  )
}
```

## What Happens When User Submits

1. Form validates all required fields (name, firm name, email, phone)
2. Sends email to **tcavan@casecompass.io** with formatted contact details
3. Shows success message
4. Automatically closes modal after 2 seconds
5. Form resets for next use

## Email Format

Taylor will receive a nicely formatted email with:
- Contact Name
- Firm Name
- Email Address (clickable)
- Phone Number (clickable)
- Submission source (casecompass.io)

## Components Created

- `DemoModal.tsx` - The modal UI component
- `DemoModalProvider.tsx` - Context provider for global state
- `DemoButton.tsx` - Reusable button component
- `app/api/demo-request/route.ts` - API endpoint for form submission

## Example Replacements

Replace these patterns throughout the site:

```tsx
// OLD
<Link href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo">
  Schedule a Demo →
</Link>

// NEW
<DemoButton>Schedule a Demo →</DemoButton>
```

```tsx
// OLD
<a href="https://scheduler.zoom.us/joey-organisciak/case-compass-demo">
  See It in Action
</a>

// NEW
<DemoButton>See It in Action</DemoButton>
```
