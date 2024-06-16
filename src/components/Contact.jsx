import React, { useState } from 'react';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const [formStatus, setFormStatus] = useState('standby');
    const [formError, setFormError] = useState('');

    const handleOnChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // clear error after validation is passed
        validateForm();
    }

    const handleContactSubmission = async (e) => {

        e.preventDefault();
        // validate form before submission
        if (validateForm()) {
            console.log(import.meta.env.VITE_EMAIL_SERVICE_ID);
            setFormStatus('loading');

            try {
                await emailjs.send(
                    import.meta.env.VITE_EMAIL_SERVICE_ID,
                    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                    formData,
                    {
                        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
                    },
                );

                setFormData({
                    name:'',
                    email:'',
                    message:''
                });
                setFormStatus('success');

            } catch (err) {
                if (err instanceof EmailJSResponseStatus) {
                    setFormStatus('error');
                    setFormError(err);
                    return;
                }
                setFormError(err);
                setFormStatus('error');

                console.log(err);
            }
        }
    }

    const validateForm = () => {

        const newErrors = {
            name: !formData.name.trim(),
            email: !(formData.email.trim()) || (!/\S+@\S+\.\S+/.test(formData.email)),
            message: !formData.message.trim(),
        };
        setErrors(newErrors);

        // If any error is true, the form is invalid
        return !Object.values(newErrors).some(error => error);
    }

    return (
        <section id="contact" className="contact section-wrap" data-aos="fade-in">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Feel Free to reach me anytime</p>
                </div>

                <div className="row">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p><a href='mailto:swapnilghone9@gmail.com'>swapnilghone9@gmail.com</a></p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p><a href='tel:+91 7715907772'>+91 7715907772</a></p>
                            </div>

                            <div className="skype">
                                <i className="bi bi-skype"></i>
                                <h4>Skype:</h4>
                                <p><a href='skype:live:swapnilghone9_1?chat'>live:swapnilghone9_1</a></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="php-email-form" onSubmit={handleContactSubmission}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" id="name" value={formData.name} className={`form-control ${(errors.name) ? "is-invalid" : ""}`} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" name="email" id="email" value={formData.email} className={`form-control ${(errors.email) ? "is-invalid" : ""}`} onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" value={formData.message} rows="10" className={`form-control ${(errors.message) ? "is-invalid" : ""}`} onChange={handleOnChange}></textarea>
                            </div>
                            <div className="my-3">
                                <div className={`loading ${(formStatus == 'loading') && "d-block"}`}>Loading</div>
                                <div className={`loading ${(formStatus == 'error') && "d-block"}`}>Oops something went wrong...</div>
                                <div className={`sent-message ${(formStatus == 'success') && "d-block"}`}>Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact
