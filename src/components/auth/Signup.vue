<template>
    <div class="w-full py-4">
        <div class="mt-4 flex space-x-3">
          <div class="w-1/2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >First Name</label
            >
            <input
              v-model="firstName"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
            />
          </div>
          <div class="w-1/2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              >Last Name</label
            >
            <input
              v-model="lastName"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
            />
          </div>
        </div>
        <div class="mt-4">
          <label
            class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            >Email Address</label
          >
          <input
            v-model="email"
            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
            type="email"
          />
        </div>

        <!-- <div class="mt-4 flex space-x-3">
          <div class="w-1/2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
              >City</label
            >
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
              type="email"
            />
          </div>
          <div class="w-1/2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
              >Post Code</label
            >
            <input
              id="LoggingEmailAddress"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
              type="email"
            />
          </div>
        </div> -->

        <div class="mt-4 flex space-x-3">
          <div class="w-1/2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
              >Password</label
            >
            <input
              v-model="password"
              class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
              type="password"
            />
          </div>
          <div class="w-1/2">
            <label
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
              >Confirm Password</label
            >
            <input
              v-model="passwordConfirm"
              class="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "
              type="password"
            />
          </div>
        </div>

        <div class="mt-8">
          <button
            @click="signUp"
            :disabled="!pwMatch || !fieldsComplete"
            class="w-full px-4 py-2 tracking-wide disabled:opacity-30 text-white transition-colors duration-100 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
          >
          <svg
              v-if="authenticating"
              class="w-4 h-4 mr-2 animate-spin self-center"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Sign up
          </button>
        </div>
      </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
      email: "",
    };
  },
  computed: {
     ...mapGetters("auth", [
      "loggedIn",
      "authenticating",
      "authenticationError",
      "authenticationErrorCode",
    ]),
    pwMatch() {
      return this.password == this.passwordConfirm && this.pwValid
    },
    pwValid(){
      return this.password.length > 5
    },
    fieldsComplete(){
      return !([this.firstName, this.lastName, this.email].map(x => x.length)).includes(0)
    }
  },
  methods: {
    ...mapActions("auth", ["login", "logout", "signup"]),
    signUp(){
      this.signup({email: this.email, pw1: this.password, pw2: this.passwordConfirm}).catch(err => {
        console.log(err)
      })
    }
  },
};
</script>

<style></style>
