import home from '@/view/HomeView.vue'

import { createRouter,createWebHashHistory} from "vue-router";
const routes = [
  { path: "/", component: home },  
    {
      path: '/home',
      name: 'home',
      component: home,
    },
  ]
  const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
  })

  export default router

