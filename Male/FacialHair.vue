<template>
  <component :is="typeComponent" :color="color"/>
</template>

<script>
  import TypeA from "./FacialHair/TypeA";
  import TypeB from "./FacialHair/TypeB";
  import TypeC from "./FacialHair/TypeC";
  import TypeD from "./FacialHair/TypeD";
  import TypeE from "./FacialHair/TypeE";
  import TypeF from "./FacialHair/TypeA";
  import UseColor from "~/Mixins/UseColor";

  export default {
    mixins: [UseColor],
    components: { TypeA, TypeB, TypeC, TypeD, TypeE, TypeF },
    props: {
      type: {
        type: String,
        default: "A"
      },
    },
    computed: {
      typeComponent() {
        return "Type" + this.type;
      }
    }
  };
</script>
