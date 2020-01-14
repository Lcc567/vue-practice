import Vue from "vue";
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import zfMenu from "./components/zf-menu";
import zfMenuItem from "./components/zf-menu-item";
import zfSubmenu from "./components/zf-submenu";
import Resub from "./Resub";

Vue.component('zfMenu', zfMenu)
Vue.component('zfMenuItem', zfMenuItem)
Vue.component('zfSubmenu', zfSubmenu)
Vue.component('Resub', Resub)
Vue.use(ElementUI);

Vue.prototype.$dispatch = function (eventName, value) {
    let parent = this.$parent;
    while (parent) {
        parent.$emit(eventName, value);
        parent = parent.$parent;
    }
}

Vue.prototype.$broadcast = function (eventName, value) {
    let children = this.$children;
    function broad(children) {
        children.forEach(child => {
            child.$emit(eventName, value)
            if (child.$children) {
                broad(child.$children)
            }
        });
    }

    broad(children)
}

Vue.prototype.$bus = new Vue


new Vue({
    el: '#app',
    render: h => h(App)
})