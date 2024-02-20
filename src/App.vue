
<template>
  <AppHeader />

  <AppFilters
    :active-filter="activeFilter"
    @on-filter-change="onFilterChange"
  />

  <main class="app-main">
    <AppTodoList
      :todos="computedTodos"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />

    <AppAddTodo @add-todo="addTodo" />
  </main>

  <AppFooter :stats="computedStats" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFilters from '@/components/AppFilters.vue';
import AppTodoList from '@/components/AppTodoList.vue';
import AppAddTodo from '@/components/AppAddTodo.vue';
import AppFooter from '@/components/AppFooter.vue';
import { EAppFilter, IStats, ITodoItem } from '@/models';

interface IState {
  todos: ITodoItem[];
  activeFilter: EAppFilter;
}

export default defineComponent({
  components: { AppHeader, AppFilters, AppTodoList, AppAddTodo, AppFooter },
  data(): IState {
    return {
      todos: [
        { id: 0, text: 'Learn the basics of Vue', completed: true },
        { id: 1, text: 'Learn the basics of Typescript', completed: false },
        { id: 2, text: 'Subscribe to the channel', completed: false },
      ],
      activeFilter: EAppFilter.All,
    };
  },
  computed: {
    activeTodos(): ITodoItem[] {
      return this.todos.filter((todo) => !todo.completed);
    },
    doneTodos(): ITodoItem[] {
      return this.todos.filter((todo) => todo.completed);
    },
    computedTodos(): ITodoItem[] {
      switch (this.activeFilter) {
        case EAppFilter.Active: {
          return this.activeTodos;
        }
        case EAppFilter.Done: {
          return this.doneTodos;
        }
        case EAppFilter.All:
        default: {
          return this.todos;
        }
      }
    },
    computedStats(): IStats {
      return {
        active: this.activeTodos.length,
        done: this.doneTodos.length,
      };
    },
  },
  methods: {
    toggleTodo(todoId: number) {
      this.todos = this.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    },
    removeTodo(todoId: number) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    addTodo(todo: ITodoItem) {
      this.todos = [...this.todos, todo];
    },
    onFilterChange(filterValue: EAppFilter) {
      this.activeFilter = filterValue;
    },
  },
});
</script>
