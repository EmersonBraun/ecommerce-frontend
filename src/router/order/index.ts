export default [
  {
    path: '/pedidos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/order/List.vue') },
      { path: '', component: () => import('pages/order/Form.vue') }
    ]
  }
]
