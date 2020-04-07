import './styles/form.scss';
import { handleSubmit } from './js/handleSubmit';
import { postData } from "./js/postData";
import { buildTable } from "./js/buildTable";

require("regenerator-runtime/runtime");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        })
    })
}

export {
    handleSubmit,
    postData,
    buildTable
}
