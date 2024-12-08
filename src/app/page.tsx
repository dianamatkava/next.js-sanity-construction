import AppHeader from "@/components/Header";
import AppFooter from "@/components/Footer";
import ServiceList from "@/components/ServiceList";
import ServicePreview from "@/components/ServicePreview";
import AboutUs from "@/components/AboutUs";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-between gap-6">
      <main className="">
        <header>
          <AppHeader/>
        </header>
        <div className="w-full flex flex-col justify-between gap-6 p-[60px]">
          <ServiceList/>
          <ServicePreview/>
          <AboutUs/>
          <News/>
        </div>
      </main>
      <footer className="w-full gap-6 flex-wrap items-center justify-center">
        <AppFooter/>
      </footer>
    </div>
  );
}
