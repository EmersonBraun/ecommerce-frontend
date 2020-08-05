export default [
  {
    path: '/login',
    component: () => import('layouts/EnterLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login.vue') }
    ]
  }
]
