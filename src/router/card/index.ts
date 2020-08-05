export default [
  {
    path: '/cartoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/card/List.vue') },
      { path: '', component: () => import('pages/card/Form.vue') }
    ]
  }
]
