export default [
  {
    path: '/grupos_usuarios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user_group/List.vue') },
      { path: '', component: () => import('pages/user_group/Form.vue') }
    ]
  }
]
