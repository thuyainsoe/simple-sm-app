<template>
  <div class="home">
    <div class="home__sideNav">
      <h2 class="home__sideNav-logo">Socialtify</h2>
      <Navbar></Navbar>
    </div>
    <div class="home__main">
      <ProfileDetail></ProfileDetail>
    </div>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import Navbar from '../components/HomePage/Navbar.vue'
import ProfileDetail from '../components/HomePage/ProfileDetail.vue'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
export default {
  components: {
    Navbar,ProfileDetail
  },
  setup() {
    let {user} = getUser();
    let router = useRouter();
    watch(user, ()=> {
      if(!user.value) {
        router.push("/")
      }
    })

    return {user}
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/HomePage/home.scss'
</style>