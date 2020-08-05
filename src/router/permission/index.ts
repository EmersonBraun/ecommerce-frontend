export default [
  {
    path: '/permissoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/permission/List.vue') },
      { path: '', component: () => import('pages/permission/Form.vue') }
    ]
  }
]
