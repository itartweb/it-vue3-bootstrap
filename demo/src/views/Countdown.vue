<template>
  <div>
    <it-countdown :countdownSize="countdownSize" :deadlineISO="deadlineISO" />
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
