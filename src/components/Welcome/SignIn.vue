<template>
  <div class="sign-in container">
    <div class="sign-in__title">
        <h1 class="sign-in__title-main">Socialtify</h1>
        <p class="sign-in__title-sub">Sign up to see photos and videos from your friends.</p>
    </div>
    <form class="sign-in__form" @submit.prevent="signIn">
        <div class="sign-in__form__group">
            <input type="text" placeholder="email" v-model="email">
        </div>
        <div class="sign-in__form__group">
            <input type="password" placeholder="password" v-model="password">
        </div>
        <button>Log In</button>
    </form>
    <div class="sign-in__forget">   
        <span class="sign-in__forget-or">Or</span> <br/>
        <span class="sign-in__forget-main">Forger Password</span>
    </div>
    <br/>
    <div class="sign-in__signup">
        <p class="sign-in__signup-main">
            Don't have an account? &nbsp;<span @click="clickSignUp"> Sign Up</span>
        </p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignin from '../../composables/useSignin';
export default {
    setup(props,context) {
        let email = ref('');
        let password = ref('');
        let clickSignUp = ()=>{
            context.emit('clickSignUp')
        }

        let {error,loginUser} = useSignin();

        let signIn = async () => {
            let res = await loginUser(email.value,password.value);
            console.log(res)
            if(res) {
                context.emit('enterWelcome')
            }
        }

        return {email,password,clickSignUp,signIn,error}
    }
    
}
</script>

<style lang="scss" scoped>
@import '../../assets/Welcome/welcome.scss'
</style>