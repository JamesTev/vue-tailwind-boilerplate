<template>
  <div class="relative">
    <div class="rounded-full w-3/4 max-w-md text-center px-4 py-2 mx-auto" :class="styleClass" >
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      default: ''
    },
    styleClass: {
      type: String,
      default: 'bg-gray-200'
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>