<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-3">
    <q-header class="bg-grey-3 text-grey-9" reveal height-hint="60">
      <header-menu />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-3 text-grey-7"
      :width="200"
    >
      <side-menu/>
    </q-drawer>

    <q-page-container>
      <router-view style="padding-top: 60px"/>

      <q-page-sticky expand position="top">
        <q-toolbar class="GPLAY__sticky bg-white q-px-xl">
          <q-space />
          <q-btn icon="help" dense flat size="12px" class="GPLAY__sticky-help" />
          <q-btn icon="settings" dense flat class="GPLAY__sticky-settings q-ml-md" size="12px" />
        </q-toolbar>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import SideMenu from 'components/_main/SideMenu.vue'
import HeaderMenu from 'components/_main/HeaderMenu.vue'

import { defineComponent, ref, computed } from '@vue/composition-api'
import { appName, appVersion } from '../config/app'

export default defineComponent({
  name: 'MainLayout',
  components: { SideMenu, HeaderMenu },
  setup (_, { root }) {
    return { 
      leftDrawerOpen: computed({
        get: () => root.$store.state.configs.leftDrawerOpen,
        set: () => root.$store.dispatch('configs/toogleLeftDrawerOpen')
      }), 
      appVersion, 
      appName 
    }
  }
})
</script>

<style lang="sass">
.GPLAY

  &__toolbar
    height: 60px

  &__logo
    width: 183px
    height: 39px

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    max-width: 60px
    width: 100%

  &__drawer-link

    .q-item__section--avatar
      margin: -8px 0 -8px -16px
      padding: 8px 0 8px 16px

    .q-item__section--main
      margin: -8px -16px -8px 16px
      padding: 8px 16px 8px 2px
      font-size: 18px
      font-weight: 300

    &--apps, &--movies, &--music, &--books, &--devices
      background: #f5f5f5!important
      &:hover
        color: #eee !important

    &--apps:hover
      background: #43a047!important

    &--movies:hover
      background: #e53935!important

    &--music:hover
      background: #fb8c00!important

    &--books:hover
      background: #1e88e5!important

    &--devices:hover
      background: #546e7a!important

  &__drawer-item
    padding: 6px 12px 6px 23px

  &__sticky
    min-height: 49px
    border-bottom: 1px solid rgba(0,0,0,0.12)

  &__sticky-help
    border: 1px solid #ccc
    padding-left: 8px
    padding-right: 8px

  &__sticky-settings
    padding-left: 17px
    padding-right: 17px
    border: 1px solid #ccc
</style>
