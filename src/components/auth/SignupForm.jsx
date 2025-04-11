import InputField from "./InputField";
import GoogleAuthButton from "./GoogleAuthButton";
import AuthFooter from "./AuthFooter";

export default function SignupForm() {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-4xl font-medium mb-4">Create an Account</h2>
      <p className="text-md font-light mb-6">Enter your details below</p>
      <form className="space-y-4">
        <InputField label="Name" />
        <InputField label="Email or Phone Number" />
        <InputField label="Password" type="password" />
        <button className="w-full bg-red-400 text-white py-4 rounded hover:bg-red-600">
          Create Account
        </button>
      </form>
      <div className="mt-4">
        <GoogleAuthButton />
      </div>
      <AuthFooter />
    </div>
  );
}
