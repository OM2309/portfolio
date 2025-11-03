import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import ProfileHeader from "@/components/profile-header";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      <div className="flex flex-col items-center mb-10">
        <ProfileHeader />
      </div>

      <div className="flex flex-col items-start space-y-8 max-w-2xl mx-auto w-full">
        <About />
        <Experience />
        <Skills />
      </div>

      <Footer />
    </div>
  );
}
