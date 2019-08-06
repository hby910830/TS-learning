<template>
  <div class="todoList">
    <ol>
      <li v-for="(todoItem,index) in list" :key="index">
        <input type="checkbox"
               :checked="todoItem.status === 'done'"
               @change="changeStatus(todoItem)"
        >{{todoItem.name}}
      </li>
    </ol>
  </div>

</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Todo from '../models/Todo'

  @Component({
    props: {
      list: Array,
    }
  })
  export default class TodoList extends Vue {
    changeStatus(todoItem: Todo){
      console.log(todoItem);
    }
  }
</script>

<style lang="scss" scoped>
  .todoList {

  }
</style>