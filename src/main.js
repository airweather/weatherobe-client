import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App);

app.use(router).mixin(mixins).use(store).mount('#app');

window.Kakao.init(process.env.VUE_APP_KAKAO_LOGIN);
