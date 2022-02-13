import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>Ofir Abraham</p>

            <div>
                <FaGithub/>
                <FaTwitter/>
                <FaLinkedin/>
            </div>
        </div>
    );
}

export default Footer;
