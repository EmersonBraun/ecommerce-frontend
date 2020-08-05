import address from './address'
import asset from './asset'
import auth from './auth'
import card from './card'
import delivery from './delivery'
import group from './group'
import operation from './operation'
import order from './order'
import permission from './permission'
import phone from './phone'
import product from './product'
import stock_operation from './stock_operation'
import subgroup from './subgroup'
import synonym from './synonym'
import user from './user'
import user_group from './user_group'

import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  ...address,
  ...asset,
  ...auth,
  ...card,
  ...delivery,
  ...group,
  ...operation,
  ...order,
  ...permission,
  ...phone,
  ...product,
  ...stock_operation,
  ...subgroup,
  ...synonym,
  ...user,
  ...user_group,
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
