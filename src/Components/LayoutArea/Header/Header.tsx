import "./Header.css";
import { FaCloudSun, FaFileInvoiceDollar } from "react-icons/fa";
import AuthMenu from "../../UsersArea/AuthMenu/AuthMenu";
function Header(): JSX.Element {
    return (
        <div className="Header">
            <FaFileInvoiceDollar/>
			<h1>Coupon System</h1>
            {/* <FaCloudSun/> */}
            <AuthMenu/>
        </div>
    );
}

export default Header;
