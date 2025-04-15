import Button from "../../components/auth/Button";

export default function Custom404() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col w-full mx-auto ">
        <div className="container mx-auto px-4 pt-6">
          <nav className="text-sm">
            <a className="text-gray-600 hover:text-gray-900">Home</a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-400">404 Error</span>
          </nav>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-8xl md:text-7xl inter-text font-bold text-gray-900 mb-8">
            404 Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your visited page not found. You may go home page.
          </p>
          <Button variant="primary" size="lg" className="mb-6">
            Back to home page
          </Button>
        </div>
      </div>
    </>
  );
}
