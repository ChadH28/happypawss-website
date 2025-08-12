export default function Footer() {
  return (
    <>
      <footer className="px-[50px] max-[1024px]:px-[20px] py-10 flex gap-6 flex-wrap">
        <div className="w-full flex justify-between items-start">
          <div>
            <strong className="text-red-600">Our Address</strong>
            <br />
            <a
              target="_blank"
              href="https://www.google.com/maps/dir/-33.91039,18.50459/277+Main+Rd,+Sea+Point,+Cape+Town,+8060/@-33.9151888,18.3681501,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dcc673aef9ff6e5:0xfdae4c917b53c398!2m2!1d18.3940621!2d-33.9111697?entry=ttu&g_ep=EgoyMDI1MDMxMC4wIKXMDSoASAFQAw%3D%3D"
              className="whitespace-pre-line"
            >{`277 Main Rd, Seapoint,\n Cape Town,\n 8060`}</a>
          </div>
          <div>
            <strong className="text-red-600">Contact Us</strong>
            <br />
            <a
              href="tel:+27787589451"
              className="whitespace-pre-line"
            >{`(+27) 78-758-9451`}</a>
          </div>
          <div>
            <strong className="text-red-600">Schedules</strong>
            <p className="whitespace-pre-line">{`Mon - Fri :- 7:30am - 7:30pm\nSat :- 7:00am - 2:00pm`}</p>
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
