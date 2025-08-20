export default function Footer() {
  return (
    <>
      <footer className="md:px-12 px-5 py-10 flex gap-6 flex-wrap">
        <div className="w-full flex justify-between gap-1 items-start">
          <div>
            <strong className="text-[#108896] md:text-sm lg:text-base text-xs">
              Our Address
            </strong>
            <br />
            <span className="whitespace-pre-line md:text-sm lg:text-base text-xs ">{`Anywhere in Cape Town`}</span>
          </div>
          <div>
            <strong className="text-[#108896] md:text-sm lg:text-base text-xs">
              Contact
            </strong>
            <br />
            <a
              href="tel:+27637407158"
              className="whitespace-pre-line md:text-sm lg:text-base text-xs"
            >{`(+27) 63-740-7158`}</a>
          </div>
          <div>
            <strong className="text-[#108896] md:text-sm lg:text-base text-xs">
              Email
            </strong>
            <p className="whitespace-pre-line md:text-sm lg:text-base text-xs">
              {" "}
              <a
                target="_blank"
                href="mailto:happypaws@gmail.com"
                className="whitespace-pre-line"
              >{`happypaws@gmail.com`}</a>
            </p>
          </div>
        </div>
        <hr className="w-full" />
        <div className=" copyright w-full flex justify-center content-center">
          <p className="md:text-sm lg:text-base text-xs">
            © 2025. All rights reserved, SimplyC development
          </p>
        </div>
      </footer>
    </>
  );
}
