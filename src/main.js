import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js';

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faPlus, 
    faBolt, 
    faEllipsis, 
    faTag, 
    faEnvelopeOpen, 
    faMagnifyingGlass, 
    faAngleLeft, 
    faLock,
    faFileInvoice,
    faUserTag,
    faTags,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faPlus, 
    faBolt, 
    faEllipsis, 
    faTag, 
    faEnvelopeOpen, 
    faMagnifyingGlass, 
    faAngleLeft, 
    faLock,
    faFileInvoice,
    faUserTag,
    faTags,
    faPaperPlane
    );


const app = createApp(App)
            .component("font-awesome-icon", FontAwesomeIcon)

app.use(router)
app.use(store)


app.mount('#app')
