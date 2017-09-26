import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import WelcomePage from '@/components/WelcomePage'
import RolesList from '@/components/roles/RolesList'
import RoleCreate from '@/components/roles/RoleCreate'
import RoleEdit from '@/components/roles/RoleEdit'
import PositionList from '@/components/positions/PositionList'
import PositionCreate from '@/components/positions/PositionCreate'
import PositionEdit from '@/components/positions/PositionEdit'

Vue.use(Router)

const crudBlock = ({ name, ListCmp, CreateCmp, EditCmp }) => ({
  path: `/${name.toLowerCase()}s`,
  component: { template: '<router-view></router-view>' },
  children: [
    {
      path: '',
      name: `${name} List`,
      component: ListCmp
    },
    {
      path: 'new',
      name: `${name} Create`,
      component: CreateCmp
    },
    {
      path: ':id',
      name: `${name} Edit`,
      component: EditCmp,
      props: true
    }
  ]
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/welcome',
      name: 'Welcome Page',
      component: WelcomePage
    },
    crudBlock({
      name: 'Role',
      CreateCmp: RoleCreate,
      EditCmp: RoleEdit,
      ListCmp: RolesList
    }),
    crudBlock({
      name: 'Position',
      CreateCmp: PositionCreate,
      EditCmp: PositionEdit,
      ListCmp: PositionList
    })
  ]
})
