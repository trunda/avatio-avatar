<template>
  <g id="b696b404-5880-4cf1-8b60-43e02b283e0d" data-name="Vrstva 42">
    <path
      d="M138.407,157.543c-6.05,2.76-17.109,4.52-29.539,5.26a240.921,240.921,0,0,1-28.21,0c-12.49-.74-23.69-2.5-29.97-5.26-.51-.22,2.8-8.4,3.85-11.91s5.14-4.2,5.14-4.2,10.83-2.14,15.9-3.45c3.012,3.067,12.8,6.621,17.26,6.621l3.35,15.1,3.36-15.1c4.32,0,12.37-3.221,15.149-6.33,5.4,1.319,14.72,3.159,14.72,3.159s4.09.7,5.141,4.2S138.907,157.313,138.407,157.543Z"
      transform="translate(-23.449 -25.821)" :fill="color"></path>
  </g>
</template>

<script>
  import Color from "color";

  export default {
    props: {
      color: {
        type: String,
        default: "#282525"
      },
      secondaryColor: {
        type: String,
        default: "#282525"
      }
    },
    created() {
      this.$color = Color;
    }
  };
</script>
