import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);
let createUser = async (username,email,password)=>{
    try{
        let res = await auth.createUserWithEmailAndPassword(email,password);
        if(!res) {
            throw new Error('Could not create new User');
        }
        res.user.updateProfile({displayName:username})
        return res
    }catch(err) {
        error.value = err.message
    }
}

let useSignup = () => {
    return {error,createUser}
}

export default useSignup;