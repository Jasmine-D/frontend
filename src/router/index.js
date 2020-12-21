import Vue from 'vue'
import Router from 'vue-router'
import DoctorList from '@/components/DoctorList'
import test from '@/components/test'
import DoctorDetail from '@/components/DoctorDetail'
import HospitalList from '@/components/HospitalList'
import HospitalDetail from '@/components/HospitalDetail'
import PersonalInfo from '@/components/PersonalInfo'

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
    },
    {
      path: '/HospitalList',
      name: 'HospitalList',
      component: HospitalList
    },
    {
      path: '/HospitalDetail',
      name: 'HospitalDetail',
      component: HospitalDetail
    },
    {
      path: '/PersonalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    }
  ]
})
