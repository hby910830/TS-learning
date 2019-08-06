<template>
  <div id="app">
    <div class="inner">
      <new-todo @addTodo="addTodo"></new-todo>
      <todo-list :list="list"></todo-list>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import NewTodo from './components/NewTodo.vue'
  import TodoList from './components/TodoList.vue'

  interface Todo {
    name: String;
    status: 'done' | 'todo' | 'deleted';
  }

  @Component({
    components: {
      NewTodo,
      TodoList
    }
  })

  export default class App extends Vue {
    list: Array<Todo> = [
      {name: '任务1', status: 'todo'},
      {name: '任务2', status: 'done'}
    ]

    addTodo(name: string) {
      let todo: Todo = {name, status: 'todo'}
      this.list.push(todo)
    }
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    > .inner {
      border: 1px solid grey;
      padding: 20px;
    }
  }
</style>
