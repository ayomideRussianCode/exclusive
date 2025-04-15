
export default function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:flex items-center justify-center ">
        <img
          src="/auth-illustration.png"
          alt="Auth Illustration Image"
          className="min-h-2/3 w-full  "
        />
      </div>
      <div className="flex justify-center items-center p-8 ">{children}</div>
    </div>
  );
}
