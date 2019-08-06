<template>
  <div id="app">
    Hi, TS vue! {{msg}}
    <button @click="fn">点我</button>
    <hello name="韩宝亿"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Hello from './components/HelloWorld.vue'

  @Component({
    components: {
      Hello,
    }
  })
  export default class App extends Vue {
    msg = '你好'

    fn() {
      alert('123')
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: red;
  }
</style>
