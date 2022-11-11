import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as fcl from "@onflow/fcl";
import  * as flow from '../config/flow.config';
 import * as  properties from "../config/global.config"


fcl.config({
    "flow.network": "testnet",
    // "accessNode.api":'https://rest-testnet.onflow.org',
    "accessNode.api":flow.VUE_APP_ACCESS_NODE,

    "app.detail.title": "Test App",//dapp title
  
    "0xHelloWorld":flow.VUE_APP_HELLOWORLD,

})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$fcl = fcl
app.config.globalProperties.$properties = properties
app.mount('#app')
