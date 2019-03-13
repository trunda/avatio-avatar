<template>
  <g>
    <circle cx="57.96" cy="112.687" r="1.5" :fill="color"></circle>
    <path
      d="M86.241,142.049a1.666,1.666,0,1,1-1.666-1.666A1.665,1.665,0,0,1,86.241,142.049Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
    <path
      d="M90.919,144.069a1.809,1.809,0,1,1-1.809-1.811A1.81,1.81,0,0,1,90.919,144.069Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
    <path
      d="M96.429,144.823a1.945,1.945,0,1,1-1.944-1.945A1.945,1.945,0,0,1,96.429,144.823Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
    <circle cx="83.718" cy="112.687" r="1.5" :fill="color"></circle>
    <circle cx="80.552" cy="116.109" r="1.666" :fill="color"></circle>
    <path
      d="M97.737,144.069a1.808,1.808,0,1,0,1.807-1.811A1.808,1.808,0,0,0,97.737,144.069Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
    <path
      d="M94.263,144.784c-7.551,0-13.694-3.809-13.694-8.492h.555c0,4.377,5.9,7.937,13.139,7.937s13.14-3.56,13.14-7.937h.555C107.958,140.975,101.816,144.784,94.263,144.784Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
  </g>
</template>

<script>

import UseColor from "../../Mixins/UseColor";

export default {
  mixins: [UseColor]
};
</script>
