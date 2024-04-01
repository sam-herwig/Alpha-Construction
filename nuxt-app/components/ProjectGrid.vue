<template>
  <section class="project-grid-wrapper">
    <div class="project-grid-inner">
      <h2 class="project-grid-title h4">Our Recent Projects</h2>
      <div class="cards">
        <div class="card-grid" v-for="card in cards">
          <SingleBuildCard 
            :title="card.buildTitle"
            :description="card.buildDescription"
            :cardImage="card.buildImage"
          />
        </div>
      </div>
    </div>  
  </section>
</template>

<script>
export default {
    props: {
        cards: Array
    },
}

</script>



<style lang="scss">
.project-grid-wrapper {
  padding: span(2);
  .project-grid-inner {

    .project-grid-title {
      margin-bottom: $margin-normal;
    }

    .cards  {
      display: flex; 
      justify-content: space-between;
      align-items: flex-start;
    }
    .card-grid{
      width: 45%;
    }

  }

}


</style>