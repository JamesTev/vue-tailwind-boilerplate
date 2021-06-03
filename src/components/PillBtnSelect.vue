<template>
  <div>
    <div class="max-w-lg mx-auto pt-4 flex justify-around">
      <button
        v-for="(lbl, i) in labels" :key='i'
        @click="select(lbl)"
        :class="selected==lbl ? activeClasses:''"
        class="flex h-7 px-4 border-0 shadow-md rounded-full bg-white text-black font-light text-xs items-center text-center">
        <p>{{lbl}}</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    'name': 'PillBtnSelect',
    props: {
      labels: Array,
      default: {
        type: String,
        default: ''
      },
      activeClasses: {
        type: String,
        default: 'bg-green-500 text-white'
      }
    },
    data() {
        return {
          selected: ''
        }
    },
    created(){
      this.selected = this.default
    },
    methods: {
        select(lbl){
          if(this.selected == lbl){ // if already selected, deselect
            lbl = this.default
          }
          this.selected = lbl
          this.$emit('selection', lbl)
        }
    },
}
</script>

<style>

</style>