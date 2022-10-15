import {signInWithGooglePopup, createUserDocFromAuth} from '../../util/firebase/firebase.utils'

const Login = () => {
    const googleLogin = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={googleLogin}>Login With Google</button>
        </div>
    );
}

export default Login;