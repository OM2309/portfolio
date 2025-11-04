import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex items-center justify-between w-full max-w-2xl">
      <div className="text-left">
        <h3 className="text-xl font-semibold">Anurag Sharma</h3>
        <p className="text-gray-600 dark:text-gray-400">
          22 • engineer • developer
        </p>
      </div>
      <div>
        <Image
          src="/images/Hop.jpg"
          height={60}
          width={60}
          alt="Profile"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
