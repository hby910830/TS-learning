<template>
  <div class="hello">
    {{name}}
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({
    props: {
      name: String
    }
  })
  export default class HelloWorld extends Vue {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
