import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Index from "@/components/Index";
import Test from "@/components/Test";
import Sublist1 from "@/components/Sublist1";
import Sublist2 from "@/components/Sublist2";

Vue.use(Router);

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: "/index",
      name: "HelloWorld",
      component: Index
    },
    {
      path: "/test",
      name: "HelloWorld",
      component: Test,
      children: [
        {
          path: "/test/sublist1",
          component: Sublist1
        },
        {
          path: "/test/sublist2",
          component: Sublist2
        }
      ]
    }
  ]
});
