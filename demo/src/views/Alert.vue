<template>
  <div>
    <it-alert variant="primary"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="secondary" :dismissible="dismissible"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="success"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="danger"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="warning"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="info"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="light"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
    <it-alert variant="dark"
      ><strong>Holy guacamole!</strong> You should check in on some of those fields below.</it-alert
    >
  </div>
</template>

<script>
export default {
  name: 'AppCountdown',
  data() {
    return {
      dismissible: false,
    };
  },
};
</script>
