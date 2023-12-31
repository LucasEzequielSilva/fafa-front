import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../redux/actions/authActions";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate()
    let { message, success } = useSelector(store=>store.user)
    let email = useRef("")
    let password = useRef("")
    let dispatch = useDispatch()
    useEffect(()=>{
        if(success){
            toast.success(message)
            setTimeout(() => { navigate("/profile") }, 1000)
        }
        else if(success === false){
            toast.error(message)
            console.log(message)
        }
    },[message,success])
    const handleSignIn = async(event) => {
        
        let data = {
            email: email?.current?.value,
            contraseña: password?.current?.value
        }
        setLoading(true); 
        event.preventDefault()
        try {            
            await dispatch(signInAction(data))
            if (success) {
                toast.success(message);
                setTimeout(() => {
                  navigate("/profile");
                }, 1000);
              } else if (success === false) {
                toast.error(message);
              }
        } catch (error) {
            toast.error(error.message)            
        }
        setLoading(false);
}

  return (
    <>
         <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-primary">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#333]">
                Sign in to your account
            </h2>
            </div>
            <div className="w-1/2 min-h-1/2 p-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form 
            onSubmit={handleSignIn}
            className="space-y-6 focus:outline-none focus:border-none focus:ring-0" action="#" method="POST">

                <div className="h-fit rounded-lg w-full flex flex-col bg-white border border-gray-300 shadow-sm">
                    <input
                    ref={email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="focus:outline-none focus:border-none focus:ring-0 px-4 placeholder:text-base rounded-t-lg block w-full rounded-none  placeholder:px-28 border-none py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Email address"
                    />
                    <hr className="border-gray-200" />
                    <input
                    ref={password}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="focus:outline-none focus:border-none focus:ring-0 px-4 placeholder:text-base rounded-b-lg block w-full rounded-none border-none py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="flex justify-between">
                    <fieldset className="flex gap-2 items-center">
                        <input className="rounded-lg accent-[#333] w-4 h-4 focus:ring-[#333] focus:ring-2 p-2 ring-offset-2 focus:rounded-xl" type="checkbox" name="remember" id="remember" />
                        <label className="text-sm text-gray-700" htmlFor="remember">Remember me</label>
                    </fieldset>
                    <p className="cursor-pointer font-semibold text-[#333] hover:text-[#555] text-sm">Forgot password?</p>
                </div>
                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-gradient-to-t from-black to-[#444]  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#333]"
                >
                    Sign in
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                href="#"
                className="font-semibold leading-6 text-[#333] hover:text-indigo-500"
                >
                Start a 14 day free trial
                </a>
            </p>
            </div>
        </div>
      </div>
    </>
  );
}
