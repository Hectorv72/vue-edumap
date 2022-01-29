<template lang="">
  <div>
    <div class="form-check" v-for="checkbox in checklist" :key="checkbox.id">
      <input @change="consoleMostrar($event.target)"  :id="checkbox.id" type="checkbox" :value="checkbox.value" />
      <label class="pl-2" for="educacion_comun">
        {{checkbox.name}}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CheckBoxFilter',
  props: {
    checklist: Array
  },
  data () {
    return {
      query: Object()
    }
  },
  methods: {
    consoleMostrar (target) {
      const value = target.value
      const checked = target.checked
      if (checked === true) {
        this.query[value] = 1
      } else {
        delete this.query[value]
      }
      console.log(this.query)
      this.$emit('update:value', this.query)
    }
  }
}
</script>
