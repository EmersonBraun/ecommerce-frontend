export default [
  {
    path: '/usuarios',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/List.vue') },
      { path: '', component: () => import('pages/user/Form.vue') }
    ]
  }
]
