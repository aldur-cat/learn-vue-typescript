<template>
  <div>
    <header><h1>Vue Todo with Typescript</h1></header>
    <TodoInput
      :item="todoText"
      @input="updateTodoText"
      @addTodo="addTodoItem"
    />
    <div>
      <ul>
        <TodoListItem
          v-for="(todoItem, index) in todoItems"
          :key="index"
          :todo-item="todoItem"
          :index="index"
          @remove="removeTodoItem"
          @toggle="toggleTodoDone"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
  save(todoItems: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoItems));
  },
  fetch(): Todo[] {
    const todoItems = localStorage.getItem(STORAGE_KEY) || '[]';
    const result = JSON.parse(todoItems);
    return result;
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: {
    TodoInput,
    TodoListItem,
  },
  data() {
    return {
      todoText: '',
      todoItems: [] as Todo[],
    };
  },
  created() {
    this.fetchTodoItems();
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push({ title: value, done: false });
      storage.save(this.todoItems);
      this.initTodoText();
      this.fetchTodoItems();
    },
    initTodoText() {
      this.todoText = '';
    },
    fetchTodoItems() {
      this.todoItems = storage
        .fetch()
        .sort((a, b) => (a.title > b.title ? 1 : -1));
    },
    removeTodoItem(index: number) {
      console.log(`삭제 ${index}`);
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    toggleTodoDone(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        ...todoItem,
        done: !todoItem.done,
      });
    },
  },
});
</script>

<style lang="scss" scoped></style>
