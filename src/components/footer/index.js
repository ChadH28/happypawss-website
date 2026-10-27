export default function Footer() {
  return (
    <>
      <footer className="bg-[#F5F0E8] border-t border-[#F19F1F]/10 px-5 md:px-12 py-10 md:py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 items-start">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <strong className="text-[#108896] text-lg font-extrabold">Happy Paws</strong>
            <p className="text-[#3D2C2E]/70 text-sm mt-1">
              Cape Town&apos;s trusted pet sitting — where every tail gets a happy ending.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div>
              <strong className="text-[#108896] text-sm font-bold uppercase tracking-wide">
                Our Address
              </strong>
              <p className="text-[#3D2C2E]/80 text-sm mt-1 whitespace-pre-line">
                Anywhere in Cape Town
              </p>
            </div>
            <div>
              <strong className="text-[#108896] text-sm font-bold uppercase tracking-wide">
                Contact
              </strong>
              <br />
              <a
                href="tel:+27637407158"
                className="text-[#3D2C2E]/80 text-sm mt-1 hover:text-[#F19F1F] transition-colors inline-block"
              >
                (+27) 63-740-7158
              </a>
            </div>
            <div>
              <strong className="text-[#108896] text-sm font-bold uppercase tracking-wide">
                Email
              </strong>
              <br />
              <a
                target="_blank"
                href="mailto:happypaws@gmail.com"
                className="text-[#3D2C2E]/80 text-sm mt-1 hover:text-[#F19F1F] transition-colors inline-block"
              >
                happypaws@gmail.com
              </a>
            </div>
          </div>
        </div>
        <hr className="warm-divider my-6" />
        <div className="text-center">
          <p className="text-[#3D2C2E]/60 text-xs">
            © 2025 Happy Paws Pet Sitting. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
