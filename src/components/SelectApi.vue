<template lang="">
  <select
    class="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    v-on:change="$emit('update:value', $event.target.value)"
    :value="value"
  >
    <option value disabled readonly selected>{{placeholder}}</option>
    <option v-if="emptyValue !== undefined" :value="''">{{emptyValue}}</option>
    <option value v-if="list.length === 0" disabled readonly >cargando...</option>
    <option v-for="element in list" :key="element.id" :value="element[name]">
      {{element[name]}}
    </option>
  </select>
</template>

<script>
import fetchApi from '@/helpers/fetchApi.js'
export default {
  name: 'SelectApi',
  props: {
    api: String(''),
    name: String(''),
    value: String(''),
    placeholder: String(''),
    emptyValue: String('')
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getApiData()
    // console.log(typeof (emptyValue))
  },
  methods: {
    updateList (newList) {
      // this.$emit('update:list', newList)
      this.list = newList
    },
    getApiData () {
      if (this.api !== '') {
        fetchApi(this.api, {}, this.updateList)
      }
    }
  },
  watch: {
    api (newValue, lastValue) {
      // this.$emit('update:value', '')
      this.list = []
      this.getApiData()
    }
  }
}
</script>
