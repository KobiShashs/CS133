import "./Logout.css";

function Logout(): JSX.Element {
    return (
        <div className="Logout">
			<p>Are you sure you want to logout?</p>
            <button>Yes</button>
            <button>No</button>
        </div>
    );
}

export default Logout;
