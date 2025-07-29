import 'dotenv/config'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Create transporter with real credentials
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    // Refactor to handle unknown error type
    if (err instanceof Error) {
      console.error('Mail error:', err.message)
      return NextResponse.json({ success: false, error: err.message }, { status: 500 })
    }
    console.error('Mail error:', err)
    return NextResponse.json({ success: false, error: 'Unknown error occurred' }, { status: 500 })
  }
}

