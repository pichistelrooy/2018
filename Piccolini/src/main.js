import Vue from 'vue'
import App from './views/App.vue'
import router from './router.js'
import BootstrapVue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
//import bModal from 'bootstrap-vue/es/components/modal/modal'
//import bModalDirective from 'bootstrap-vue/es/directives/modal/modal'
import bCard from 'bootstrap-vue/es/components/card/card'
import bCardHeader from 'bootstrap-vue/es/components/card/card-header'
import bCardBody from 'bootstrap-vue/es/components/card/card-body'
import bCardFooter from 'bootstrap-vue/es/components/card/card-footer'
import bTable from 'bootstrap-vue/es/components/table/table'
import bButton from 'bootstrap-vue/es/components/button/button'
//import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
//import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bListGroup from 'bootstrap-vue/es/components/list-group/list-group'
import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item'
import bAlert from 'bootstrap-vue/es/components/alert/alert'
//import bProgress from 'bootstrap-vue/es/components/progress/progress'
import bNav from 'bootstrap-vue/es/components/nav/nav'
import bNavItem from 'bootstrap-vue/es/components/nav/nav-item'
//import bFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
//import bFormRadioGroup from 'bootstrap-vue/es/components/form-radio/form-radio-group'
//import bFormRadio from 'bootstrap-vue/es/components/nav-itemform-radio'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
//Vue.component('b-modal', bModal);
//Vue.directive('b-modal', bModalDirective);
Vue.component('b-card', bCard);
Vue.component('b-card-header', bCardHeader);
Vue.component('b-card-body', bCardBody);
Vue.component('b-card-footer', bCardFooter);
Vue.component('b-table', bTable);
Vue.component('b-button', bButton);
//Vue.component('b-form-input', bFormInput);
//Vue.component('b-form-select', bFormSelect);
Vue.component('b-layout-container', bContainer);
Vue.component('b-list-group', bListGroup);
Vue.component('b-list-group-item', bListGroupItem);
Vue.component('b-alert', bAlert);
//Vue.component('b-progress', bProgress);
Vue.component('b-nav', bNav);
Vue.component('b-nav-item', bNavItem);
//Vue.component('b-form-group', bFormGroup);
//Vue.component('b-form-radiogroup', bFormRadioGroup);
//Vue.component('b-form-radio', bFormRadio);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
