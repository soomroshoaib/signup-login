import React , { useRef } from "react";
import "./contact.css";
import Paulwiner from "../../image/grame.png";
import AndyJassy from "../../image/google.png";
import Ecommerce from "../../image/Amazone.webp";
import Daraz from "../../image/Darz.jpg";
import Facebook from "../../image/facebooss.png";
import Linkdlin from "../../image/formula.png";
import twitter from "../../image/twing.png";
import intagrame from "../../image/intagrame.jpg";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_0zogjjq",
                "template_fogi256",
                form.current,
                "7F51BvI9R3ar3IZCN"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <section id="contactPage">
            <div id="Client"></div>
            <div id="contact">
                <h1 className="contactpageTitle">My Clients</h1>
                <p className="clientDece">
                    l've been very impressed with the professionalism and techical skills
                    of
                    <span className="introName"> Umair Ullah khan </span> and his
                    Strugbits team . They have accepted our challenging requirement and
                    succeeded. Our time zone differences are not a problem.
                    <span className="introName">Umair Ullah khan </span> will also guide
                    his clients in friendly and humble way when necessary. I higly
                    recommend Strugbits and CTO{" "}
                    <span className="introName">Umair Ullah khan </span> by Paul Winer
                </p>
                <div className="clientImgs">
                    <img src={Paulwiner} alt="Clients" className="clientimg" />
                    <img src={AndyJassy} alt="Clients" className="clientimg" />
                    <img src={Ecommerce} alt="Clients" className="clientimg" />
                    <img src={Daraz} alt="Clients" className="clientimg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactpagetitle"> Contact me</h1>
                <span className="contactdesc">
                    Please fill out the from below to discuss any work opportunities
                </span>
                <form className="contactFrom" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Name" name="user_name" />
                    <input type="email" className="email" placeholder="Email"  name="user_email" />
                    <textarea
                        className="msg"
                        
                        name="message"
                        rows="5"
                        placeholder="your message"
                    />
                    {/* <button type="submit"  value="Send" className="submitbtn">

                        
                        Submit
                    </button> */}
                    <input type="submit" value="Send" className="submitbtn" />
                    <div className="links">
                        <img src={Facebook} alt="" className="link" />
                        <img src={Linkdlin} alt="" className="link" />
                        <img src={twitter} alt="" className="link" />
                        <img src={intagrame} alt="" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
