<template>
  <component
    :is="to ? 'NuxtLink' : 'div'"
    class="placeholder"
    :style="placeholderStyle"
    :to="to"
  >
    <div class="placeholder-inner">
      <h3 class="placeholder-title">{{ title }}</h3>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    aspectRatio: {
      type: Number,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    left: {
      type: String,
      default: '0'
    },
    margin: {
      type: String,
      default: '0'
    },
    padding: {
      type: String,
      default: "0 20px 20px"
    },
    title: {
      type: String,
      default: 'Placeholder'
    },
    width: {
      type: String,
      default: '100%'
    },
    to: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  computed: {
    placeholderStyle() {
      return {
        aspectRatio: this.aspectRatio,
        height: this.height,
        left: this.left,
        margin: this.margin,
        padding: this.padding,
        width: this.width
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.placeholder {
  display: block;
  padding: 0 span(1) span(1);
  position: relative;
  text-decoration: none;
}

.placeholder-inner {
  align-items: center;
  border: 2px dashed $white;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;
}

.placeholder-title {
  color: $white;

}
</style>
