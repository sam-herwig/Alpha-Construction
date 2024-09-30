<template>
  <section class="home-bio-wrapper">
    <div class="home-bio-inner">
      <!-- <p class="p1">Alpha Construction was founded in 1995 to provide
residential construction services in Summit County. Over
the past twenty-seven years, Alpha Construction has
focused on new home construction, additions to existing
homes and remodels of existing homes. In the past
twenty-seven years, Alpha Construction has completed
over two hundred and fifty residential home projects in
Summit County.</p>
      <p class="p1">Alpha Construction strives to give their clients reliable
construction services at a reasonable price. We try to
limit the number of residential projects to ensure that we
can personally meet the demands of each client. Our
goal is to be personally involved with every project and
work hand-in-hand with our clients, subcontractors,
designers, architects and engineers. Alpha Construction
has a solid reputation in our community with our
clientele, contractors, suppliers and building officials.</p> -->
  <p class="p1">{{ homeBioLeft }}</p>
      <p class="p1">{{ homeBioRight }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    homeBioRight: {
      default: ''
    }, 
    homeBioLeft: {
      default: ''
    }
  }
}

</script>

<style lang="scss">

.home-bio-wrapper {
  padding: span(2);
  color: $white;

  .home-bio-inner {

    .p1:first-child {
      margin-bottom: $margin-large;
    }
  }

  @include respond-to($tablet) {
    .home-bio-inner {
      display: flex; 
      align-items: flex-start;
      justify-content: space-between;

      .p1 {
        width: span(12);
      }

      .p1:first-child {
        margin-bottom: 0
      }
    }
  }
}

</style>