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

        app.directive("smth-scrollbar", (el, binding, vnode) => {
            el.classList.add('smth-scrollbar')
            Scrollbar.init(el, options);

        });
    },
};