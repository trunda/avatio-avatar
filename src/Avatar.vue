<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 142.841 137.643">
    <title>Avatar</title>
    <component v-for="(component, id) in usableComponents" :key="id" :is="component"
               v-bind="optionsFor(component)"></component>
  </svg>
</template>

<script>
  import Eyes from "./Common/Eyes.vue";
  import Nose from "./Common/Nose.vue";
  import Mouth from "./Common/Mouth.vue";

  import FemaleHeadShape from "./Female/HeadShape.vue";
  import FemaleHair from "./Female/Hair.vue";
  import FemaleGlasses from "./Female/Glasses.vue";
  import FemaleClothes from "./Female/Clothes.vue";
  import FemaleAccessory from "./Female/Accessory.vue";

  import MaleHeadShape from "./Male/HeadShape.vue";
  import MaleHair from "./Male/Hair.vue";
  import MaleGlasses from "./Male/Glasses.vue";
  import MaleAccessory from "./Male/Accessory.vue";
  import MaleClothes from "./Male/Clothes.vue";
  import MaleFacialHair from "./Male/FacialHair.vue";

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
