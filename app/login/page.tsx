"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      router.push('/products');
    } else if (username === 'user' && password === 'user') {
      router.push('/dashboard');
    } else {
      alert('Login gagal. Coba lagi.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="p-8 max-w-md mx-auto bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      
      <div className="mb-4">
        <label htmlFor="username" className=" text-sm font-medium text-gray-600">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="password" className=" text-sm font-medium text-gray-600">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
  
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        SUBMIT
      </button>
    </div>
  </div>  
  );
};

export default Login;
