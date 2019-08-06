<template>
  <div id="app">
    <div class="inner">
      <new-todo @addTodo="addTodo"></new-todo>
      <todo-list :list="list" @updateTodo="updateTodo"></todo-list>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import NewTodo from './components/NewTodo.vue'
  import TodoList from './components/TodoList.vue'
  import Todo from './models/Todo'

  @Component({
    components: {
      NewTodo,
      TodoList
    },
    watch: {
      list(newValue: Array<Todo>) {
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

    updateTodo(todo: Todo, index: number, part: Partial<Todo>) { /*Partial<Todo> 参数可以只包含Todo的一部分类型*/
      let newTodo: Todo = Object.assign({}, todo, part)
      this.list.splice(index, 1, newTodo)
    }
  }
</script>

<style scoped lang="scss">
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

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    ul, ol {
      list-style: none;
    }
  }
</style>