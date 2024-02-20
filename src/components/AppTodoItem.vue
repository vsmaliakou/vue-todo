<template>
  <li
    class="todo-item"
    :class="{'todo-item--done': todo.completed}"
    @click="handleToggleTodo"
  >
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>

    <span class="todo-item__text">{{ todo.text }}</span>

    <button
      class="todo-item__remove-button"
      @click.stop="handleRemoveTodo"
    >
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>

<script lang="ts">
import { ITodoItem } from '@/models';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<ITodoItem>,
      required: true,
    },
  },
  methods: {
    handleToggleTodo() {
      this.$emit('toggleTodo', this.todo.id);
    },
    handleRemoveTodo() {
      this.$emit('removeTodo', this.todo.id);
    },
  },
  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    removeTodo: (id: number) => Number.isInteger(id),
  },
});
</script>
