<template>
  <g data-name="Hair__TypeB">
    <path
      data-name="Ternary"
      :fill="darken(.18)"
      d="M114.237,48.816c0,10.119-10.642,13.537-21.425,13.537s-19.524-3.2-19.524-13.322c0-8.752,8.74-13.752,19.523-13.752S114.237,38.7,114.237,48.816Z"
      transform="translate(-23.449 -25.821)"
    ></path>
    <path
      data-name="Secondary"
      :fill="darken(.15)"
      d="M81.027,50.613c-16.387-.8-26.29,23.283-13.79,45.319-7-23.848,12.986-21.819,16.784-34.788C85.524,56.014,85.239,50.818,81.027,50.613Z"
      transform="translate(-23.449 -25.821)"
    ></path>
    <path
      data-name="Primary"
      :fill="color"
      d="M123.345,95.431c.788-3.242,10.033-27.723-5.533-41.646-8.117-7.26-20.088-11.731-29.949-6.973-7.834,3.781-8.531,13.963-1.292,20.134C94.781,73.946,125.013,68.246,123.345,95.431Z"
      transform="translate(-23.449 -25.821)"
    ></path>
  </g>
</template>

<script>
  import UseColor from '../../Mixins/UseColor'

  export default {
    mixins: [UseColor],
  };
</script>
