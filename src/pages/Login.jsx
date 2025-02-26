import LoginLayout from "../features/authentication/LoginLayout"
import Logo from '../ui/Logo'
import LoginForm from "../features/authentication/LoginForm"

function Login() {
    return (
        <LoginLayout>
            <Logo />
            <p className="font-semibold text-gray-700 text-3xl text-center">Log in  to your account</p>
            <LoginForm />
        </LoginLayout>
    )
}

export default Login
