import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doclink",
  description: "All in One AI Documentation Platform",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Reach us for anything. Explain your problem and we'll help you solve it."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
