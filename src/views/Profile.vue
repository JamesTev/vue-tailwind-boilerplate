<template>
  <div class="md:px-0">
    <div class="md:shadow-lg mx-auto mt-8 rounded-2xl w-full max-w-lg bg-white dark:bg-gray-800">
      <img
        src="https://source.unsplash.com/X3WaAIqPAiA/1600x900"
        class="md:rounded-t-lg rounded-t-xl h-32 w-full mb-4 object-cover"
      />
      <div class="flex flex-col items-center justify-center p-4 -mt-16">
        <a href="#" class="block relative">
          <img
            src="https://source.unsplash.com/cOGKDFVt5Lc/512x512"
            class="mx-auto object-cover rounded-full h-20 w-20 border-2 border-white dark:border-gray-800"
          />
        </a>
        <p class="text-gray-800 dark:text-white text-xl font-semibold mt-2">
          {{profileData.firstName}} {{profileData.lastName}}
        </p>
        <p class="text-gray-400 text-xs mb-4">
          {{profileData.username}}
        </p>
        <p class="text-xs p-2 bg-green-500 text-white px-4 rounded-full">
          beginner
        </p>
        <div class="rounded-lg p-2 w-full mt-4 text-center">
          <div
            class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200"
          >
            <p class="flex flex-col">
              Groups
              <span class="text-black dark:text-white font-bold">
                {{groups ? groups.length : 0 }}
              </span>
            </p>
            <p class="flex flex-col" v-if="!allotmentsLoading">
              Connections
              <span class="text-black dark:text-white font-bold">
                0
              </span>
            </p>
            <p class="flex flex-col">
              Rating
              <span class="text-black dark:text-white font-bold">
                9.3
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Dashboard from './Dashboard.vue'
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
  components: {},
  data() {
    return {};
  },
  mounted() {
    if(!this.profileData.email && !this.profileData.username){
      this.updateProfileData()
    }

  },
  methods: {
    ...mapActions("social", [
        "updateProfileData"
    ]),
  },
  computed:
  {
  }
};
</script>

<style></style>
