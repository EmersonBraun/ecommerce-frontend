export default [
  {
    path: '/enderecos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/address/List.vue') },
      { path: '', component: () => import('pages/address/Form.vue') }
    ]
  }
]
