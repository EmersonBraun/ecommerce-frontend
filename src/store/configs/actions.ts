import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ConfigStateInterface } from './state'

const actions: ActionTree<ConfigStateInterface, StateInterface> = {
  toogleLeftDrawerOpen (context, state: ConfigStateInterface) {
    context.commit('toogleLeftDrawerOpen', state)
  }
}

export default actions
