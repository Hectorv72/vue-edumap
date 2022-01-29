<template lang="">
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-2">
    <!-- lista de jurisdicciones -->
    <select-api
      :api="'https://padron-establecimientos-arg.herokuapp.com/api/jurisdicciones'"
      :name= "'jurisdiccion'"
      @update:value="updateJurisdiccion"
      :placeholder="'Jurisdicción'"
      :emptyValue="'Todos'"
    />
    <!-- lista de departamentos -->
    <select-api

      :api="jurisdiccion !== '' ? 'https://padron-establecimientos-arg.herokuapp.com/api/departamentos/'+jurisdiccion : ''"
      :name= "'departamento'"
      @update:value="updateDepartamento"
      :placeholder="'Departamento'"
      :emptyValue="'Todos'"
    />

    <!-- lista de localidades -->
    <select-api
      :api=" departamento !== '' ? 'https://padron-establecimientos-arg.herokuapp.com/api/localidades/'+departamento : ''"
      :name= "'localidad'"
      @update:value="updateLocalidad"
      :placeholder="'Localidad'"
      :emptyValue="'Todos'"
    />

    <!-- lista de sectores -->
    <select-api
      :api="'https://padron-establecimientos-arg.herokuapp.com/api/sectores'"
      :name= "'sector'"
      @update:value="updateSector"
      :placeholder="'Sector'"
      :emptyValue="'Todos'"
    />

    <!-- lista de ambitos -->
    <select-api
      :api="'https://padron-establecimientos-arg.herokuapp.com/api/ambitos'"
      :name= "'ambito'"
      :placeholder="'Ambito'"
      :emptyValue="'Todos'"
    />

    <!-- <select class="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
      <option v-for="value in 5" :key="value">{{value*5}}</option>
    </select> -->

    <!-- checkbox modalidades -->
    <div class="col-span-2 sm:col-span-3">
      <span class="text-center">Modalidades:</span>
      <check-box-filter @update:value="updateModalidad" class="grid grid-cols-2 lg:grid-cols-3 gap-2 text-left border border-gray-500 bg-gray-100 rounded-tl-xl rounded-br-xl p-2" :checklist="modalidades" />
    </div>
  </div>
</template>
<script>
import SelectApi from '@/components/SelectApi.vue'
import CheckBoxFilter from '@/components/CheckBoxFilter.vue'
export default {
  name: 'Filters',
  data () {
    return {
      params: Object(),
      jurisdiccion: String(''),
      departamento: String(''),
      localidad: String(''),
      sector: String(''),
      ambito: String(''),
      modalidad: Object(),
      modalidades: [
        { id: 'check_educacion_comun', value: 'educacion_comun', name: 'Común' },
        { id: 'check_educacion_especial', value: 'educacion_especial', name: 'Especial' },
        { id: 'check_educacion_jovenes_y_adultos', value: 'educacion_jovenes_y_adultos', name: 'Jovenes y adultos' },
        { id: 'check_educacion_artistica', value: 'educacion_artistica', name: 'Artistica' },
        { id: 'check_educacion_hospitalaria_domiciliaria', value: 'educacion_hospitalaria_domiciliaria', name: 'Hospitalaria domiciliaria' },
        { id: 'check_educacion_intercultural_bilingue', value: 'educacion_intercultural_bilingue', name: 'Intercultural y bilingue' },
        { id: 'check_educacion_contexto_encierro', value: 'educacion_contexto_encierro', name: 'Contexto de encierro' }
      ]
    }
  },
  components: {
    SelectApi,
    CheckBoxFilter
  },
  methods: {
    updateJurisdiccion (value) {
      this.jurisdiccion = value
      this.departamento = ''
      this.updateParams()
    },
    updateDepartamento (value) {
      this.departamento = value
      this.localidad = ''
      this.updateParams()
    },
    updateLocalidad (value) {
      this.localidad = value
      this.updateParams()
    },
    updateSector (value) {
      this.sector = value
      this.updateParams()
    },
    updateAmbito (value) {
      this.ambito = value
      this.updateParams()
    },
    updateModalidad (value) {
      this.modalidad = value
      this.updateParams()
    },
    updateParams () {
      this.keyUpdate('jurisdiccion')
      this.keyUpdate('departamento')
      this.keyUpdate('localidad')
      this.keyUpdate('sector')
      this.keyUpdate('ambito')

      const query = { ...this.params, ...this.modalidad }
      this.$emit('update:query', query)
    },
    keyUpdate (key) {
      if (this[key] !== '') {
        this.params[key] = this[key]
      } else {
        delete this.params[key]
      }
    }
  }
}
</script>
