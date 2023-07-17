import router from ".";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "Ersti",
        component: () => import("pages/AnmeldungErstiPage.vue"),
      },
      {
        path: "Anmelden",
        component: () => import("pages/AnmeldungBox.vue"),
      },
      {
        path: "News",
        component: () => import("pages/NewsPage.vue"),
      },
      {
        path: "Kalender",
        component: () => import("pages/KalenderView.vue"),
      },
      {
        path: "Gallerie",
        component: () => import("pages/GalleryView.vue"),
      },
      {
        path: "Impressum",
        component: () => import("pages/ImpressumView.vue"),
      },
      {
        path: "Upload",
        component: () => import("pages/GalleryViewDynamic.vue"),
      },
      {
        path: "Beitrag-drei",
        component: () => import("pages/news/beitrag-drei.vue"),
      },
      {
        path: "ErstiListe",
        component: () => import("pages/ErstiPage.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

routes.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default routes;
