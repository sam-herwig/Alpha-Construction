<template>
  <section class="contact-wrapper">
    <div class="contact-inner">
      <div class="left-side">
        <span class="contact-label">Start a Project</span>
        <h3 class="contact-title">Ready to build your<br><em>mountain home?</em></h3>
        <p class="contact-description">We'd love to hear about your project. Fill out the form and we'll get back to you shortly.</p>
        
        <div class="contact-methods">
          <a href="mailto:merrick@alphaconstructionbreck.com" class="contact-method">
            <span class="method-icon">✉</span>
            <div class="method-content">
              <span class="method-label">Email Us Directly</span>
              <span class="method-value">merrick@alphaconstructionbreck.com</span>
            </div>
          </a>
          
          <a href="tel:970-485-5345" class="contact-method">
            <span class="method-icon">📞</span>
            <div class="method-content">
              <span class="method-label">Call Us</span>
              <span class="method-value">970-485-5345</span>
            </div>
          </a>
        </div>
      </div>

      <div class="right-side">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group" :class="{ 'has-error': errors.name }">
            <label for="name">Name <span class="required">*</span></label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              placeholder="Your full name"
              @blur="validateField('name')"
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>

          <div class="form-group" :class="{ 'has-error': errors.email }">
            <label for="email">Email <span class="required">*</span></label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              placeholder="your@email.com"
              @blur="validateField('email')"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group" :class="{ 'has-error': errors.phone }">
            <label for="phone">Phone <span class="required">*</span></label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.phone" 
              placeholder="(970) 555-1234"
              @blur="validateField('phone')"
            />
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </div>

          <div class="form-group">
            <label for="projectType">Project Type</label>
            <select id="projectType" v-model="form.projectType">
              <option value="">Select a project type</option>
              <option value="new-construction">New Construction</option>
              <option value="renovation">Renovation</option>
              <option value="addition">Addition</option>
              <option value="commercial">Commercial</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="notes">Additional Notes</label>
            <textarea 
              id="notes" 
              v-model="form.notes" 
              placeholder="Tell us about your project..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>

          <div v-if="submitStatus === 'success'" class="form-message success">
            Thank you! We'll be in touch soon.
          </div>
          <div v-if="submitStatus === 'error'" class="form-message error">
            Something went wrong. Please try again or email us directly.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  notes: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('')

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10
}

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.name = form.name.trim() ? '' : 'Name is required'
      break
    case 'email':
      if (!form.email.trim()) {
        errors.email = 'Email is required'
      } else if (!validateEmail(form.email)) {
        errors.email = 'Please enter a valid email'
      } else {
        errors.email = ''
      }
      break
    case 'phone':
      if (!form.phone.trim()) {
        errors.phone = 'Phone number is required'
      } else if (!validatePhone(form.phone)) {
        errors.phone = 'Please enter a valid phone number'
      } else {
        errors.phone = ''
      }
      break
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('phone')
  return !errors.name && !errors.email && !errors.phone
}

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  submitStatus.value = ''
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        projectType: form.projectType,
        notes: form.notes
      })
    })
    
    if (response.ok) {
      submitStatus.value = 'success'
      // Reset form
      form.name = ''
      form.email = ''
      form.phone = ''
      form.projectType = ''
      form.notes = ''
    } else {
      submitStatus.value = 'error'
    }
  } catch (error) {
    console.error('Form submission error:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss">
.contact-wrapper {
  padding: span(2) span(1);
  background-color: $cream;

  .contact-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .left-side {
    margin-bottom: span(2);
  }
  
  .contact-label {
    display: inline-block;
    font-family: $font-body;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: $copper;
    margin-bottom: 1rem;
  }
  
  .contact-title {
    font-family: $font-display;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    color: $dark;
    line-height: 1.2;
    margin-bottom: 1rem;
    
    em {
      font-style: italic;
      color: $stone;
    }
  }
  
  .contact-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: rgba($dark, 0.7);
    margin-bottom: 2rem;
    max-width: 400px;
  }
  
  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    background: $white;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 2px 12px rgba($dark, 0.06);
    transition: all 0.3s ease;
    border: 1px solid transparent;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba($dark, 0.1);
      border-color: rgba($copper, 0.2);
    }
    
    .method-icon {
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $cream;
      border-radius: 8px;
      font-size: 1.125rem;
    }
    
    .method-content {
      display: flex;
      flex-direction: column;
    }
    
    .method-label {
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: $stone;
      margin-bottom: 0.2rem;
    }
    
    .method-value {
      font-family: $font-body;
      font-size: 0.9rem;
      font-weight: 500;
      color: $dark;
    }
  }

  .right-side {
    .contact-form {
      background: $white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 24px rgba($dark, 0.08);
    }
  }
  
  .form-group {
    margin-bottom: 1.25rem;
    
    label {
      display: block;
      font-family: $font-body;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: $dark;
      margin-bottom: 0.5rem;
      
      .required {
        color: $copper;
      }
    }
    
    input,
    select,
    textarea {
      width: 100%;
      padding: 0.875rem 1rem;
      font-family: $font-body;
      font-size: 1rem;
      color: $dark;
      background: $snow;
      border: 1px solid rgba($dark, 0.1);
      border-radius: 6px;
      transition: all 0.2s ease;
      
      &::placeholder {
        color: rgba($dark, 0.4);
      }
      
      &:focus {
        outline: none;
        border-color: $copper;
        background: $white;
        box-shadow: 0 0 0 3px rgba($copper, 0.1);
      }
    }
    
    select {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      padding-right: 2.5rem;
    }
    
    textarea {
      resize: vertical;
      min-height: 100px;
    }
    
    &.has-error {
      input,
      select,
      textarea {
        border-color: #d32f2f;
        background: #fff5f5;
      }
    }
    
    .error-message {
      display: block;
      font-size: 0.8rem;
      color: #d32f2f;
      margin-top: 0.4rem;
    }
  }
  
  .submit-btn {
    width: 100%;
    padding: 1rem 2rem;
    font-family: $font-body;
    font-size: 1rem;
    font-weight: 600;
    color: $white;
    background: $dark;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover:not(:disabled) {
      background: lighten($dark, 8%);
      transform: translateY(-1px);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  
  .form-message {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
    font-weight: 500;
    
    &.success {
      background: #e8f5e9;
      color: #2e7d32;
    }
    
    &.error {
      background: #ffebee;
      color: #c62828;
    }
  }

  @include respond-to($large-tablet) {
    padding: span(3) span(2);
    
    .contact-inner {
      display: flex; 
      align-items: flex-start;
      justify-content: space-between;
      gap: span(2);
    }
    
    .left-side {
      flex: 1;
      margin-bottom: 0;
      position: sticky;
      top: 2rem;
    }

    .right-side {
      flex: 1.2;
      max-width: 500px;
    }
  }
}
</style>
