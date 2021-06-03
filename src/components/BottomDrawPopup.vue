<template>
  <div>
    <div
      :class="classModifiers"
      class="fixed w-full bottom-0 h-2/3 z-40 rounded-t-3xl max-w-2xl inset-x-0 mx-auto bg-white"
    >
      <div class="pr-3 pt-3 flex justify-end">
        <button class="m-2" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <slot></slot>
    </div>
    <div
      class="opacity-40 fixed inset-0 z-30 bg-black"
    ></div>
  </div>
</template>

<script>

export default {
  props: {
    classModifiers: {
      type: String,
      default: ''
    },
  },
  data() {
    return {};
  },
};
</script>

