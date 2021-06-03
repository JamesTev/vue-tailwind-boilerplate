<template>
  <div class="border-t-0 z-50 flex rounded-t-xl pb-3 flex-wrap w-full ">
<div class="flex content-center bg-white justify-around py-2 h-22  max-w-md w-full mx-auto">
  <div class="h-10 w-10 rounded-md" >
    <a @click="$emit('tabSelect', 0)">
    <svg viewBox="0 0 20 20" :class="activeTab==0 ? 'active-tab':''" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.5.5l.325-.38a.5.5 0 00-.65 0L7.5.5zm-7 6l-.325-.38L0 6.27v.23h.5zm5 8v.5a.5.5 0 00.5-.5h-.5zm4 0H9a.5.5 0 00.5.5v-.5zm5-8h.5v-.23l-.175-.15-.325.38zM1.5 15h4v-1h-4v1zm13.325-8.88l-7-6-.65.76 7 6 .65-.76zm-7.65-6l-7 6 .65.76 7-6-.65-.76zM6 14.5v-3H5v3h1zm3-3v3h1v-3H9zm.5 3.5h4v-1h-4v1zm5.5-1.5v-7h-1v7h1zm-15-7v7h1v-7H0zM7.5 10A1.5 1.5 0 019 11.5h1A2.5 2.5 0 007.5 9v1zm0-1A2.5 2.5 0 005 11.5h1A1.5 1.5 0 017.5 10V9zm6 6a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zm-12-1a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1z" fill="currentColor"></path></svg>
  </a>
  </div>
  <div class="h-10 w-10 rounded-xl">
    <a @click="$emit('tabSelect', 1)">
    <svg viewBox="0 0 20 20" :class="activeTab==1 ? 'active-tab':''" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 2v2.5a3 3 0 01-6 0V2m-3-.5v12a1 1 0 001 1h10a1 1 0 001-1v-12a1 1 0 00-1-1h-10a1 1 0 00-1 1z" stroke="currentColor"></path></svg>
    </a>
  </div>
  <div class="h-10 w-10 rounded-xl">
    <a @click="$emit('tabSelect', 2)">
    <svg viewBox="0 0 20 20" :class="activeTab==2 ? 'active-tab':''" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 14.5l-.395.307a.5.5 0 00.79 0L7.5 14.5zm-7-9l-.429-.257a.5.5 0 00.034.564L.5 5.5zm3-5V0h-.283L3.07.243 3.5.5zm8 0l.429-.257L11.783 0H11.5v.5zm3 5l.395.307a.5.5 0 00.034-.564L14.5 5.5zm-6.605 8.693l-7-9-.79.614 7 9 .79-.614zM.929 5.757l3-5L3.07.243l-3 5 .858.514zM3.5 1h8V0h-8v1zm7.571-.243l3 5 .858-.514-3-5-.858.514zm3.034 4.436l-7 9 .79.614 7-9-.79-.614z" fill="currentColor"></path></svg>
    </a>
  </div>
  <div class="h-10 w-10 rounded-xl">
    <a @click="$emit('tabSelect', 3)">
  <svg viewBox="0 0 20 20" :class="activeTab==3 ? 'active-tab':''" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M7.5 15V7m0 .5v3m0-3a4 4 0 00-4-4h-3v3a4 4 0 004 4h3m0-3h3a4 4 0 004-4v-3h-3a4 4 0 00-4 4v3zm0 0l4-4m-4 7l-4-4" stroke="currentColor"></path></svg>
  </a>
  </div>
</div>

  </div>
</template>

<script>
export default {
    'name': 'Tabs',
    props: ['activeTab'],
    data() {
        return {
        }
    },
    methods: {
        
    },
}
</script>

<style>

</style>