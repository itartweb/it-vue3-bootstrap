<template>
  <div>
    <it-alert><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert>
  </div>
</template>

<script>
export default {
  name: 'AppCountdown',
  data() {
    return {
      countdownSize: '3rem',
      deadlineISO: '2024-09-03T12:00:00',
    };
  },
};
</script>
