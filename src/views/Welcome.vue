<template>
  <div>
    <div v-if="showLoginForm">
      <SignIn @clickSignUp="clickSignUp" @enterWelcome="enterWelcome"></SignIn>
    </div>
    <div v-else>
      <SignUp @clickSignIn="clickSignIn" @enterWelcome="enterWelcome"></SignUp> 
    </div>  
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SignIn from '../components/Welcome/SignIn.vue'
import SignUp from '../components/Welcome/SignUp.vue'
import {useRouter} from 'vue-router'

export default {
  components: {
    SignIn,SignUp
  },
  setup() {
    let showLoginForm = ref('true');
    let clickSignUp = () => showLoginForm.value = !showLoginForm.value
    let clickSignIn = () => showLoginForm.value = !showLoginForm.value
    let router = useRouter();

    let enterWelcome = () => {
      router.push({name:'HomePage'})
    }

    return {showLoginForm,clickSignUp,clickSignIn,enterWelcome}
  }
}
</script>

<style>

</style>