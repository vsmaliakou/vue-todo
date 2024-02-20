<template>
  <section class="add-todo">
    <button
      v-if="!isFormVisible"
      class="add-todo__show-form-button"
      @click="toggleFormVisibility"
    >
      <i class="bi bi-plus-lg"></i>
    </button>

    <form
      v-else
      class="add-todo__form"
      @submit.prevent="handleAddTodo"
    >
      <button
        class="close-button"
        type="button"
        @click="toggleFormVisibility"
      >
        <i class="bi bi-x"></i>
      </button>

      <div class="text-input text-input--focus">
        <input
          class="input"
          v-model="todoText"
        />
      </div>

      <button class="button button--filled">Add task</button>
    </form>
  </section>
</template>

<script lang="ts">
import { ITodoItem } from '@/models';
import { defineComponent } from 'vue';

interface IState {
  isFormVisible: boolean;
  todoText: string;
}

export default defineComponent({
  data(): IState {
    return {
      isFormVisible: false,
      todoText: '',
    };
  },
  methods: {
    toggleFormVisibility() {
      this.todoText = '';
      this.isFormVisible = !this.isFormVisible;
    },
    handleAddTodo() {
      this.$emit('addTodo', {
        id: Date.now(),
        text: this.todoText,
        completed: false,
      });
      this.toggleFormVisibility();
    },
  },
  emits: {
    addTodo: (todo: ITodoItem) => todo,
  },
});
</script>
