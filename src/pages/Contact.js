import ContactInfo from "../components/ContactInfo";

function Contact() {
    return (
        <div>
            <p className="flex place-content-center text-sm lg:text-base font-light">Get in touch</p>
            <h1 className="flex text-4xl lg:text-5xl place-content-center mb-8 font-extrabold">Contact</h1>
            <ContactInfo />
        </div>
    );
}

export default Contact;