<template>
  <g>
    <path
      :fill="color"
      d="M129.351,143.468a26.1,26.1,0,0,0-7.693,17.379,158.406,158.406,0,0,1-53.635.184c-.05-.821-.392-11.833-8.081-17.789,3.22-2.981,7.953-3.752,10.1-4.342,3.168,4.615,11.237,10.728,22.5,11.187,11.821.481,22.526-4.013,26.55-11.229A30.723,30.723,0,0,1,129.351,143.468Z"
      transform="translate(-23.449 -25.821)"
    ></path>
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
  }
};
</script>