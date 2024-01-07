<template>
  <section class="hero-wrapper">
    <div class="hero-inner">
      <div class="hero-titles">
        <h1 class="main-title h2">{{ title }}</h1>
        <h6 class="work-title">{{ description }}</h6>
      </div>

    </div>
  </section>

</template> 

<script>

export default {
  props: {
    title: {
      default: 'Alpha Construction'
    }, 
    description: {
      default: 'Creating homes in the high alpine'
    }
  }, 
  mounted() {
    console.log(this.title)
  }
}

</script>

<style lang="scss">

.hero-wrapper {
  position: relative;

  .hero-inner {
    padding: span(2);
    text-align: center;

    .hero-titles {
    }

    .main-title {
      margin-bottom: $margin-large;

      span {
        display: block;
      }
    }

    .work-title {
      color: $brown;
    }
  }
}


</style>