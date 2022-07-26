import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'flexboxgrid2';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCircleLeft,
  faCircleRight,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

import WorkingTime from '@/components/Common/WorkingTime.vue';

library.add(faCircleLeft, faCircleRight, faTimesCircle);

createApp(App)
  .use(router)
  .component('fa-icon', FontAwesomeIcon)
  .component('working-time', WorkingTime)
  .mount('#app');
