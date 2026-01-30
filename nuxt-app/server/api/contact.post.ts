export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  
  // Validate required fields
  if (!body.name || !body.email || !body.phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }
  
  // Format project type for readability
  const projectTypeLabels: Record<string, string> = {
    'new-construction': 'New Construction',
    'renovation': 'Renovation',
    'addition': 'Addition',
    'commercial': 'Commercial',
    'other': 'Other'
  }
  
  const projectType = body.projectType 
    ? projectTypeLabels[body.projectType] || body.projectType 
    : 'Not specified'
  
  // Email content
  const emailHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Phone:</strong> ${body.phone}</p>
    <p><strong>Project Type:</strong> ${projectType}</p>
    <p><strong>Additional Notes:</strong></p>
    <p>${body.notes || 'None provided'}</p>
    <hr>
    <p style="color: #666; font-size: 12px;">This message was sent from the Alpha Construction website contact form.</p>
  `
  
  const emailText = `
New Contact Form Submission

Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Project Type: ${projectType}
Additional Notes: ${body.notes || 'None provided'}

---
This message was sent from the Alpha Construction website contact form.
  `

  // Send via Resend
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Alpha Construction <noreply@alphaconstructionbreck.com>',
        to: ['merrick@alphaconstructionbreck.com'],
        reply_to: body.email,
        subject: `New Inquiry from ${body.name} - ${projectType}`,
        html: emailHtml,
        text: emailText
      })
    })
    
    if (!response.ok) {
      const error = await response.text()
      console.error('Resend error:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email'
      })
    }
    
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})
