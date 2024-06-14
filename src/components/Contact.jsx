import React from 'react'

const Contact = () => {
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
                                <p>swapnilghone9@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+91 771 590 7772</p>
                            </div>

                            <div className="skype">
                                <i className="bi bi-skype"></i>
                                <h4>Skype:</h4>
                                <p>live:swapnilghone9_1</p>
                            </div>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
                        </div>

                    </div>

                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
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
