<template>
  <div>
    <!-- nav for anything bigger than mobile -->
    <div
      class="hidden md:flex px-2 pt-4 w-full max-w-7xl mx-auto md:justify-between"
    >
      <div class="flex-0 w-1/5">
        <img src="/mifarm_logo.svg" class="mx-auto" style="width: 60%" alt="" />
      </div>

      <div
        class="flex justify-end flex-grow pr-4 space-x-12 lg:space-x-14 items-center"
      >
        <router-link
          :class="$route.name == 'home' ? 'active-tab' : ''"
          class="text-gray-800 hover:text-gray-800 dark:hover:text-white rounded-md text-base font-medium"
          to="/dashboard"
        >
          Home
        </router-link>
        <router-link
          :class="$route.name == 'explore' ? 'active-tab' : ''"
          class="text-gray-800 dark:text-white block rounded-md text-base font-medium"
          to="/explore"
        >
          Explore
        </router-link>
        <router-link
          :class="$route.name == 'allotments' ? 'active-tab' : ''"
          class="text-gray-800 hover:text-gray-800 dark:hover:text-white block rounded-md text-base font-medium"
          to="/allotments"
        >
          Allotments
        </router-link>
        <button
          class="text-sm rounded-full bg-gray-100 px-4 py-2"
          @click="logout"
        >
          logout
        </button>

        <router-link class="flex-shrink-0" to="/profile">
          <img
            class="h-10 w-10 rounded-full ml-2"
            src="https://source.unsplash.com/cOGKDFVt5Lc/512x512"
          />
        </router-link>
      </div>
    </div>
    <!-- mobile nav -->
    <div class="pb-14 " v-if="!condensedView">
      <nav class="bg-white dark:bg-gray-800 w-full fixed top-0">
        <div class="flex px-4 pt-2 items-center justify-between md:hidden">
          <button
            @click="showMenu = !showMenu"
            :class="showMenu ? 'text-green-500' : ''"
            class="text-gray-800 dark:text-white p-2 rounded-md  flex-shrink-0"
          >
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
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <div class="flex justify-center">
            <img
              src="/mifarm_logo.svg"
              class="place-self-center"
              style="width: 45%"
              alt=""
            />
          </div>
          <router-link class="flex-shrink-0" to="/profile">
            <img
              class="h-10 w-10 rounded-full"
              src="https://source.unsplash.com/cOGKDFVt5Lc/512x512"
            />
          </router-link>
        </div>
        <div v-if="showMenu" class="md:hidden">
          <div class="px-2 w-full pt-2 pb-3 ml-2 space-y-1 sm:px-3">
            <router-link
              class="text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              v-on:click.native="showMenu = false"
              to="/home"
            >
              Home
            </router-link>
            <router-link
              v-on:click.native="showMenu = false"
              class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/explore"
            >
              Explore
            </router-link>
            <router-link
              v-on:click.native="showMenu = false"
              class="text-gray-800 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/allotments"
            >
              Allotments
            </router-link>
            <button
              class="text-sm rounded-full bg-gray-100 px-4 py-2"
              @click="logout"
            >
              logout
            </button>
          </div>
        </div>
      </nav>
    </div>
    <div class="pb-6" v-if="condensedView">
      <nav
        class="text-white dark:bg-gray-800 h-4 bg-green-500 fixed top-0 w-full rounded-b"
      >
        <a class="text-xs align-top mx-4">show menu</a>
      </nav>
    </div>
    <div class="pb-6" v-if="condensedView">
      <nav
        class="text-white dark:bg-gray-800 h-4 bg-green-500 fixed top-0 w-full rounded-b"
      >
        <a class="text-xs align-top mx-4">show menu</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbars",
  data() {
    return {
      view: {
        atTopOfPage: true,
        upScroll: false,
      },
      condensedView: false,
      showMenu: false,
      lastScrollTop: 0,
    };
  },
  computed: {
    ...mapGetters("social", ["profileData"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
  },
};
</script>

<style scoped>
.active-tab {
  @apply text-green-500;
}

nav {
  z-index: 10;
}

nav.up-scroll {
  @apply bg-green-400;
  border-bottom: 10px;
  @apply border-green-500;
}

nav.scrolled {
  @apply bg-green-400;
  border-bottom: 10px;
  @apply border-green-500;
}
</style>
