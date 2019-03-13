<template>
  <svg data-name="avatar" viewBox="0 0 142.841 137.643">
    <title>Avatar</title>
    <component v-for="(component, id) in usableComponents" :key="id" :is="component"
               v-bind="optionsFor(component)"></component>
  </svg>
</template>

<script>
  import Eyes from "./src/Common/Eyes.vue";
  import Nose from "./src/Common/Nose.vue";
  import Mouth from "./src/Common/Mouth.vue";

  import FemaleHeadShape from "./src/Female/HeadShape.vue";
  import FemaleHair from "./src/Female/Hair.vue";
  import FemaleGlasses from "./src/Female/Glasses.vue";
  import FemaleClothes from "./src/Female/Clothes.vue";
  import FemaleAccessory from "./src/Female/Accessory.vue";

  import MaleHeadShape from "./src/Male/HeadShape.vue";
  import MaleHair from "./src/Male/Hair.vue";
  import MaleGlasses from "./src/Male/Glasses.vue";
  import MaleAccessory from "./src/Male/Accessory.vue";
  import MaleClothes from "./src/Male/Clothes.vue";
  import MaleFacialHair from "./src/Male/FacialHair.vue";

  import _ from 'lodash';
  import color from 'color';


  export default {
    props: {
      options: {
        required: true,
        type: Object,
      },
      config: {
        required: true,
        type: Object,
      }
    },
    components: {
      FemaleHeadShape,
      MaleHeadShape,
      FemaleHair,
      MaleHair,
      Eyes,
      Nose,
      Mouth,
      FemaleGlasses,
      MaleGlasses,
      FemaleClothes,
      MaleClothes,
      FemaleAccessory,
      MaleFacialHair,
      MaleAccessory,
    },

    methods: {
      darken(rgb, percent = 0.1) {
        return color(rgb).darken(percent).toString();
      },
      optionsFor(component) {
        const result = {};
        this.config.variants.forEach((variant) => {
          if (variant.component === component) {
            if (this.options[variant.component] && this.options[component][variant.prop]) {
              result[variant.prop] = this.options[component][variant.prop];
            }

            if (variant.colorFrom) {
              result['color'] = this.options[variant.colorFrom]['color'];
            }
          }

        });

        return result;
      }
    },

    computed: {
      usableComponents() {
        const components = [];
        this.config.variants.forEach((variant) => components.push(variant.component));

        return _.uniq(components);
      }
    }
  }
</script>
