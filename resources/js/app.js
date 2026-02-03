import './bootstrap';


import { createApp } from 'vue';
import router from './Router';
import App from './App.vue';
import Menu from './Components/menu.vue';

const app = createApp(App);
app.use(router);
app.component('Menu',Menu);
app.mount('#vue-app');
