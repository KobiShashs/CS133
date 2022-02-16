import moment from "moment";
import "./ILTime.css";
interface ILTimeProps{
    date:Date;
}
function ILTime(props:ILTimeProps): JSX.Element {
    return (
        <div className="ILTime">
			<p> {moment(props.date).format('DD/MM/YYYY')} </p>
        </div>
    );
}

export default ILTime;
