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
        logo="https://lh3.google.com/u/0/d/10rzxELgLoFbXhwUYBem8oxjwRcZsWfVd=w1920-h838-iv1"
        logoInverted="https://lh3.google.com/u/0/d/10rzxELgLoFbXhwUYBem8oxjwRcZsWfVd=w1920-h838-iv1"
      />
      <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        subtitle="Hughes Contracting is a general contracting company based out of Raynham, MA that handles both commercial and residential projects. We can handle all aspects of your project from demolition to the finish product and everything in-between. Our main goal is to ensure our customers are happy by delivering the highest quality product while maintaining timely communication."
        image="https://drive.google.com/uc?export=view&id=1d4qXcDAgCwgsInKXdmuH4DvRg9nBT6C8"
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
        logo="https://lh3.google.com/u/0/d/10rzxELgLoFbXhwUYBem8oxjwRcZsWfVd=w1920-h838-iv1"
        logoInverted="https://lh3.google.com/u/0/d/10rzxELgLoFbXhwUYBem8oxjwRcZsWfVd=w1920-h838-iv1"
        sticky={true}
      />
    </>
  );
}

export default IndexPage;
