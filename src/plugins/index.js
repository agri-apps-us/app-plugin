import LeftNav from './components/LeftNav.vue';
import Main from './components/Main.vue';
import Dashboard from './views/Dashboard.vue';
import TimePeriod from './views/TimePeriod.vue';
import Inventory from './views/Inventory.vue';
import ReportOne from './views/ReportOne.vue';
import ReportTwo from './views/ReportTwo.vue';

const APP_SLUG = 'sample-app'

const plugin = {
    install(Vue, /*{firebase}*/) {

        // Global methods
        Vue.globalMethod = function () {
            // some logic
        }

        // Instance methods
        Vue.prototype.$myMethod = function (/*methodOptions*/) {
            // some logic
        }

        // Register required components
        Vue.component(`${APP_SLUG}-left-nav`, LeftNav)
        Vue.component(`${APP_SLUG}-main`, Main)
        Vue.component(`${APP_SLUG}-dashboard`, Dashboard)
        Vue.component(`${APP_SLUG}-time-period`, TimePeriod)
        Vue.component(`${APP_SLUG}-inventory`, Inventory)
        Vue.component(`${APP_SLUG}-report-one`, ReportOne)
        Vue.component(`${APP_SLUG}-report-two`, ReportTwo)

        // Register additional components
        //Vue.component('sample-app-some-other', SomeOther)
    }
}

const definition = {
    name: 'Sample App',
    description: 'A sample agri-apps application',
    slug: APP_SLUG,
    imageUrl: 'data:image/png;base64,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',
    //imageUrl: 'https://loremflickr.com/400/320/farm?id=sample-app',
    tags: ['some', 'tags', 'to', 'categorize']
}

export { plugin, definition }