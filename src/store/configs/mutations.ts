import { MutationTree } from 'vuex'
import { ConfigStateInterface } from './state'

const mutation: MutationTree<ConfigStateInterface> = {
  toogleLeftDrawerOpen (state: ConfigStateInterface) {
    state.leftDrawerOpen = !state.leftDrawerOpen
  }
}

export default mutation
