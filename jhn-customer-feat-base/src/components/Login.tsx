import Image from 'next/image';

const Login = () => { 
  return (
      <>
 
          <div className="container mx-auto flex flex-col items-center justify-center min-h-screen gap-5 ">
      <div className="text-3xl text-primary-500 text-center mb-2 mr-80 font-bold">
      Welcome Back 👋
        
      </div>
           <div className="text-2xl  text-primary-500 text-center mb-2 mr-64">We are happy to have you back</div>
  
           <form action="" method="post" className="w-full max-w-xl">
      <div className="">
          <div className="text-gray-500">Email address</div>
          <input type="text" className="w-full h-16 rounded bg-gray-200 mt-2
            placeholder:text-slate-400 block
             w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter email address"   />

      </div>

      <div className="">
          <div className="text-gray-500 mt-4">Password</div>
          <input type="text" className="w-full h-16 rounded bg-gray-200 mt-2
            placeholder:text-slate-400 block
             w-full border
              border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter password"   />
      </div>
      <div className="flex items-center mt-4">
          <input type="checkbox" className='m-1 h-5 w-5' />
          <label htmlFor="agree" className="ml-2 text-sm">I agree to terms & conditions</label>
      </div>
      <button className="bg-primary-500 w-full h-12 text-white mt-2">Login</button>
           </form>
           <div className="flex justify-between w-full max-w-xl mt-4 ">
      <ul className='flex justify-between w-full'>
          <li className='text-sm text-gray-600'>Not a member?</li>
          <li className='text-primary-500 leading-8 font-bold mx-4 cursor-pointer mr-64'>Sign up now</li>
          <li className='text-sm text-gray-600'>Forget Password</li>
      </ul>
  </div>
  <div className="text-center mt-1">Or</div>
 
  <button className="flex items-center justify-center w-full max-w-xl h-14 text-primary-500 font-bold mt-2 border-2 text-gray300">
      <Image src="/imgs/flat-color-icons_google.png" height={24} width={24} alt="" className="mr-2" />
      Sign in with Google
  </button>

  <div className="flex items-center justify-center w-full max-w-xl mt-4 gap-3">
      <button className='flex-1 h-14 text-primary-500 font-medium border-2 text-gray300 flex items-center justify-center'>
          <Image src="/imgs/image 340.png" height={24} width={24} alt="" className="mr-2" />
          Sign in with Facebook
      </button>

      <button className='flex-1 h-14 text-primary-500 font-bold border-2 text-gray300 flex items-center justify-center'>
          <Image src="/imgs/image 341.png" height={24} width={24} alt="" className="mr-2" />
          Sign in with Apple
      </button>
  </div>

  <div className="flex items-center justify-center w-full max-w-xl mt-4 gap-3">
      <button className='flex-1 h-14 text-primary-500 font-medium border-2 text-gray300 flex items-center justify-center'>
          <Image src="/imgs/image 342.png" height={24} width={24} alt="" className="mr-2" />
          Sign in with Weibo
      </button>

      <button className='flex-1 h-14 text-primary-500 font-bold border-2 text-gray300 flex items-center justify-center'>
          <Image src="/imgs/image 343.png" height={24} width={24} alt="" className="mr-2" />
          Sign in with LINE
      </button>
  </div>
</div>

    
      </>
  );
};

export default Login;

