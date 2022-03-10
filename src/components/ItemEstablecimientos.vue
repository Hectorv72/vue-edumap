<template lang="">
  <li class="block py-3 px-4 w-full border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white" >
    <div class="grid grid-cols-10">
      <div class="col-span-12"> <!-- col-span-9 cursor-pointer -->
        <!-- <router-link class="grid grid-cols-10" to="/info"> -->
        <section class="grid grid-cols-10">
          <div class="flex justify-center">
            <img class="object-contain w-12" src="https://cdn-icons-png.flaticon.com/512/2189/2189181.png"/>
          </div>
          <div class="col-span-9 text-left p-3">
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
        </section>
        <!-- </router-link> -->
      </div>
      <!-- <div class="flex flex-col justify-center items-center">
        <router-link to="/map">
          <button class="bg-transparent hover:bg-blue-600 text-blue-600 font-semibold hover:text-white p-2 py-2.5 border border-blue-600 hover:border-transparent rounded-full "><i class="gg-pin"></i></button>
        </router-link>
      </div> -->
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
