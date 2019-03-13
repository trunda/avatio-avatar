<template>
  <g>
    <linearGradient
      :id="gradientId"
      x1="72.34"
      y1="94.276"
      x2="79.169"
      y2="94.276"
      gradientTransform="matrix(0.999, -0.039, 0.039, 0.999, 1.102, -0.852)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" :stop-color="color"></stop>
      <stop offset="1" :stop-color="secondaryColor"></stop>
    </linearGradient>
    <component :is="typeComponent" :gradient-url="gradientUrl"/>
  </g>
</template>

<script>


  import TypeA from "./Eyes/TypeA";
  import TypeB from "./Eyes/TypeB";
  import TypeC from "./Eyes/TypeC";
  import TypeD from "./Eyes/TypeD";
    import Color from 'color';

  export default {
    components: {TypeA, TypeB, TypeC, TypeD},
    props: {
      type: {
        type: String,
        default: "A"
      },
      color: {
        type: String,
        default: "#7FB4BE"
      }
    },
    computed: {
      gradientId() {
        return this.color.replace('#', '_');
      },

      typeComponent() {
        return "Type" + this.type;
      },
      gradientUrl() {
        return `url(#${this.gradientId})`;
      },
      secondaryColor() {
        return Color(this.color).darken(0.15);
      }
    }
  };
</script>
