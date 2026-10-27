import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-5 py-20 text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-[#108896] font-extrabold text-5xl md:text-7xl leading-tight mb-4">
          404
        </h1>

        <p className="text-[#3D2C2E] text-xl md:text-2xl font-bold mb-2">
          Page not found
        </p>

        <p className="text-[#3D2C2E]/60 text-sm md:text-base leading-relaxed mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/happypawss-website/"
            className="inline-flex items-center gap-2 bg-[#F19F1F] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#e08e12] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Back to Home</span>
          </Link>

          <Link
            href="/happypawss-website/gallery"
            className="inline-flex items-center gap-2 bg-[#108896] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#0d727a] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>View Gallery</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
 
