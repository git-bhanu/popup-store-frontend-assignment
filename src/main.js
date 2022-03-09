import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngry } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngry);

const app = createApp(App)
            .component("font-awesome-icon", FontAwesomeIcon)

app.use(router)

app.mount('#app')
