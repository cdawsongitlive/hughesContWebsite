import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import ContactSection2 from "components/ContactSection2";

function ContactusPage(props) {
  return (
    <>
      <Meta title="Contactus" />
      <Navbar
        color="/logocut.png"
        logoInverted="/logocut.png"
      />
      <ContactSection2
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="primary"
        showNameField={true}
      />
    </>
  );
}

export default ContactusPage;
