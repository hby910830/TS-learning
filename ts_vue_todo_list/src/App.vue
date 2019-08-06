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
    },
    watch:{
      list(newValue:Array<Todo>){
        let string = JSON.stringify(newValue)
        localStorage.setItem('data', string)
      }
    }
  })

  export default class App extends Vue {
    //<string>localStorage.getItem('data')  断言它肯定是字符串
    list: Array<Todo> = localStorage.getItem('data') ? JSON.parse(<string>localStorage.getItem('data')) : []
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
