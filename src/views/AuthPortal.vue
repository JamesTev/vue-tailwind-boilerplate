<template>
  <div>
    <div
      class="bg-white lg:bg-gradient-to-tr py-10 fixed top-0 bottom-0 left-0 right-0 overflow-auto from-blue-700 to-blue-400"
    >
      <div
        class="grid grid-cols-1 gap-y-4 lg:place-items-center lg:place-content-center h-full"
      >
        <div class="py-4 lg:w-1/3 md:py-12 px-4 lg:px-12 lg:shadow-lg lg:rounded-xl bg-white">
          <div v-if="true || !loggedIn">
            <router-view> </router-view>
          </div>
          <div v-else class="w-full">
            <div class="mt-8 flex justify-center space-x-4 px-8">
              <button
                @click="$router.push({ name: 'home' })"
                class=" px-4 py-2 w-full text-blue-500 disabled:opacity-50 border  border-blue-500 rounded-md"
              >
                Home
              </button>
              <button
                @click="logout"
                class=" px-4 py-2 w-full text-white disabled:opacity-50  bg-blue-500 rounded-md "
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
    'name': 'AuthPortal',
    components: {
 
    },
    data() {
        return {
            view: 'login',   
        }
    },
    computed: {
      ...mapGetters("auth", [
      "loggedIn",
      "authenticating",
      "authenticationError",
      "authenticationErrorCode",
    ]),

    },
    methods: {
    ...mapActions("auth", ["logout"]),

    },
}
</script>

<style>

</style>