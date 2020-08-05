<template>
  <q-list>
    <q-item clickable class="GPLAY__drawer-link bg-grey-10 text-grey-3">
      <q-item-section avatar class="text-grey-1">
        <q-icon name="weekend" />
      </q-item-section>
      <q-item-section class="text-grey-3">
        <q-item-label>Entertainment</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--apps">
      <q-item-section avatar class="bg-green-7 text-grey-1 text-center">
        <q-icon name="android" />
      </q-item-section>
      <q-item-section class="apps-text">
        <q-item-label>Apps</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--movies">
      <q-item-section avatar class="movies-icon bg-red-7 text-grey-1 text-center">
        <q-icon name="local_movies" />
      </q-item-section>
      <q-item-section class="movies-text">
        <q-item-label>Movies & TV</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--music">
      <q-item-section avatar class="music-icon bg-orange-7 text-grey-1 text-center">
        <q-avatar size="22px" color="white" text-color="orange-7" icon="music_note" />
      </q-item-section>
      <q-item-section class="music-text">
        <q-item-label>Music</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--books">
      <q-item-section avatar class="books-icon bg-blue-7 text-grey-1 text-center">
        <q-icon name="book" />
      </q-item-section>
      <q-item-section class="books-text">
        <q-item-label>Books</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable class="GPLAY__drawer-link GPLAY__drawer-link--devices">
      <q-item-section avatar class="devices-icon bg-blue-grey-7 text-grey-1 text-center">
        <q-icon name="devices" />
      </q-item-section>
      <q-item-section class="devices-text">
        <q-item-label>Devices</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator class="q-mb-md" />

    <q-item v-for="link in links1" :key="link.text" v-ripple dense clickable class="GPLAY__drawer-item">
      <q-item-section class="text-grey-8">
        <q-item-label>{{ link.text }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
export default defineComponent({
  name: 'SideMenu',
  setup() {
    const { search, storage, links1 } = reactive({
      search: '',
      storage: 0.26,
      links1: [
        { text: 'Account' },
        { text: 'Payment methods' },
        { text: 'My subscriptions' },
        { text: 'Redeem' },
        { text: 'Buy gift card' },
        { text: 'My wishlist' },
        { text: 'My Play activity' },
        { text: 'Parent guide' }
      ]
    })
    return {
      search, storage, links1
    }
  }
})
</script>
