<template>
  <div class="flex">
    <div class="hidden md:flex w-1/3 justify-end align-middle">
      <!-- <img
        src="/monstera.jpg"
        class="mx-auto object-contain h-1/2 place-self-center"
        alt=""
      /> -->
    </div>
    <div class="pt-12 max-w-2xl px-6 md:px-2">
      <div class="flex justify-between">
        <div>
          <p class="text-2xl font-bold">Joining our platform</p>
          <p class="text-md text-gray-500">What does it take?</p>
        </div>
        <div class="flex align-middle">
          <button class="btn-primary">
            sign up
          </button>
        </div>
      </div>

      <steps :data="onboardingContent"></steps>
    </div>
  </div>
</template>

<script>
import Steps from "@/components/Steps.vue";

export default {
  name: "Onboarding",
  components: {
    Steps,
  },
  data() {
    return {
      onboardingContent: [
        {
          title: "Sign up",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam",
        },
        {
          title: "Submit documents",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam",
        },
        {
          title: "Complete background check",
          text:
            "Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam",
        },
        {
          title: "Complete basic training",
          text:
            "Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
