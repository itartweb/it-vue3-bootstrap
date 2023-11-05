<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`${computedId}-heading`">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapsed"
        :data-bs-target="`#${computedId}`"
        :aria-expanded="toggleVisible ? 'true' : 'false'"
        :aria-controls="`${computedId}`"
        @click="slotToggle"
      >
        {{ title }}
      </button>
    </h2>
    <div
      :id="`${computedId}`"
      class="accordion-collapse collapse"
      :aria-labelledby="`${computedId}-heading`"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import {getId} from '../../utils';

export default {
  name: 'ItAccordionItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    collapse: {
      type: String,
      required: false,
    },
  },
  computed: {
    computedId() {
      return getId('accordion_item');
    },
  },
};
</script>
