<template>
  <g>
    <component :is="typeComponent" :color="color"/>
    <path
      d="M84.709,84.234a1.028,1.028,0,0,1-.4-.081c-3.463-1.446-7.742-.8-9.064-.054a1.035,1.035,0,1,1-1.022-1.8c1.908-1.083,6.883-1.726,10.884-.056a1.036,1.036,0,0,1-.4,1.992Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
    <path
      d="M105.459,84.234a1.036,1.036,0,0,1-.4-1.992c4-1.67,8.976-1.028,10.886.056a1.035,1.035,0,1,1-1.021,1.8c-1.323-.75-5.605-1.393-9.067.055A1.037,1.037,0,0,1,105.459,84.234Z"
      transform="translate(-23.449 -25.821)"
      :fill="color"
    ></path>
  </g>
</template>

<script>
import TypeA from "./Hair/TypeA";
import TypeB from "./Hair/TypeB";
import TypeC from "./Hair/TypeC";
import TypeD from "./Hair/TypeD";
import TypeE from "./Hair/TypeE";
import TypeF from "./Hair/TypeF";
import TypeG from "./Hair/TypeG";
import UseColor from '../Mixins/UseColor'

export default {
  mixins: [UseColor],
  components: { TypeA, TypeB, TypeC, TypeD, TypeE, TypeF, TypeG },
  props: {
    type: {
      type: String,
      default: "A"
    }
  },
  computed: {
    typeComponent() {
      return "Type" + this.type;
    }
  }
};
</script>
