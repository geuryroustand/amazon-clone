import Head from "next/head";
import { Heroe } from "../Components/Heroe";
import { Navbar } from "../Components/Navbar";
import { SubNavbar } from "../Components/SubNavbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SubNavbar />
      <main className="bg-[#eaeded]">
        <div className="container mx-auto">
          <Heroe />
        </div>
      </main>
    </>
  );
}
