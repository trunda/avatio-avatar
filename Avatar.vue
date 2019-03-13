<template>
  <svg data-name="avatar" viewBox="0 0 142.841 137.643" >
    <title>Avatar</title>
    <component v-for="(component, id) in usableComponents" :key="id" :is="component" v-bind="optionsFor(component)"></component>
  </svg>
</template>

<script>
  import Eyes from "~/components/Avatar/Common/Eyes.vue";
  import Nose from "~/components/Avatar/Common/Nose.vue";
  import Mouth from "~/components/Avatar/Common/Mouth.vue";

  import FemaleHeadShape from "~/components/Avatar/Female/HeadShape.vue";
  import FemaleHair from "~/components/Avatar/Female/Hair.vue";
  import FemaleGlasses from "~/components/Avatar/Female/Glasses.vue";
  import FemaleClothes from "~/components/Avatar/Female/Clothes.vue";
  import FemaleAccessory from "~/components/Avatar/Female/Accessory.vue";

  import MaleHeadShape from "~/components/Avatar/Male/HeadShape.vue";
  import MaleHair from "~/components/Avatar/Male/Hair.vue";
  import MaleGlasses from "~/components/Avatar/Male/Glasses.vue";
  import MaleAccessory from "~/components/Avatar/Male/Accessory.vue";
  import MaleClothes from "~/components/Avatar/Male/Clothes.vue";
  import MaleFacialHair from "~/components/Avatar/Male/FacialHair.vue";

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
              console.log(variant.colorFrom);
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
