<template>
  <div>
    <button
      @click="login"
      class="flex items-center justify-center mt-4 text-gray-600 w-full rounded-lg shadow-md dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <div class="px-4 py-3">
        <svg class="w-6 h-6" viewBox="0 0 40 40">
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <path
            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
            fill="#FF3D00"
          />
          <path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </svg>
      </div>

      <span class="w-5/6 px-4 py-3 text-center font-bold">Sign in with Google</span>
    </button>

    <div class="flex items-center justify-between mt-8">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

      <p class="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
        or login with email
      </p>

      <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
    </div>

    <div class="mt-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
        for="LoggingEmailAddress"
        >Email or Username</label
      >
      <input class="input-primary" id="LoggingEmailAddress" v-model="username" type="email" />
    </div>

    <div class="mt-4">
      <div class="flex justify-between">
        <label
          class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          for="loggingPassword"
          >Password</label
        >
        <a
          href="#"
          class="text-xs text-gray-500 dark:text-gray-300 hover:underline"
          >Forget Password?</a
        >
      </div>

      <input class="input-primary" id="loggingPassword" v-model="password" type="password" />
    </div>

    <div class="mt-8">
      <button
        @click="handleLogin"
        :disabled="
          username.length == 0 || password.length == 0 || authenticating
        "
        class="w-full flex justify-center px-4 py-2 text-white disabled:opacity-50  bg-blue-500 rounded-md hover:bg-blue-600 "
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

        Login
      </button>
    </div>
    <p class="text-center text-gray-500 text-sm mt-4">
      No account yet?
      <router-link class="text-blue-500" to="signup">
        sign up
      </router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    },
  data() {
    return {
      username: "",
      password: "",
      showErrModal: false,
      toastData: {
        msg: "Incorrect login details",
        styleClass: "bg-red-400 text-white",
        duration: 2000
      },
      toastVisible: false,
    };
  },
  computed: {
    ...mapGetters("auth", [
      "loggedIn",
      "authenticating",
      "authenticationError",
      "authenticationErrorCode",
    ]),
  },
  created () {
  },
  methods: {
    ...mapActions("auth", ["login", "logout"]),
    openToast(msg, style, duration){
      let t = this.toastData
      t.msg = msg
      t.style = style
      t.duration = duration
      this.toastVisible = true
    },
    handleLogin() {
      // Perform a simple validation that email and password have been typed in
      if (this.username != "" && this.password != "") {
        this.login({ username: this.username, password: this.password }).catch(err => {
          if(err.errorCode == 401){
            this.openToast('Incorrect login details', '', 2000)
          }else{
            this.openToast('Unabled to verify credentials', '', 2000)
          }
          this.toastVisible = true
        })
        this.password = "";
      }
    },
  },
};
</script>

<style></style>
