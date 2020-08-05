export default [
  {
    path: '/arquivos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/asset/List.vue') },
      { path: '', component: () => import('pages/asset/Form.vue') }
    ]
  }
]
