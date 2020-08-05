export default [
  {
    path: '/entregas',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/delivery/List.vue') },
      { path: '', component: () => import('pages/delivery/Form.vue') }
    ]
  }
]
