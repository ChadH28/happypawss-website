export default function Footer() {
  return (
    <>
      <footer className="px-[50px] max-[1024px]:px-[20px] py-10 flex gap-6 flex-wrap">
        <div className="w-full flex justify-between items-start">
          <div>
            <strong className="text-red-600">Our Address</strong>
            <br />
            <span className="whitespace-pre-line">{`Anywhere in Cape Town`}</span>
          </div>
          <div>
            <strong className="text-red-600">Contact</strong>
            <br />
            <a
              href="tel:+27637407158"
              className="whitespace-pre-line"
            >{`(+27) 63-740-7158`}</a>
          </div>
          <div>
            <strong className="text-red-600">Email</strong>
            <p className="whitespace-pre-line">
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
        <div className="copyright w-full flex justify-center content-center">
          <p>© 2025. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
