import About from "@/components/about";
import ProfileHeader from "@/components/profile-header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen px-6">
      <ProfileHeader />
      <About />
    </div>
  );
}
