import {signInWithGooglePopup} from '../../util/firebase/firebase.utils'

const Login = () => {
    const googleLogin = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={googleLogin}>Login With Google</button>
        </div>
    );
}

export default Login;