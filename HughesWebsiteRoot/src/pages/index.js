import React from "react";
import Meta from "components/Meta";
import Navbar from "components/Navbar";
import HeroSection from "components/HeroSection";
import ContentCardsSection from "components/ContentCardsSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <Navbar
        color="primary"
        logo="/logocut.png"
        logoInverted="/logocut.png"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        subtitle="Hughes Contracting is a general contracting company based out of Raynham, MA that handles both commercial and residential projects. We can handle all aspects of your project from demolition to the finish product and everything in-between. Our main goal is to ensure our customers are happy by delivering the highest quality product while maintaining timely communication."
        image="/biglogo.jpg"
        buttonText="Get a Quote!"
        buttonColor="primary"
        buttonPath="/contactus"
      />
      <ContentCardsSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Check Out Our Work!"
        subtitle=""
      />
      <ContactSection
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
      <Footer
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="/logocut.png"
        logoInverted="/logocut.png"
        sticky={true}
      />
    </>
  );
}

export default IndexPage;
