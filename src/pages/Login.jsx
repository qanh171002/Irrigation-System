import AuthLayout from "../features/authentication/AuthLayout";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <AuthLayout>
      <Logo />
      <p className="text-center text-3xl font-semibold text-gray-700">
        Log in to your account
      </p>
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
