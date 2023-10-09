import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/headerfooter/header";
import Footer from "@/components/headerfooter/Footer";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAuth = async () => {
    console.log(email);
    const response = await fetch(
      "https://backend-liard-eight.vercel.app/api/auth/getUser",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!data.success) {
      alert("User does not exist. Kindly Register");
      router.push("/login");
      return;
    }

    if (data.success) router.push("/productpage");
    else return alert("Invalid credentials");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white min-h-screen flex items-center justify-center w-full">
        <div className="w-96 bg-white shadow-2xl p-4 overflow-hidden">
          <h1 className="font-Assistant text-2xl font-semibold mt-4 justify-center flex mb-6">
            Sign Up
          </h1>
          <input
            className="border w-[80%]  p-4 m-4"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            className="border w-[80%]  p-4 m-4"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            onClick={loginAuth}
            className="border text-white bg-yellow-400 w-52 mx-14  p-4"
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
