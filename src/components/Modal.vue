<template>
  <div>
    <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative my-4 mx-auto max-w-6xl" style="width:85%">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-3">
            <slot name="header">
              <p class="text-lg font-bold mx-3">{{title}}</p>
            </slot>
          </div>
          <!--body-->
          <div class="relative p-3 flex-auto my-4">
              <slot name="content">
                <p class="font-gray-800 mx-3">{{content}}</p>
              </slot>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-4 gap-x-4">
            <slot name="footer">
     

            <button @click="btnAction(btn)" v-for="(btn, i) in buttons" :key="i" class="btn-primary-o" type="button" style="transition: all .15s ease">
              {{btn}}
            </button>

            <button class="btn-primary" type="button" style="transition: all .15s ease" @click="$emit('close')">
              close
            </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
    }
  },
  methods: {
    btnAction(btnName){
      this.$emit('btnAction', btnName)
    }
  }
}
</script>