"use server"

import { generateOTP, sendEmail } from "@/lib/utils"

export async function requestPasswordReset(email: string) {
  // Generate a 6-digit OTP
  const otp = generateOTP()

  // Store OTP in database with expiration (15 minutes)
  // await db.passwordResets.create({ email, otp, expiresAt: new Date(Date.now() + 15 * 60 * 1000) })

  // Send email with OTP
  await sendEmail({
    to: email,
    subject: "Reset Your VixoPay Password",
    text: `Your password reset code is: ${otp}. This code will expire in 15 minutes.`,
  })

  return true
}

export async function verifyOTP(email: string, otp: string) {
  // Verify OTP from database
  // const reset = await db.passwordResets.findFirst({
  //   where: { email, otp, expiresAt: { gt: new Date() } }
  // })

  // if (!reset) throw new Error("Invalid or expired OTP")

  return true
}

export async function resetPassword(email: string, otp: string, newPassword: string) {
  // Verify OTP first
  await verifyOTP(email, otp)

  // Update user's password
  // await db.users.update({
  //   where: { email },
  //   data: { password: await hash(newPassword) }
  // })

  // Delete used OTP
  // await db.passwordResets.deleteMany({ where: { email } })

  return true
}

