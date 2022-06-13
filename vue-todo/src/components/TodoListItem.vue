<template>
  <li class="item">
    <span
      class="item__text"
      :class="{ 'is-complete': todoItemClass }"
      @click="$emit('toggle', todoItem, index)"
    >
      {{ todoItem }}
    </span>
    <button @click="$emit('remove', index)">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from '@/App.vue';
import Vue, { PropType } from 'vue';

export default Vue.extend({
  props: {
    todoItem: {
      type: Object as PropType<Todo>,
      default: () => ({ value: '', done: false }),
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    todoItemClass(): string | null {
      return this.todoItem.done ? 'is-complete' : null;
    },
  },
});
</script>

<style lang="scss" scoped>
.item {
  position: relative;

  &__text {
    cursor: pointer;
  }

  .is-complete {
    text-decoration: line-through;
  }
}
</style>
