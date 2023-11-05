<template>
  <div :class="computedClasses" ref="element" role="alert" aria-live="polite" aria-atomic="true">
    <slot />
    <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
</template>

<script>
export default {
  name: 'ItAlert',
  props: {
    dismissible: {
      type: Boolean,
      required: false,
      default: true,
    },
    variant: {
      type: String,
      required: false,
      default: 'info',
    },
  },
  computed: {
    computedClasses() {
      return {
        alert: true,
        fade: true,
        show: true,
        [`alert-${this.variant}`]: this.variant !== null,
        'alert-dismissible': this.dismissible,
      };
    },
  },
};
</script>
