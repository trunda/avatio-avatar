import Color from "color";

export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },

  methods: {
    darken(value) {
      return Color(this.color).darken(value);
    },
    lighten(value) {
      return Color(this.color).lighten(value);
    }
  }
}
