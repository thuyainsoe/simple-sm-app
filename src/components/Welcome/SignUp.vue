<template>
    <div class="sign-in container">
      <div class="sign-in__title">
          <h1 class="sign-in__title-main">Socialtify</h1>
          <p class="sign-in__title-sub">Sign up to see photos and videos from your friends.</p>
      </div>
      <form class="sign-in__form" @submit.prevent="singUp">
          <div class="sign-in__form__group">
              <input type="text" placeholder="username" v-model="username">
          </div>
          <div class="sign-in__form__group">
              <input type="text" placeholder="email" v-model="email">
          </div>
          <div class="sign-in__form__group">
              <input type="password" placeholder="password" v-model="password">
          </div>
          <button>Sign Up</button>
      </form>
      <br/>
      <div class="sign-in__signup">
          <p class="sign-in__signup-main">
              Have an account? &nbsp;<span @click="clickSignIn"> Log In</span>
          </p>
      </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import useSignup from '../../composables/useSignup'

export default {
    setup(props,context) {
        let username = ref('');
        let email = ref('');
        let password = ref('');
        let clickSignIn = () => context.emit('clickSignIn');
        
        let {error,createUser} = useSignup();
        let singUp = async() => {
           let res = await createUser(username.value,email.value,password.value);
           if(res) {
            context.emit('enterWelcome')
           }
        }
        


        return {clickSignIn,username,email,password,singUp,error}
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/Welcome/welcome.scss'
</style>