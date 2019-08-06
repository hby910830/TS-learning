<template>
  <div class="todoList">
    <ol>
      <li v-for="(todoItem,index) in list" :key="index">
        <input type="checkbox"
               :checked="todoItem.status === 'done'"
               @change="changeStatus(todoItem,index, $event)"
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
    changeStatus(todoItem: Todo, index: number, e: Event) {
      let checked = (<HTMLInputElement>(e.target)).checked
      this.$emit('updateTodo', todoItem, index, {status: checked ? 'done' : 'todo'})
    }
  }
</script>

<style lang="scss" scoped>
  .todoList {

  }
</style>