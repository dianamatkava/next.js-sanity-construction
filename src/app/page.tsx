import Image from "next/image";
import Test from "../components/figma.jsx"
import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="w-full">
        <header>
          <AppHeader/>
        </header>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <AppFooter/>
      </footer>
    </div>
  );
}
