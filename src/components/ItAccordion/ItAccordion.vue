<template>
  <div :id="computedId" class="accordion" :class="computedClasses">
    <slot />
  </div>
</template>

<script>
import {getId} from '../../utils';

export default {
  name: 'ItAccordion',
  props: {
    flush: {
      type: Boolean,
      required: false,
    },
    free: {
      type: Boolean,
      required: false,
    },
    id: {
      type: String,
      required: false,
    },
  },
  computed: {
    computedId() {
      let id = this.id;
      if (!this.id) {
        id = getId('accordion');
      }
      return id;
    },
    computedClasses() {
      return {
        accordion: true,
        'accordion-flush': this.flush,
      };
    },
  },
};
</script>
