import {signInWithGooglePopup, createUserDocFromAuth, signInWithFacebookPopup} from '../../util/firebase/firebase.utils'

const Login = () => {
    const googleLogin = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    }

    const  facebookLogin = async () => {
        const {user} = await signInWithFacebookPopup();
        await createUserDocFromAuth(user);
    }
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={googleLogin}>Login With Google</button>
            <button onClick={facebookLogin}>Login With Facebook</button>
        </div>
    );
}

export default Login;