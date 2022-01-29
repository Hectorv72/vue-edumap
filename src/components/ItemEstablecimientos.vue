<template lang="">
  <li class="block py-3 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-700 focus:text-green-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" >
    <div class="grid grid-cols-10">
      <div class="flex justify-center">
        <img class="object-contain w-12" src="https://cdn-icons-png.flaticon.com/512/2189/2189181.png"/>
      </div>
      <div class="col-span-8 text-left p-3">
        <h4 class="font-bold">{{item.nombre}}</h4>
        <p class="uppercase text-xs">
          {{item.localizacion.jurisdiccion}} |
          {{item.localizacion.departamento}} |
          {{item.localizacion.localidad}}
        </p>
        <p>
          {{item.localizacion.sector}}
        </p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <button class="bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white p-2 py-2.5 border border-green-600 hover:border-transparent rounded-full "><i class="gg-pin"></i></button>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  name: 'ItemEstablecimiento',
  props: {
    item: Object
  }
}
</script>
