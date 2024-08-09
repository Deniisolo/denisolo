import { ContactForm } from "~/_components/molecules/form-contact-me";
import { Information } from "~/_components/molecules/information";

export default function Contactme() {
  return (
    <section className="flex flex-1 gap-2 p-10">
      <ContactForm />
      <Information />
    </section>
  );
}
