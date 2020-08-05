export default [
  {
    path: '/grupos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/group/List.vue') },
      { path: '', component: () => import('pages/group/Form.vue') }
    ]
  }
]
