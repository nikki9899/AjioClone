import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/headerfooter/header";
import Footer from "@/components/headerfooter/Footer";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const sendData = async () => {
    if (!name || !email || !password) {
      return alert("All fields are mandatory please fill");
    }

    let result = await fetch("https://backend-liard-eight.vercel.app/api/auth", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
     console.log(result)
    result = await result.json();
    if (result.success) {
      alert("Registration Succesful");
      router.push("/Register");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="mx-auto mt-12 w-96 bg-white shadow-2xl p-4 overflow-hidden">
          <div className="w-88 mx-auto bg-white p-4">
            <h1 className="text-4xl text-black font-sans">Welcome To AJIO</h1>

            <div className="h-25 mt-10">
              <p className="text-lg text-gray-700 leading-tight font-sans">
                Join / Sign In using Email
              </p>
            </div>

            <div className="w-72 mx-auto mt-[50px] mb-4">
              <p className="text-base text-black font-sans mb-2">Name*</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border-b border-black focus:outline-none"
                placeholder="name"
              />
            </div>

            <div className="w-72 mx-auto mb-4">
              <p className="text-base text-black font-sans mb-2">Email*</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-b border-black focus:outline-none"
                placeholder="email"
              />
            </div>

            <div className="w-72 mx-auto mb-4">
              <p className="text-base text-black font-sans mb-2">Password*</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border-b border-black focus:outline-none"
                placeholder="password"
              />
            </div>

            <button
              className="bg-yellow-400 text-white ml-[30%] rounded w-36 p-4"
              onClick={sendData}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
