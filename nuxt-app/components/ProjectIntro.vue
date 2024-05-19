<template>
  <section class="project-intro-wrapper">
    <div class="project-intro-inner">
      <h2 class="h4">The Specs</h2>
        <div class="flex-wrapper">
        <div class="column">
          <p class="p1"> Address: <span class="h6">{{ buildAddress }}</span></p>
          <p class="p1">Number of Beds and Baths: <span class="h6">{{ buildBedBath }}</span></p>
        </div>
        <div class="column">
           <p class="p1">The Architect: <span class="h6">{{ buildArchitect }}</span></p>
           <p class="p1">Square Feet: <span class="h6">{{ buildSquareFeet }}</span></p>
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
.project-intro-wrapper {
  
  .project-intro-inner {
    padding: span(2);
     text-align: center; 

    .h4 {
      margin-bottom: $margin-large;
    }

    .flex-wrapper {

    

      .column {
        width: 100%;

        :first-child {
          padding-bottom: $margin-normal;
        }

        p {
          color: $brown; 
          
          span {
            display: block;
          }
        }
      }
    }
  }

  @include respond-to($tablet) {
    .project-intro-inner {
      text-align: left;

      .flex-wrapper {
        display: flex; 
        align-items: flex-start;
        justify-content: space-between;

         .column {
            width: 40%;
         }
      }
    }
  }

}

</style>