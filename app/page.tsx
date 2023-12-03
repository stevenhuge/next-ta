import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-2 ">Username</label>
                <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"/>
            </div>

            <div className="mb-4">
                <label  className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"/>
            </div>
            <Link href="/products">
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Login</button>
            </Link>
             </form>
      
      
      
    </div>
  );
}
