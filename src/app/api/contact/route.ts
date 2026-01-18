import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/schemas'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body)
    
    // Log the submission (in production, you'd send this to an email service or database)
    console.log('Contact Form Submission:', validatedData)
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for reaching out! We\'ll get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Invalid form data' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
