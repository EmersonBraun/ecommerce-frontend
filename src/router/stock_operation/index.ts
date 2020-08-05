export default [
  {
    path: '/operacoes_estoque',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/stock_operation/List.vue') },
      { path: '', component: () => import('pages/stock_operation/Form.vue') }
    ]
  }
]
