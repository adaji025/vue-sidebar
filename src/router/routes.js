export default [
  {
    name: "Master",
    path: "/",
    component: () => import("../views/Layout/Master.vue"),
    redirect: "/dashboard",
    children: [
      {
        name: "dashboard",
        path: "/dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];
