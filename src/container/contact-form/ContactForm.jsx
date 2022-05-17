import ContactFormStyles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <div className={ContactFormStyles.background}>
      <div className={ContactFormStyles.container}>
        <div className={ContactFormStyles.screen}>
          <div className={ContactFormStyles.screen_header}>
            <div className={ContactFormStyles.screen_header_left}>
              <div
                className={`${ContactFormStyles.screen_header_button} ${ContactFormStyles.close}`}
              ></div>
              <div
                className={`${ContactFormStyles.screen_header_button} ${ContactFormStyles.maximize}`}
              ></div>
              <div
                className={`${ContactFormStyles.screen_header_button} ${ContactFormStyles.maximize}`}
              ></div>
            </div>
            <div className={ContactFormStyles.screen_header_right}>
              <div className={ContactFormStyles.screen_header_ellipsis}></div>
              <div className={ContactFormStyles.screen_header_ellipsis}></div>
              <div className={ContactFormStyles.screen_header_ellipsis}></div>
            </div>
          </div>
          <div className={ContactFormStyles.screen_body}>
            <div
              className={`${ContactFormStyles.screen_body_item} ${ContactFormStyles.left} `}
            >
              <div className={ContactFormStyles.app_title}>
                <span>CONTACT-</span>
                <span>US</span>
              </div>
              <div className={ContactFormStyles.app_contact}>
                CONTACT INFO : +62 81 314 928 595
              </div>
            </div>
            <div className={ContactFormStyles.screen_body_item}>
              <div className={ContactFormStyles.app_form}>
                <div className={ContactFormStyles.app_form_group}>
                  <input
                    className={ContactFormStyles.app_form_control}
                    placeholder="NAME"
                  />
                </div>
                <div className={ContactFormStyles.app_form_group}>
                  <input
                    className={ContactFormStyles.app_form_control}
                    placeholder="EMAIL"
                  />
                </div>
                <div className={ContactFormStyles.app_form_group}>
                  <input
                    className={ContactFormStyles.app_form_control}
                    placeholder="CONTACT NO"
                  />
                </div>
                <div
                  className={`${ContactFormStyles.app_form_group} ${ContactFormStyles.message} `}
                >
                  <input
                    className={ContactFormStyles.app_form_control}
                    placeholder="MESSAGE"
                  />
                </div>
                <div
                  className={`${ContactFormStyles.app_form_group} ${ContactFormStyles.buttons}`}
                >
                  <button className="button">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
