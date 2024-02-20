<template>
  <ul class="todo-list">
    <AppTodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import AppTodoItem from '@/components/AppTodoItem.vue';
import { ITodoItem } from '@/models';

export default defineComponent({
  components: { AppTodoItem },
  props: {
    todos: {
      type: Array as PropType<ITodoItem[]>,
      required: true,
    },
  },
  methods: {
    toggleTodo(todoId: number) {
      this.$emit('toggleTodo', todoId);
    },
    removeTodo(todoId: number) {
      this.$emit('removeTodo', todoId);
    },
  },
  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    removeTodo: (id: number) => Number.isInteger(id),
  },
});
</script>
