<template lang="">
  <div class="flex items-center">
    <div class="w-6 active:text-blue-400">
      <i class="gg-search"></i>
    </div>
    <input
      type="search"
      name="name"
      placeholder="Search..."
      class="w-full py-2 border-b-2 border-gray-600 outline-none focus:border-blue-400"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'Searcher',
  props: {
    modelValue: String
  },
  emits: [
    'update:modelValue'
  ]
}
</script>
