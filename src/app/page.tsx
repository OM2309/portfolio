import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import ProfileHeader from "@/components/profile-header";
import Projects from "@/components/projects";
import Quote from "@/components/quote";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      <div className="flex flex-col items-center ">
        <ProfileHeader />
      </div>

      <div className="flex flex-col items-start space-y-8 max-w-2xl mx-auto w-full">
        <About />
        <Experience />
        {/* <Projects /> */}
        <Skills />
        <Quote />
      </div>

      <Footer />
    </div>
  );
}
