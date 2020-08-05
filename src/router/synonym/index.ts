export default [
  {
    path: '/sinonimos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/synonym/List.vue') },
      { path: '', component: () => import('pages/synonym/Form.vue') }
    ]
  }
]
