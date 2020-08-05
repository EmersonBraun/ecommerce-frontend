export default [
  {
    path: '/produtos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/product/List.vue') },
      { path: '', component: () => import('pages/product/Form.vue') }
    ]
  }
]
