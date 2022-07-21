import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'flexboxgrid2';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faCircleLeft,
  faCircleRight,
} from '@fortawesome/free-regular-svg-icons';

library.add(faCircleLeft, faCircleRight);

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app');
