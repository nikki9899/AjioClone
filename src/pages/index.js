import React from "react";
import Navbar from "../components/headerfooter/header.jsx";
import CSR1 from "@/Atoms/carasouel1.jsx";
import CSR2 from "@/Atoms/carasouel2.jsx";
import CSR3 from "@/Atoms/carasouel3.jsx";
import CSR4 from "@/Atoms/carasouel4.jsx";
import CSR5 from "@/Atoms/carasouel5.jsx";
import Poster1 from "@/poster/poster1.jsx";
import Poster2 from "@/poster/poster2.jsx";
import Poster3 from "@/poster/poster3.jsx";
import Poster4 from "@/poster/poster4.jsx";
import Poster5 from "@/poster/psoter5.jsx";
import Poster6 from "@/poster/poster6.jsx";
import Poster7 from "@/poster/poster7.jsx";
import Molecule1 from "@/Molecules/molecule1.jsx";
import Molecule2 from "@/Molecules/molecule2.jsx";
import PCSR1 from "@/Atoms/pcarasouel.jsx";
import PCSR2 from "@/Atoms/pcarasouel1.jsx";
import Fun1 from "@/components/flex/fun.jsx";
import Fun2 from "@/components/flex/fun2.jsx";
import Fun3 from "@/components/flex/fun3.jsx";
import Fun4 from "@/components/flex/fun4.jsx";
import Gfun from "@/components/Gflex/gfun.jsx";
import Gfun2 from "@/components/Gflex/gfun2.jsx";
import Line1 from "@/imageline/line1.jsx";
import Line2 from "@/imageline/line2.jsx";
import Line3 from "@/imageline/line3.jsx";
import Footer from "@/components/headerfooter/Footer.jsx";

export default function Home() {
  return (
    <main>
      
      <Navbar />
      <CSR1 />
      <Poster1 />
      <CSR2 />
      <PCSR1 />
      <Poster2 />
      <CSR3 />
      <PCSR2 />
      <Poster3 />
      <Fun1 />
      <Fun2 />
      <Poster4 />
      <CSR4 />
      <Poster5 />
      <CSR5 />
      <Fun3 />
      <Poster6 />
      <Gfun />
      <Gfun2 />
      <Poster7 />
      <Fun4 />
      <Molecule2 />
      <Line1 />
      <Line2 />
      <Line3 />
      <Molecule1 />
      <Footer />
    </main>
  );
}
