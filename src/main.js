import { createApp } from "vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Toast from 'primevue/toast';
import Button from 'primevue/button';

import App from "./App.vue";
import router from "./router";

import "primeicons/primeicons.css";
import "./style.css";

const app = createApp(App);

app.component('InputText', InputText);
app.component('Avatar', Avatar);
app.component('Menu', Menu);
app.component('Toast', Toast);
app.component('Button', Button);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
