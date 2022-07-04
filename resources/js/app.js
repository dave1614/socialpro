import { createApp, h } from "vue";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";


import { ZiggyVue } from "ziggy";
import { Ziggy } from "./ziggy";
import '@ocrv/vue-tailwind-pagination/styles';
import Swal from 'sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import DropZone from 'dropzone-vue';



// import Axios from 'axios';



InertiaProgress.init();

createInertiaApp({
    resolve: async (name) => {
        return (await import(`./Pages/${name}`)).default;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            // .use(DropZone)
            // .use(require('axios'))
            .use(ZiggyVue, Ziggy)
            .use(VueAxios, axios)
            
            
            .component('file-upload', require('@yazan.alnughnugh/file-upload').default)
            .component("Link", Link)
            .component("Head", Head)
            
            
            .mixin({ methods: { route } })
            .mount(el);
    },
});