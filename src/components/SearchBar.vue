<template>
<div class="pt-3 flex px-6 max-w-xl mx-auto">
  <div class="flex-grow text-gray-800">
    <form class="w-full flex border-1 border-gray-200 shadow-sm rounded-lg" @submit="()=>{}">
      <input class="border-0 rounded-xl px-4 flex-grow min-w-8 bg-white h-11 text-md" type="search" name="search" v-model="query" placeholder="Search" />
      <button type="submit" class="top-0 mt-1 mr-3">
        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </form>
  </div>
  <div v-if="showFilterBtn" class="flex-none pl-1">
    <button class="ml-4 bg-green-500 text-white shadow-lg p-1 h-11 w-11 rounded-lg px-3">
      <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <g>
          <path d="M33.5,19.14V12a1.5,1.5,0,0,0-3,0v7.14a6.07,6.07,0,0,0,0,11.74V52a1.5,1.5,0,0,0,3,0V30.88C39.52,29.34,39.52,20.67,33.5,19.14ZM32,28.07a3.07,3.07,0,0,1,0-6.13A3.07,3.07,0,0,1,32,28.07Z" />
          <path d="M53.5,32a6.07,6.07,0,0,0-4.56-5.87V12a1.5,1.5,0,0,0-3,0V26.13a6.07,6.07,0,0,0,0,11.74V52a1.5,1.5,0,0,0,3,0V37.87A6.07,6.07,0,0,0,53.5,32Zm-6,3.06a3.06,3.06,0,0,1,0-6.12A3.06,3.06,0,0,1,47.46,35.06Z" />
          <path d="M18.06,37V12a1.5,1.5,0,1,0-3,0V37a6.07,6.07,0,0,0,0,11.73V52a1.5,1.5,0,0,0,3,0V48.74A6.07,6.07,0,0,0,18.06,37Zm-1.5,8.94a3.07,3.07,0,0,1,0-6.13A3.07,3.07,0,0,1,16.56,45.94Z" />
        </g>
      </svg>
    </button>
  </div>
</div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: {
      showFilterBtn: {
        type: Boolean,
        default: true
      }
    },
    data() {
        return {
            query: ""
        }
    },
    methods: {
        emit(){
            this.$emit('searchEvent', this.query)
        }
    },
    watch: {
      query(val){
        this.$emit('queryUpdate', val)
      }
    }
}
</script>

<style>

</style>