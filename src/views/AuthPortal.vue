<template>
  <div>
    <div
      v-if="!loggedIn"
      class="flex my-20 mx-auto overflow-hidden bg-white md:rounded-xl md:shadow-lgdark:bg-gray-800 lg:max-w-5xl"
    >
      <div
        class="hidden bg-cover lg:block lg:w-1/2"
        style="background-image:url('https://source.unsplash.com/SVGw0YkqN4o/1200x900')"
      ></div>

      <div class="w-full px-2 py-4 md:px-8 lg:w-1/2">
        <img src="/logo.svg" class="mx-auto pb-6" style="width: 40%" alt="" />
            <router-view/>
            <p class="text-center text-gray-500 text-sm"> 
                {{$route.name=='login' ? 'No account yet?':'Already have an account?'}}
        <router-link class="text-green-500" :to="$route.name=='login' ? 'signup':'login'">
            {{$route.name=='login' ? 'sign up':'login'}}
        </router-link>
        </p>
      </div>
    </div>
    <div v-else class="flex my-20 mx-auto overflow-hidden bg-white md:rounded-xl md:shadow-lgdark:bg-gray-800 lg:max-w-5xl">

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