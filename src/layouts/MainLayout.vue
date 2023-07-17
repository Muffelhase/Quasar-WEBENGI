<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Fachschaft Wirtschaft </q-toolbar-title>
        <div><img src="~assets/fh_kiel_ng.svg" /></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation Bar </q-item-label>

        <EssentialLink
          v-for="page in essentialLinks"
          :key="page.title"
          v-bind="page"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/NavBar.vue";

const linksList = [
  {
    title: "Home",
    caption: "",
    icon: "house",
    page: "/",
  },
  {
    title: "Anmelden",
    caption: "Login/Registrieren",
    icon: "key",
    page: "Anmelden",
  },
  {
    title: "News",
    caption: "Neuigkeiten am Wirtschaftsbereich",
    icon: "chat",
    page: "News",
  },
  {
    title: "Kalender",
    caption: "Aktuelle Termine",
    icon: "feed",
    page: "Kalender",
  },
  {
    title: "Galerie",
    caption: "Eindrücke des Fachbereichs Wirtschaft",
    icon: "camera",
    page: "Galerie",
  },
  {
    title: "Ersti-Fahrt",
    caption: "Anmeldung für die Ersti-Fahrt",
    icon: "school",
    page: "Ersti",
  },
  {
    title: "Impressum",
    caption: "Autoren der Seite",
    icon: "person",
    page: "Impressum",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
}
</style>
