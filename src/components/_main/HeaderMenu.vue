<template>
  <q-toolbar class="GPLAY__toolbar text-grey-6">
    <q-btn
      v-if="this.$q.platform.is.mobile || !leftDrawerOpen"
      flat
      dense
      round
      @click="toogleLeftDrawerOpen"
      aria-label="Menu"
      icon="menu"
      class="q-mr-sm"
    />

    <div class="q-pr-lg" v-if="$q.screen.gt.xs">
      LOGO DA LOJA - GRANDE
    </div>
    <div class="q-pr-lg text-bold" v-else>
      LOGO DA LOJA - PEQUENO
    </div>

    <q-space />

    <div class="GPLAY__toolbar-input-container row no-wrap">
      <q-input dense outlined square v-model="search" placeholder="Busca" class="bg-white col" />
      <q-btn class="GPLAY__toolbar-input-btn" color="primary" icon="search" unelevated />
    </div>

    <q-space />

    <div class="q-pl-md q-gutter-sm row no-wrap items-center">
      <q-btn round dense flat color="grey-8" size="14px" icon="apps">
        <q-tooltip>Google Apps</q-tooltip>
      </q-btn>

      <q-btn round dense flat color="grey-8" icon="notifications">
        <q-badge color="red" text-color="white" floating>
          2
        </q-badge>
        <q-tooltip>Notifications</q-tooltip>
      </q-btn>

      <q-btn round flat>
        <q-avatar size="26px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <q-tooltip>Account</q-tooltip>
      </q-btn>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
export default defineComponent({
  name: 'HeaderMenu',
  setup (_, { root }) {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen: computed(() => root.$store.state.configs.leftDrawerOpen),
      toogleLeftDrawerOpen: () => root.$store.dispatch('configs/toogleLeftDrawerOpen')
    }
  }
})
</script>
