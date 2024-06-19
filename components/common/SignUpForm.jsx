"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignUpForm.module.css'; // Impor file CSS Module

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault(); // Mencegah form submit default
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        name,
        email,
        password
      });
      toast.success('Berhasil registrasi');
      console.log('Berhasil registrasi', response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Gagal registrasi: ${error.response.data.message}`);
      } else {
        toast.error('Gagal registrasi: An unexpected error occurred');
      }
      console.log('Gagal registrasi', error);
    }
  };

  return (
    <div>
      <form className="row y-gap-20" onSubmit={handleRegister}>
        <div className="col-12">
          <h1 className="text-22 fw-500">Welcome back</h1>
          <p className="mt-10">
            Already have an account yet?{" "}
            <Link href="/auth/signin" className="text-blue-1">
              Log in
            </Link>
          </p>
        </div>

        <div className="col-12">
        <ToastContainer />  
        </div>
        <div className="col-12">
          <div className="form-input">
         
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Nama Lengkap</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Email</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <label className="lh-1 text-14 text-light-1">Confirm Password</label>
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex">
            <div className="form-checkbox mt-5">
              <input type="checkbox" name="promotions" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
            </div>
            <div className="text-15 lh-15 text-light-1 ml-10">
              Email me exclusive Agoda promotions. I can opt out later as stated
              in the Privacy Policy.
            </div>
          </div>
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="button py-20 -dark-1 bg-blue-1 text-white w-100"
          >
            Sign Up <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default SignUpForm;
