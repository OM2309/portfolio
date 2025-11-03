import { FaQuoteLeft } from "react-icons/fa6";

export default function Quote() {
  return (
    <figure className="">
      <div className="relative border rounded-2xl p-8 shadow-lg 900">
        {/* Large Quote Marks (behind text) */}
        <div className="absolute -top-4 left-6 text-[10rem] text-gray-300 opacity-10 select-none z-0">
          <FaQuoteLeft />
        </div>

        {/* Quote Text (in front) */}
        <blockquote className="relative text-lg md:text-xl font-medium text-gray-300 leading-relaxed z-10">
          A man who is master of patience is master of everything else.
        </blockquote>

        {/* Author */}
        <figcaption className="mt-6 text-right text-sm font-medium text-gray-400">
          — George Savile
        </figcaption>
      </div>
    </figure>
  );
}
