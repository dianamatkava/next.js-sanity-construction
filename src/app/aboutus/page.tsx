import AboutUs from "@/components/AboutUs";
import News from "@/components/News";

export default async function AboutUsPage() {

  return (
    <div className="flex flex-col shrink grow gap-12">
      <AboutUs showReadMoreLink={false}/>
      <News/>
    </div>
  );
}
