export default [
  {
    path: '/telefones',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/phone/List.vue') },
      { path: '', component: () => import('pages/phone/Form.vue') }
    ]
  }
]
