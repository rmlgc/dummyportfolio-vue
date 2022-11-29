import Scrollbar from "smooth-scrollbar";
import './smooth-scrollbar.css'


export default {
    install: (app, options) => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        options = {
            damping: isMobile ? 0.05 : 0.1,
            thumbMinSize: 20,
            renderByPixels: !('ontouchstart' in document),
            alwaysShowTracks: true,
            continuousScrolling: true,
        };
        // document.querySelector('.smth-scrollbar').forEach((el) => {
        //     console.log(el)
        //     Scrollbar.init(el, options);
        // })

        app.directive("smth-scrollbar", (el, binding, vnode) => {
            el.classList.add('smth-scrollbar')
            // console.log('el______________________')
            Scrollbar.init(el, options);
            // console.log(el)
            // console.log('binding_________________')
            // console.log(binding)
            // console.log('vnode___________________')
            // console.log(vnode)
            // console.log('________________________')
        });

        /* declare global component */
        // app.component("my-header", MyHeader);
    },
};