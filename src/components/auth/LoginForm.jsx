import InputField from "./InputField";


export default function LoginForm() {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-4xl font-medium mb-4">Log in to Exclusive</h2>
      <p className="text-md font-light mb-6">Enter your details below</p>
      <form className="space-y-4">
        <InputField label="Email or Phone Number" />
        <InputField label="Password" type="password" />
       <div className="flex justify-between items-center space-x-4 ">
       <div>
       <button className="w-full text-md bg-red-400 text-white py-3 px-8 rounded hover:bg-red-600">
          Log In
        </button>
       </div>
        <p className="text-red-500"><a href="/forgotpassword">Forgot Password?</a></p>
       </div>
      </form>
     
    </div>
  );
}
