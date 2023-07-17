<template>
  <button @click="handleSignout" v-if="isLoggedIn">Sign out</button>
  <router-view />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignout = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<script>
import { defineComponent } from "vue";
import router from "./router";

export default defineComponent({
  name: "App",
});
</script>
