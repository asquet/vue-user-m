import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import WelcomePage from '@/components/WelcomePage';
import RolesList from '@/components/roles/RolesList';
import RoleCreate from '@/components/roles/RoleCreate';
import RoleEdit from '@/components/roles/RoleEdit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/welcome',
      name: 'Welcome Page',
      component: WelcomePage,
    },
    {
      path: '/roles',
      name: 'Roles',
      component: { template: '<router-view></router-view>' },
      children: [{
        path: '',
        name: 'Roles List',
        component: RolesList,
      }, {
        path: 'new',
        name: 'Role Create',
        component: RoleCreate,
      }, {
        path: ':role_id',
        name: 'Role Edit',
        component: RoleEdit,
      }],
    },
  ],
});
