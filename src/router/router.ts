import pagesJson from '../pages.json'
import pagesJsonToRoutes from 'uni-parse-pages'

const router = createRouter({
  routes: [...pagesJsonToRoutes(pagesJson)] // 路由表信息
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next()
})
router.afterEach((to, from) => {
  console.log('afterEach');
  
})

export default router