import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faBars, faArrowRight, faCommentsDollar, faHandshake, faQuestion,
faAngleRight, faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedinIn, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faTwitter, faFacebook, faYoutube,faLinkedinIn,
            faGithub, faUserCircle, faArrowRight, faCommentsDollar,
            faHandshake, faQuestion, faAngleRight, faChevronRight,
            faChevronLeft, faTimes )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
