<template>
  <component :is="typeComponent" :color="color"/>
</template>

<script>
  import TypeA from "./Mouth/TypeA";
  import TypeB from "./Mouth/TypeB";
  import TypeC from "./Mouth/TypeC";
  import TypeD from "./Mouth/TypeD";
  import UseColor from "../Mixins/UseColor";

  export default {
    mixins: [UseColor],
    components: {TypeA, TypeB, TypeC, TypeD},
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
