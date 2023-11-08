
const register = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="font-bold text-2xl text-center mb-5">Register</h1>
            <div className="py-2">
              <h3 className="mb-2">Full Name</h3>
              <input type="name" className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500" name="fullname" id="fullname" />
            </div>
            <div className="py-2">
              <h3 className="mb-2">Email</h3>
              <input type="email" name="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div className="py-2">
              <h3 className="mb-2">Password</h3>
              <input type="password" name="password" id="password" className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div className="py-2">
              <h3 className="mb-2">Retype Password</h3>
              <input type="password" name="retype" id="retype" className="w-full p-2 border border-gray-300 rounded-lg placeholder:font-light placeholder:text-gray-500" />
            </div>
            <div className="py-3">
            <button className="w-full bg-black text-white p-2 rounded-xl mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">Register</button>
            </div>
            <div className="text-center text-gray-400">
              <p>Already have an account? <span className="font-bold text-black">Login here</span></p>
            </div>
          </div>
          <div className="relative"></div>
        </div>
      </div>
    );
  };
  
  export default register;
  