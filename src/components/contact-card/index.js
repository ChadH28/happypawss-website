export default function ContactCard() {
  return (
    <div className="parallax">
      <div className="form-container flex flex-col h-[600px] justify-center items-center">
        <div className="lined_header  text-center relative">
          <h2>{"Contact Us"}</h2>
        </div>
        <form
          //   data-aos="zoom-in-right"
          className="needs-validation bg-white flex flex-col gap-4 min-w-xl p-8 rounded-4xl"
          id="form"
          noValidate
          //   onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-4">
            <div className="form-group">
              <div className="input-group flex items-center gap-2 border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="text-[#F19F1F] fas fa-user" />
                  </span>
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName name"
                  aria-describedby="inputGroupPrepend"
                  placeholder="First Name"
                  pattern="[A-Za-z]{1,25}"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group flex items-center gap-2 border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="text-[#F19F1F] far fa-envelope" />
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="inputEmail email"
                  placeholder="user@example.com"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group flex items-center gap-2 border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend">
                    <i className="text-[#F19F1F] fas fa-phone" />
                  </span>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  id="inputContact mobile"
                  placeholder="123 456 7891"
                  min="10"
                  aria-describedby="inputGroupPrepend"
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                  required
                />
              </div>
            </div>
            <div className="input-group border-[#F19F1F] border-[2px] rounded-lg px-2 py-1">
              <textarea
                name="message"
                placeholder="Your Message Here..."
                rows="3"
              />
            </div>
          </div>
          <button
            data-sitekey="reCAPTCHA_site_key"
            data-callback="onSubmit"
            data-action="submit"
            type="submit"
            id="button-send"
            className="btn g-recaptcha text-white send bg-[#F19F1F] py-3 px-4 rounded-xl cursor-pointer"
          >
            Send <i className="fas text-white fa-paper-plane" />
          </button>
        </form>
      </div>
    </div>
  );
}
