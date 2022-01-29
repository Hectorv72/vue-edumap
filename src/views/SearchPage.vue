<template lang="">
  <!-- buscador -->
  <div class="pb-4">
    <div class="flex flex-row justify-center">
    <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605ae09611857400012a342e/picture" class="w-10">
    <h1 class="text-2xl font-bold place-self-center">EduMap</h1>
    </div>
    <h4 class="text-xl">Buscador de instituciones educativas</h4>
  </div>
  <div class="flex justify-center pb-4">
    <div class="w-3/4 md:w-1/2 flex flex-row">
      <searcher class="w-full sm-11/12"
        v-model="search"
        v-on:input="searchTimer"
      />
      <div class="w-auto flex p-2 justify-center">
        <button v-on:click="changeFilterVisibility" class="flex items-center text-sm w-auto hover:text-green-500"><i class=" gg-list"></i></button>
      </div>
    </div>
  </div>

  <!-- filtros -->
  <div class="flex justify-center pl-2 pr-2 md:pl-0 md:pr-0 pb-3 ">
    <div class="w-full md:w-1/2">
      <div :class="{hidden:showed}" >
        <filters @update:query="updateFilter" />
        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white text-sm py-1 px-2 border border-green-500 hover:border-transparent rounded" @click="searchFilter">Buscar</button>
      </div>
    </div>
  </div>

  <!-- loader -->
  <div class="flex items-center justify-center space-x-2 animate-pulse" v-if="loader" >
    <div class="w-8 h-8 bg-green-600 rounded-full"></div>
  </div>

  <!-- mensaje de error y listado -->
  <div v-else>
    <div v-if="error !== null">
      {{error}}
    </div>
    <list-establecimientos class="pb-3" v-else v-bind:list="list" />
    <pagination class="pb-5" :page="page" :previous="handlePreviousPage" :next="handleNextPage" :set="handleSetPage" />
  </div>

</template>
<script>
import ListEstablecimientos from '@/components/ListEstablecimientos.vue'
import Searcher from '@/components/Searcher.vue'
import Filters from '@/components/Filters.vue'
import Pagination from '@/components/Pagination.vue'
import fetchApi from '@/helpers/fetchApi.js'

export default {
  name: 'SearchPage',
  components: {
    ListEstablecimientos,
    Searcher,
    Filters,
    Pagination
  },
  data () {
    return {
      list: [],
      loader: Boolean(true),
      error: String(null),
      search: String(''),
      url: String('https://padron-establecimientos-arg.herokuapp.com/api/establecimientos'),
      timer: Number(0),
      showed: Boolean(true),
      filter: String(''),
      localFilter: String(''),
      page: Number(1),
      records: Number(5)
    }
  },
  created () {
    const query = this.$route.query

    if (query.page) {
      if (query.page <= 0) {
        this.page = 1
      } else {
        this.page = parseInt(query.page)
      }
    }
    this.searchEstablecimientos()
  },
  watch: {
    page () {
      this.$router.push({ path: window.location.pathname, query: { page: this.page } })
    }
  },
  methods: {
    async updateEstablecimientos (params) {
      let query = '?limit=5'
      if (params) {
        query = '?' + new URLSearchParams(params).toString()
      }
      this.loader = true
      this.list = []
      this.error = null
      try {
        const datos = await this.fetchEstablecimientos(query)
        if (datos.length !== 0) {
          setTimeout(() => {
            this.list = datos
            this.loader = false
          }, 100)
        } else {
          this.error = 'No se encontraror resultados :('
          this.loader = false
        }
      } catch (error) {
        this.loader = false
        this.error = 'Ocurrio un error vuelve a intentarlo'
      }
    },
    async fetchEstablecimientos (params) {
      try {
        const response = await fetchApi(this.url + params)
        if (response.ok) {
          const json = response.json
          return json
        } else {
          throw new Error(response)
        }
      } catch (error) {
        throw Error(error)
      }
    },
    async searchEstablecimientos (page = 1) {
      this.page = page
      let data = { ...this.filter, limit: this.records }

      if (this.search !== '') {
        data = { ...data, nombre: this.search }
      }
      if (this.page > 1) {
        data = { ...data, offset: (this.page - 1) * this.records }
      }
      this.updateEstablecimientos(data)
    },
    searchFilter () {
      this.filter = this.localFilter
      this.searchEstablecimientos()
    },
    searchTimer () {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.searchEstablecimientos()
      }, 800)
    },
    changeFilterVisibility () {
      this.showed = !this.showed
    },
    updateFilter (value) {
      this.localFilter = value
      // this.searchEstablecimiento()
    },
    handleNextPage () {
      this.searchEstablecimientos(this.page + 1)
    },
    handlePreviousPage () {
      if (this.page > 0) {
        this.searchEstablecimientos(this.page - 1)
      }
    },
    handleSetPage (value) {
      if (value > 0) {
        this.searchEstablecimientos(value)
      }
    }
  }
}
</script>
