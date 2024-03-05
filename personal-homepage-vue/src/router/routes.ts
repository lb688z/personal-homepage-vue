export const routes = [
  {
    path: '/',
    redirect: '/home',
    children:[
      {
        name:'home',
        path:'home',
        component:()=>import('@/views/home/index.vue'),
        meta: {
          title: 'tabbar.home',
          keepAlive: true,
        },
      }
    ]
  }
]

export default routes;