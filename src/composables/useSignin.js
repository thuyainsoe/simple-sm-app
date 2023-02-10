import { ref } from "vue"
import {auth} from '../firebase/config'

let error = ref(null);
let loginUser = async (email,password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error("Could not login")
        }
        return res;
    }catch(err) {
        error.value = err.message
    }
}

let useSignin = () => {
    return {error,loginUser}
}

export default useSignin