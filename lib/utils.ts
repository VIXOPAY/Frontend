// lib/utils.ts
export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ")
}

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function sendEmail({ to, subject, text }: { to: string; subject: string; text: string }) {
  // In a real implementation, you would:
  // 1. Use an email service provider (SendGrid, Amazon SES, etc.)
  // 2. Send the actual email
  // 3. Handle errors and retries

  // This is a mock implementation
  console.log(`Sending email to ${to}:`, { subject, text })
  return true
}

