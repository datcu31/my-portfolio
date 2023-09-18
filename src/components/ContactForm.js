import { Form } from "react-router-dom";

function ContactForm() {
    return (
        <div className="flex flex-col">
            <p className="font-semibold text-xl">Message Me</p>
            <Form className="mt-2">
                <div className="flex flex-col md:flex-row md:space-x-2 lg:space-x-3">
                    <label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Name"
                            className="form-label"></input>
                    </label>
                    <label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            className="form-label"></input>
                    </label>
                </div>
                <div className="flex flex-col">
                    <label>
                        <input
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            className="form-label"></input>
                    </label>
                    <label>
                        <textarea
                            id="message"
                            type="text"
                            placeholder="Message"
                            rows={4}
                            className="form-label"></textarea>
                    </label>
                </div>
                <button className="rounded-full transition-all px-5 py-2 bg-slate-200 hover:bg-slate-300 hover:-translate-y-1 active:translate-y-0">Send message</button>
            </Form>
        </div>

    )
}

export default ContactForm;