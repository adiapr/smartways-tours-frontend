"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const { data: session, status } = useSession();

  useEffect(() => {
    if(status === 'authenticated'){
      router.replace(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const callbackUrl = searchParams.get('callbackUrl') || '/';
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: callbackUrl
      });

      console.log("SignIn Result:", result); // Tambahkan log ini untuk debugging

      if (result.error) {
        toast.error("Invalid email or password");
      } else {
        router.replace(result.url); 
      }
    } catch (error) {
      console.error("Error during signIn:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div>
      <form className="row y-gap-20" onSubmit={handleSubmit}>
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Don&apos;t have an account yet?{" "}
            <Link href={`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="text-blue-1">
              Sign up for free
            </Link>
          </p>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="lh-1 text-14 text-light-1">Email</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <div className="form-input ">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="lh-1 text-14 text-light-1">Password</label>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12">
          <a href="#" className="text-14 fw-500 text-blue-1 underline">
            Forgot your password?
          </a>
        </div>
        {/* End .col */}

        <div className="col-12">
          <button
            type="submit"
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Sign In <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End .col */}
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
