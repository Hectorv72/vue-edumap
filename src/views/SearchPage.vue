<template lang="">
  <div>
    <div class="flex justify-center">
      <div class="pb-5 w-3/4 md:w-1/2">
        <searcher
          v-model="search"
          v-on:input="searchEstablecimiento"
        />
      </div>
    </div>

    <div class="flex items-center justify-center space-x-2 animate-pulse" v-if="loader && !error">
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>

    <div v-if="error !== null">
      {{error}}
    </div>

    <list-establecimientos v-bind:list="list" v-else />
  </div>
</template>
<script>
import ListEstablecimientos from '@/components/ListEstablecimientos.vue'
import Searcher from '@/components/Searcher.vue'

export default {
  name: 'SearchPage',
  components: {
    ListEstablecimientos,
    Searcher
  },
  data: function () {
    return {
      list: [],
      loader: Boolean(true),
      error: String(null),
      search: String(''),
      url: String('https://padron-establecimientos-arg.herokuapp.com/api/establecimientos'),
      timer: Number(0)
    }
  },
  created: function () {
    this.fetchEstablecimientos()
  },
  methods: {
    async fetchEstablecimientos (params = '?limit=5') {
      this.loader = true
      this.list = []
      this.error = null
      try {
        const response = await fetch(this.url + params)
        console.log(this.url + params)
        if (response.ok) {
          const json = await response.json()
          if (json.length !== 0) {
            this.list = json
            this.loader = false
          }
        } else {
          this.error = 'Ocurrio un error vuelve a intentarlo'
        }
      } catch (error) {
        this.error = 'Ocurrio un error vuelve a intentarlo'
      }
    },
    searchEstablecimiento () {
      clearTimeout(this.timeout)
      // Make a new timeout set to go off in 800ms
      this.timeout = setTimeout(() => {
        const data = { nombre: this.search, jurisdiccion: 'formosa', limit: 5 }
        const params = new URLSearchParams(data).toString()
        this.fetchEstablecimientos('?' + params)
      }, 500)
    }
  }
}
</script>
