<template>
  <g id="ae928e33-38f4-4e03-bca3-586351cb6598" data-name="Pink Jacket">
    <path
      d="M95.9,144.622s-12.667-3.3-18.322-6.674l9.309,21.61,18-.751,7.978-20.432C106.949,142,95.9,144.622,95.9,144.622Z"
      transform="translate(-23.449 -25.821)" :fill="secondaryColor"></path>
    <path
      d="M138.545,157.552c-6.051,2.76-17.109,4.52-29.539,5.26H80.8c-12.49-.74-23.689-2.5-29.97-5.26-.51-.22,2.8-8.4,3.851-11.91s5.139-4.2,5.139-4.2,15.73-3.1,18.14-4.129a.459.459,0,0,0,.071-.03l17.779,21.026,16.621-20.657c4.229,1.25,17.129,3.79,17.129,3.79s4.09.7,5.141,4.2S139.045,157.322,138.545,157.552Z"
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
        default: "#ffffff"
      }
    }
  };
</script>
