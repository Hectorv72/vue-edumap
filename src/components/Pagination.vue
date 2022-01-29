<template lang="">
  <div>
    <ul class="inline-flex">
      <li>
        <button
          class="h-10 px-5 text-green-600 transition-colors duration-150 bg-white border border-r-0 border-green-600 rounded-l-lg focus:shadow-outline hover:bg-green-200 active:bg-violet-600"
          :disabled="page > 0 ? false : true"
          v-on:click="previous()"
        >
        Prev
        </button>
      </li>
      <li>
        <input
          class="h-10 text-center w-16 text-green-600 transition-colors duration-150 bg-white border border-green-600 focus:shadow-outline hover:bg-green-200 active:bg-violet-600"
          v-on:input="timerChangePage($event.target.value)"
          :value="page"
        />
      </li>
      <li>
        <button
          class="h-10 px-5 text-green-600 transition-colors duration-150 bg-white border border-l-0 border-green-600 rounded-r-lg focus:shadow-outline hover:bg-green-100"
          v-on:click="next()"
        >
        Next
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    page: Number(0),
    next: Function,
    previous: Function,
    set: Function
  },
  data () {
    return {
      timer: Number(0)
    }
  },
  methods: {
    timerChangePage (value) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => this.set(parseInt(value)), 800)
    }
  }
}
</script>
