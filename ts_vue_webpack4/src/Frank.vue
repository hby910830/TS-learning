<template>
  <div>
    <div>
      {{number}}
    </div>
    <div>
      <button @click="add">+</button>
      <button @click="minus">-</button>
    </div>
  </div>

</template>

<script lang="ts">
  export default {
    name: 'Frank',
    data() {
      return {
        number: 0
      }
    },
    methods: {
      add():void {
        let num: number = this.number + 1
        this.number = num
      },
      minus():void {
        let num: number = this.number - 1
        this.number = num
      }
    }
  }
</script>