import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

function Contact() {
    return (
        <>
            <div className="animate-moveInDown">
                <p className="flex place-content-center text-sm lg:text-base font-light">Get in touch</p>
                <h1 className="flex text-4xl lg:text-5xl place-content-center mb-8 font-extrabold">Contact</h1>
            </div>
            <div className="flex flex-col mx-10 space-y-7 md:space-y-0 md:space-x-9 md:flex-row">
                <ContactForm />
                <ContactInfo />
            </div>
        </>
    );
}

export default Contact;