<template>
  <div class="navbar">
    <ul class="navbar__container">
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zM6 19h12V9.157l-6-5.454-6 5.454V19zm2-4h8v2H8v-2z"/></svg>Home
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z"/></svg>Message
        </li>
        <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z"/></svg>Profile
        </li>
    </ul>
    <div class="navbar__logout" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z"/></svg><span @click="logout">Logout</span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../../composables/getUser'
import {auth} from '../../firebase/config'
export default {
    setup() {
        let error = ref(null);
        let {user} = getUser();
        let logout = async() => {
            try{
                await auth.signOut();
            }catch(err) {
                error.value = err.message
            }
        }

        return {logout,error}
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    margin-top: 60px;
    &__container{
        list-style-type: none;
        li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            padding: 20px 20px 20px 0;
        }
    }

    &__logout {
        position: absolute;
        display: flex;
        gap: 10px;
        align-items: center;
        bottom: 40px;
        cursor: pointer;
    }
}
</style>