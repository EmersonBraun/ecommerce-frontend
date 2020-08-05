export default [
  {
    path: '/subgrupos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/subgroup/List.vue') },
      { path: '', component: () => import('pages/subgroup/Form.vue') }
    ]
  }
]
