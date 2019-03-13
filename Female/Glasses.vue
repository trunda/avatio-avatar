<template>
  <component :is="typeComponent" :color="color"/>
</template>

<script>
import TypeA from "../Common/Glasses/TypeA";
import TypeB from "../Common/Glasses/TypeB";
import TypeC from "../Common/Glasses/TypeC";
import TypeD from "../Common/Glasses/TypeD";
import TypeFemaleA from "./Glasses/TypeA";
import UseColor from "../Mixins/UseColor";

export default {
  mixins: [UseColor],
  components: { TypeA, TypeB, TypeC, TypeD, TypeFemaleA },
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
