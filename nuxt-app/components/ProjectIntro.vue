<template>
  <section class="project-specs-wrapper">
    <div class="project-specs-inner">
      <div class="specs-header">
        <span class="specs-label">Project Details</span>
        <h2 class="specs-title">The Specs</h2>
      </div>
      
      <div class="specs-grid">
        <div v-if="buildSquareFeet" class="spec-card featured">
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <div class="spec-content">
            <span class="spec-value">{{ buildSquareFeet }}</span>
            <span class="spec-name">Square Feet</span>
          </div>
        </div>
        
        <div v-if="buildBedBath" class="spec-card">
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/>
              <path d="M21 10H3"/>
              <path d="M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3"/>
            </svg>
          </div>
          <div class="spec-content">
            <span class="spec-value">{{ buildBedBath }}</span>
            <span class="spec-name">Beds & Baths</span>
          </div>
        </div>
        
        <div v-if="buildAddress" class="spec-card">
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="spec-content">
            <span class="spec-value">{{ buildAddress }}</span>
            <span class="spec-name">Location</span>
          </div>
        </div>
        
        <div v-if="buildArchitect" class="spec-card">
          <div class="spec-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M2 20h20"/>
              <path d="M5 20V8l7-5 7 5v12"/>
              <path d="M9 20v-6h6v6"/>
            </svg>
          </div>
          <div class="spec-content">
            <span class="spec-value">{{ buildArchitect }}</span>
            <span class="spec-name">Architect</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  props: {
    buildArchitect: {
      default: ''
    }, 
    buildAddress: {
      default: ''
    }, 
    buildBedBath: {
      default: ''
    }, 
    buildSquareFeet: {
      default: ''
    }
  }, 
  mounted() {
  }
}
</script>

<style lang="scss"> 
.project-specs-wrapper {
  background: $cream;
  
  .project-specs-inner {
    padding: span(2) span(1);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .specs-header {
    text-align: center;
    margin-bottom: span(1.5);
    
    .specs-label {
      display: inline-block;
      font-family: $font-body;
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: $copper;
      margin-bottom: 0.5rem;
    }
    
    .specs-title {
      font-family: $font-display;
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 400;
      color: $dark;
    }
  }
  
  .specs-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .spec-card {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.5rem;
    background: $white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba($dark, 0.04);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba($dark, 0.08);
    }
    
    &.featured {
      background: $dark;
      
      .spec-icon {
        background: rgba($white, 0.1);
        color: $copper;
      }
      
      .spec-value {
        color: $white;
      }
      
      .spec-name {
        color: rgba($white, 0.6);
      }
    }
    
    .spec-icon {
      flex-shrink: 0;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $cream;
      border-radius: 12px;
      color: $copper;
      
      svg {
        width: 28px;
        height: 28px;
      }
    }
    
    .spec-content {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    
    .spec-value {
      font-family: $font-display;
      font-size: 1.25rem;
      font-weight: 500;
      color: $dark;
      line-height: 1.2;
      margin-bottom: 0.25rem;
      
      // Truncate long text
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .spec-name {
      font-family: $font-body;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: $stone;
    }
  }

  @include respond-to($tablet) {
    .project-specs-inner {
      padding: span(2);
    }
    
    .specs-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
    }
    
    .spec-card.featured {
      grid-column: 1;
    }
  }
  
  @include respond-to($desktop) {
    .specs-grid {
      grid-template-columns: repeat(4, 1fr);
    }
    
    .spec-card {
      flex-direction: column;
      text-align: center;
      padding: 2rem 1.5rem;
      
      .spec-icon {
        margin-bottom: 0.5rem;
      }
      
      &.featured {
        grid-column: 1;
      }
    }
  }
}

</style>