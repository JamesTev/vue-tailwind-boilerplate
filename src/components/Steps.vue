<template>
  <div>
    <div class="max-w-xl py-8 px-4">
      <div class="flow-root">
        <ul class="-mb-8">
          <li v-for="(obj, idx) in data" :key="idx">
            <div class="relative pb-8">
              <span
                class="absolute top-5 left-5 -ml-px h-5/6 w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div class="relative px-1">
                    <div
                      class="h-8 w-8 bg-green-500 rounded-full ring-8 ring-white flex items-center justify-center"
                    >
                      <!-- <svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg> -->
                      <p class="text-white">{{idx+1}}</p>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 flex-1 py-0">
                  <div class="text-md text-gray-500">
                    <div>
                      <a
                        href="#"
                        class="font-lg font-bold text-gray-900 mr-2"
                        >{{ obj.title }}</a
                      >
                    </div>
                    <span class="whitespace-nowrap text-sm">step {{idx+1}}</span>
                  </div>
                  <div class="mt-2 text-gray-700">
                    <p>{{ obj.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
