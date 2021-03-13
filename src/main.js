import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import GlobalComponents from "@/components";

const app = createApp(App)
for (const key  in GlobalComponents) {
    app.component(key,GlobalComponents[key])
}

app.use(store)
app.use(router)
app.mount('#app')
