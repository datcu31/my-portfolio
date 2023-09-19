import { data } from "autoprefixer";
import { useState } from "react";
import { Form } from "react-router-dom";
import validator from "validator";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [succes, setSucces] = useState(false);
    const [sending, setSending] = useState(false);
    const [failed, setFailed] = useState(false);

    // Handle input change
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handle input focus to reset error state
    const handleInputFocus = (errorState) => {
        errorState(false);
    };

    // Submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Error states
        formData.name === "" ? setNameError(true) : setNameError(false);
        formData.email === "" || !validator.isEmail(formData.email) ? setEmailError(true) : setEmailError(false);
        formData.subject === "" ? setSubjectError(true) : setSubjectError(false);
        formData.message === "" ? setMessageError(true) : setMessageError(false);

        // Invalid form
        if (
            nameError || formData.name === "" ||
            emailError || formData.email === "" || !validator.isEmail(formData.email) ||
            subjectError || formData.subject === "" ||
            messageError || formData.message === ""
        ) {
            setFormData({
                ...formData,
                email: "",
            });
            setSending(false);
            setFailed(true);
            return;
        };

        // Sending data to API
        setSending(true);

        const data = JSON.stringify(formData);

        fetch("https://my-portfolio-6f605-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
            {
                method: 'POST',
                body: data,
            }).then((res) => res.json())
            .then((data) => {
                setSending(false);
                setSucces(true);
                setFailed(false);
                setFormData({
                    ...formData,
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => {
                    setSucces(false);
                }, 3000)
            }).catch((err) => {
                console.log(err);
                setSending(false);
                setFailed(true);
            });
    };

    // Button text 
    const handleButtonText = () => {
        if (sending) {
            return "Please wait...";
        } else if (succes) {
            return "Message sent!";
        } else if (failed || nameError || emailError || subjectError || messageError) {
            return "Try again";
        } else {
            return "Send Message";
        }
    }

    return (
        <div className="flex flex-col">
            <p className="font-semibold text-xl">Message Me</p>
            <Form onSubmit={handleSubmit} className="mt-2">
                <div className="flex flex-col md:flex-row md:space-x-2 lg:space-x-3">
                    <label>
                        <input
                            id="name"
                            type="text"
                            onFocus={() => { handleInputFocus(setNameError) }}
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                            autoComplete="name"
                            placeholder={`${nameError ? "Please enter your name" : "Name"}`}
                            className="form-label"></input>
                    </label>
                    <label>
                        <input
                            id="email"
                            type="text"
                            onFocus={() => { handleInputFocus(setEmailError) }}
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            autoComplete="email"
                            placeholder={`${emailError ? "Please enter youre email" : "Email"}`}
                            className="form-label"></input>
                    </label>
                </div>
                <div className="flex flex-col">
                    <label>
                        <input
                            id="subject"
                            type="text"
                            onFocus={() => { handleInputFocus(setSubjectError) }}
                            onChange={handleChange}
                            value={formData.subject}
                            name="subject"
                            autoComplete="subject"
                            placeholder={`${subjectError ? "Please enter a subject" : "Subject"}`}
                            className="form-label"></input>
                    </label>
                    <label>
                        <textarea
                            id="message"
                            type="text"
                            onFocus={() => { handleInputFocus(setMessageError) }}
                            onChange={handleChange}
                            value={formData.message}
                            name="message"
                            autoComplete="message"
                            placeholder={`${messageError ? "Please enter youre message" : "Message"}`}
                            rows={4}
                            className="form-label"></textarea>
                    </label>
                </div>
                <button className="rounded-full transition-all px-5 py-2 bg-slate-200 hover:bg-slate-300 hover:-translate-y-1 active:translate-y-0"><p>{handleButtonText()}</p></button>
            </Form>
        </div>

    )
}

export default ContactForm;