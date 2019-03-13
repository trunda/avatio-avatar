<template>
  <component :is="typeComponent" :color="color" :secondary-color="secondaryColor"/>
</template>

<script>
import TypeA from "./Clothes/TypeA";
import TypeB from "./Clothes/TypeB";
import TypeC from "./Clothes/TypeC";
import TypeD from "./Clothes/TypeD";
import TypeE from "./Clothes/TypeE";
import TypeF from "./Clothes/TypeF";

export default {
  components: { TypeA, TypeB, TypeC, TypeD, TypeE, TypeF },
  props: {
    type: {
      type: String,
      default: "A"
    },
    color: {
      type: String,
      default: "#333"
    },
    secondaryColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    typeComponent() {
      return "Type" + this.type;
    }
  }
};
</script>
