<template>
  <g>
    <path
      d="M131.44,144.992a9.98,9.98,0,0,0-1.611-1.43,21.98,21.98,0,0,0-7.432-3.542c-12.369,11.568-60.615,12.566-67.873,10.207-.975,1.853-1.772,3.356-2.223,4.4-.365.844-.576,1.479-.341,1.59,24.9,11.83,80.4,6.477,85.9-.777A45.323,45.323,0,0,0,131.44,144.992Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
  </g>
</template>

<script>

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
