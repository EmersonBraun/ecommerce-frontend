export default [
  {
    path: '/operacoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/operation/List.vue') },
      { path: '', component: () => import('pages/operation/Form.vue') }
    ]
  }
]
