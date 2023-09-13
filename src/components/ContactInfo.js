import ContactPic from "../img/contact.png";
import LocationPic from "../img/pin.png";
import EmailPic from "../img/email.png";

function ContactInfo() {
    const email = 'datcu31@gmail.com';

    return (
        <div>
            <p className="font-semibold text-xl">Contact Informations</p>
            <p className="font-light mt-2">Let's connect and build something awsome together!</p>
            <div className="flex flex-col justify-center items-start mt-7">
                <div className="info-wrap">
                    <img src={ContactPic} alt="Contact" className="info-pic"></img>
                    <div className="info-text-container">
                        <p className="font-extrabold">Name</p>
                        <p>Alexandru Datcu</p>
                    </div>
                </div>
                <div className="info-wrap">
                    <img src={LocationPic} alt="Location" className="info-pic"></img>
                    <div className="info-text-container">
                        <p className="font-extrabold">Location</p>
                        <p>Romania</p>
                    </div>
                </div>
                <div className="info-wrap">
                    <img src={EmailPic} alt="Email" className="info-pic"></img>
                    <div className="info-text-container">
                        <p className="font-extrabold">Email</p>
                        <a href={`mailto:${email}`}><span className="text-blue-500">datcu31@gmail.com</span></a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactInfo;