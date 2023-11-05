<template>
  <div>
    <it-accordion :id="id" flush>
      <it-accordion-item title="Test first title">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
        the appropriate classes that we use to style each element. These classes control the overall appearance, as well
        as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
        default variables. It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>.
      </it-accordion-item>
      <it-accordion-item title="Test second long-long title">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
        the appropriate classes that we use to style each element. These classes control the overall appearance, as well
        as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
        default variables. It's also worth noting that just about any HTML can go within the
        <code>.accordion-body</code>, though the transition does limit overflow.
      </it-accordion-item>
      <it-accordion-item title="Test third title">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
        the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can
        go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </it-accordion-item>
    </it-accordion>
  </div>
</template>

<script>
export default {
  name: 'AppAccordion',
  data() {
    return {
      id: '3rem',
    };
  },
};
</script>
