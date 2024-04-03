import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faCcAmazonPay, faPaypal, faGooglePay, faCcApplePay, faCcMastercard  } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const USA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN0SURBVHgBtVZtLFVxGH/+tyOiOIq8RI7GiOKiJG9dNaE2NIvKMKrhg1zU+tAH16dsZrS1pbWy2mz44uWD0rLLEtbytlarLVwqJZl7GQvXPf2f414710tj8dv+u7/znP95Xn7P8z/nEvgHWGk8a66zzOUJL2OtLDi1ZobT31LT1Qc8NPCShfqffdWq9XxI1jLaSy9xDr4pypwrCZPUuYKaZBmXIznD/fyseNZyj7kMCJQVZF4ckp7Jqbz7oI5byxdZaXDwSc0NC/JWWJibsi+U3XDE4yB4ebhAbeNrI+7saAPREQHwqKpZeK764W11+AnvIkJIudjfDvFFYHR+YVJcaHFLe7/Zh88jcD05CjrefYKe9wMQFeEPaDPwL6of0EnvJcaGwdfR3xDpvt9sn/ZPdFZQCNxrqGtbFQAzB8IXf6Obxyc0QCWAqelZwGvkWCpyb1oF2nHZ2lgJIuB+t64W0DY/h8neflmayyHNs5HBrmWJUPPwQL9e7aKWxSyxfCe6mpU9gkMMgNmi3Yteo13MEfcTAsDPyXqpsTtN1S7JSX5ULpXQ5JuZSYX9HwdZdJKkLxkfLMi6IHC0F91KBg3NGu1ijnswGfuYKHBNTxUWdc5St5VCBZg94U2GMFNctY3tIOaY6cljnstcXIG4ySUhTuCvr8CAsZdN1sTBJ1kefNyrDJuJUuCkdOjlwMw6RRzlQ2BwMcc9d8wn4DAzbxRAx0MRA0QS501HD50i0BECJfDaY2HEsbGG6UZuGASE+41s8Pd0NgpgwrKnGPorxTINzTRItNTk7lUSJcaGQmlFvRFH7HZzoyffE1aAI/TE8ti0wpIqwbIef1Imh4y88mV7aUWdkD02uYYevKuL3+Eoa7IyAJDAmDzeydGWzvi4YLAUpJiBzSJzlwY8mbnVAXieH8JSYHugZmZUw6oFtYaDbQHfx3SmXGuTEJDBNkCngwailMlYu7PnJmEbMNbY5CoQ2gclv/VYelXoA3DDVTW9uvk5FrYA4pfd8genJeS0HCSSMtgCUO3zIt+8Eg6N0Rdt4PFTxV5/30L4D8yOjhUdOB+lWHcDlUtO1yS/eeAz8pX+yFpBhioruV/tbxXa6ak02AB2mJq12gWHprtmp6s2FMAAOsKcboGJJwTi6L8LKd2uHwKiotmqeIA2htGWR7S2qtfz8RdWABYXoytywAAAAABJRU5ErkJggg==";
    return (
        <footer>
            <div className="main-footer">
                <div className="footer">
                    <div id="left-footer">
                        <h2>BE THE FIRST TO KNOW</h2>
                        <p id='signup'>sign up for updates from metta muse</p>
                        <div id='input-btn'>
                        <input id='email' type="email" placeholder="Enter your e-mail..." />
                        <button id='btn'>Subscribe</button></div>
                    </div>
                    <div id="right-footer">
                        <h2>CONTACT</h2>
                        <p><pre>+44 221 333 4567</pre></p>
                        <p>customercare@mettamuse.com</p>
                        <h3>CURRENCY</h3>
                        <div className="usd-img">
                            <img src={USA}></img>
                            <h4>+ USD</h4>
                        </div>
                        <p>Transaction will be completed in Euros and a currency references is available on hover</p>
                    </div>
                </div>
                <hr id="hr-footer" />
                <div id='lower-footerpart'>
                    <div id="left-footer2">
                        <h2 className="metta">metta</h2>
                        <p className="about-page">About Us</p>
                        <p className="about-page">Stories</p>
                        <p className="about-page">Artisans</p>
                        <p className="about-page">Boutiques</p>
                        <p className="about-page">Contact US</p>
                        <p className="about-page">EU Compliances Docs</p>
                    </div><hr className="hr-footer" />
                    <div id="middle-footer2">
                        <h2>QUICK LINK</h2>
                        <p className="about-page">Order & Shipping</p>
                        <p className="about-page">Join/Login as a Seller</p>
                        <p className="about-page">Payment and pricing</p>
                        <p className="about-page">Return & Refunds</p>
                        <p className="about-page">FAQs</p>
                        <p className="about-page">Privacy Policy</p>
                        <p className="about-page">Terms and Conditions</p>
                    </div><hr className="hr-footer" />
                     <div id="right-footer2">
                            <h2>FOLLOW US</h2>
                            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                            <h3>metta muse ACCEPTS</h3>
                            <FontAwesomeIcon icon={faCcAmazonPay} className="payment-icon" />
                            <FontAwesomeIcon icon={faPaypal} className="payment-icon" />
                            <FontAwesomeIcon icon={faGooglePay} className="payment-icon" />
                            <FontAwesomeIcon icon={faCcApplePay} className="payment-icon" />
                            <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
                    </div><hr className="hr-footer" />

                </div>
            </div>
            <p id="copyright"> Copyright &copy; 2023 mettamuse. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
