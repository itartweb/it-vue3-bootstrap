import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import ItCountdown from './components/ItCountdown/ItCountdown.vue';
import ItAccordion from './components/ItAccordion/ItAccordion.vue';
import ItAccordionItem from './components/ItAccordion/ItAccordionItem.vue';
import ItAlert from './components/ItAlert/ItAlert.vue';

export default {
  install(Vue) {
    Vue.component('ItAccordion', ItAccordion);
    Vue.component('ItAccordionItem', ItAccordionItem);
    Vue.component('ItAlert', ItAlert);
    Vue.component('ItCountdown', ItCountdown);
  },
};

export {ItAccordion, ItAccordionItem, ItAlert, ItCountdown};
