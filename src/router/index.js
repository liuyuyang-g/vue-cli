import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Index from "@/components/Index";
import Test from "@/components/Test";
import Sublist1 from "@/components/Sublist1";
import Sublist2 from "@/components/Sublist2";
import Url from "@/components/Url"
import Error from "@/components/Error"

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, */
    {
      path: "/index",
      name: "index",
      component: Index,
      beforeEnter(to,from,next){
        /* console.log(to);
        console.log(from); */
        next();
      }
    },
    {
      path: "/test",
      name: "HelloWorld",
      component: Test,
      children: [
        {
          path: "/test/sublist1",
          component: Sublist1,
          name:'sublist1'
        },
        {
          path: "/test/sublist2",
          component: Sublist2
        }
      ]
    },
    {
      path:"/url/:username/:age",
      component:Url
    },
    {
      path:"/home1/:username/:age",
      redirect:"/url/:username/:age"
    },
    {
      path:"/index",
      component:Index,
      alias:'/home'
    },
    {
      path:"*",
      component:Error
    },
    {
      path:"/index",
      component:Index,
      alias:'/111'
    }
  ]
});
