import Vue from 'vue'
import Router from 'vue-router'
import DoctorList from '@/components/DoctorList'
import test from '@/components/test'
import DoctorDetail from '@/components/DoctorDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DoctorList',
      component: DoctorList
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/DoctorDetail',
      name: 'DoctorDetail',
      component: DoctorDetail
    }
  ]
})
