<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchNews, NewsItem } from '@/api'
import ListItem from '../components/ListItem.vue'

export default Vue.extend({
  components: {
    ListItem,
  },
  data() {
    return {
      newsItems: [] as NewsItem[],
    }
  },
  methods: {
    async fetchNewsItems() {
      try {
        const response = await fetchNews()
        console.log(response.data)
        this.newsItems = response.data || []
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.fetchNewsItems()
  },
})
</script>

<style></style>
