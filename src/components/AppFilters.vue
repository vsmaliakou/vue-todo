<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filters"
        :key="filter"
        class="button"
        :class="{'button--primary': activeFilter === filter}"
        @click="handleFilterChange(filter)"
      >
        {{ filter }}
      </button>
    </section>
  </aside>
</template>

<script lang="ts">
import { EAppFilter } from '@/models';
import { PropType, defineComponent } from 'vue';

interface IState {
  filters: EAppFilter[];
}

export default defineComponent({
  props: {
    activeFilter: {
      type: String as PropType<EAppFilter>,
      required: true,
    },
  },
  data(): IState {
    return {
      filters: [...Object.values(EAppFilter)],
    };
  },
  methods: {
    handleFilterChange(filterValue: EAppFilter) {
      this.$emit('onFilterChange', filterValue);
    },
  },
  emits: {
    onFilterChange: (filterValue: EAppFilter) => filterValue,
  },
})
</script>
