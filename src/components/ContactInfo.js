function ContactInfo() {
    const email = 'datcu31@gmail.com';

    return (
        <div>
            <p className="font-semibold text-xl">Contact Informations</p>
            <p className="font-light mt-2">Let's connect and build something awsome together!</p>
            <div className="flex flex-col justify-center items-start mt-7">
                <div className="info-wrap">
                    <svg className="info-pic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                    </svg>
                    <div className="info-text-container">
                        <p className="font-extrabold">Name</p>
                        <p>Alexandru Datcu</p>
                    </div>
                </div>
                <div className="info-wrap">
                    <svg className="info-pic" viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1">
                            <g id="Dribbble-Light-Preview" transform="translate(-223.000000, -5399.000000)">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M174,5248.219 C172.895,5248.219 172,5247.324 172,5246.219 C172,5245.114 172.895,5244.219 174,5244.219 C175.105,5244.219 
                                    176,5245.114 176,5246.219 C176,5247.324 175.105,5248.219 174,5248.219 M174,5239 C170.134,5239 167,5242.134 167,5246 C167,5249.866 174,5259 
                                    174,5259 C174,5259 181,5249.866 181,5246 C181,5242.134 177.866,5239 174,5239" id="pin_fill_sharp_circle-[#634]">

                                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <div className="info-text-container">
                        <p className="font-extrabold">Location</p>
                        <p>Romania</p>
                    </div>
                </div>
                <div className="info-wrap">
                    <svg className="info-pic" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" space="preserve">
                        <g>
                            <path d="M31.5,8.9C30.7,7.2,29,6,27,6H15c-2,0-3.7,1.2-4.5,2.9L21,16.8L31.5,8.9z" />
                            <path d="M21.6,18.8C21.4,18.9,21.2,19,21,19s-0.4-0.1-0.6-0.2l-8.5-6.4L10,11l0,0c0,0,0,0,0,0H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h5
		                            c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H4c-0.6,0-1,0.4-1,1
		                            s0.4,1,1,1h6c0,2.8,2.2,5,5,5h12c2.8,0,5-2.2,5-5V11c0,0,0,0,0,0L21.6,18.8z"/>
                        </g>
                    </svg>
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