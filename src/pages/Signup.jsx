import AuthLayout from "../features/authentication/AuthLayout";
import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";

function Signup() {
  return (
    <AuthLayout>
      <Logo />
      <p className="text-center text-3xl font-semibold text-gray-700">
        Create your account
      </p>
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
