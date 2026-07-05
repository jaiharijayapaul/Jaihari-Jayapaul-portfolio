import React, { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        
        // --- IMPORTANT: ADD YOUR WEB3FORMS ACCESS KEY HERE ---
        formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully!");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setResult("Something went wrong! Please try again.");
        }
        setIsSubmitting(false);
        
        setTimeout(() => {
            setResult("");
        }, 5000);
    };

    return (
        <section id="contact" className="contact section section-full">
            <div className="container" style={{ maxWidth: '1100px' }}>
                <h2 className="section-title" data-aos="fade-up">Get In <span>Touch</span></h2>
                
                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
                    
                    {/* Left Column - Contact Info */}
                    <div className="contact-info-col" data-aos="fade-right">
                        <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Let's work together!</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6', fontSize: '1rem' }}>
                            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div className="contact-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <a href="mailto:jayapauljaihari@gmail.com" className="contact-info-card glass-card">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4>Email Me</h4>
                                    <p>jayapauljaihari@gmail.com</p>
                                </div>
                            </a>
                            
                            <a href="tel:+919786828915" className="contact-info-card glass-card">
                                <div className="contact-icon">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h4>Call Me</h4>
                                    <p>+91 9786828915</p>
                                </div>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/jaihari-jayapaul" target="_blank" rel="noopener noreferrer" className="contact-info-card glass-card">
                                <div className="contact-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p>jaihari-jayapaul</p>
                                </div>
                            </a>
                            
                            <a href="https://github.com/jaiharijayapaul" target="_blank" rel="noopener noreferrer" className="contact-info-card glass-card">
                                <div className="contact-icon">
                                    <i className="fab fa-github"></i>
                                </div>
                                <div>
                                    <h4>GitHub</h4>
                                    <p>jaiharijayapaul</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="contact-form-col glass-card" data-aos="fade-left" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <form className="contact-form" onSubmit={onSubmit}>
                            
                            <input type="hidden" name="subject" value="New Submission from Portfolio" />
                            <input type="hidden" name="from_name" value="Portfolio Visitor" />

                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required className="form-input" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Message" rows="5" required className="form-input" style={{ resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? (
                                    <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                                ) : (
                                    <><i className="fas fa-paper-plane"></i> Send Message</>
                                )}
                            </button>
                            
                            {result && (
                                <p style={{ marginTop: '1rem', textAlign: 'center', color: result.includes('Success') ? '#10b981' : 'var(--accent-color)' }}>
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                    
                </div>
            </div>
            <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '6rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
                <p>&copy; 2026 Jaihari Jayapaul. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
