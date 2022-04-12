import { Link } from "react-router-dom";
import errorImage from "assets/images/error-404.jpg";

export const ErrorComponent = ({ id }) => {
    return (
        <div className="error-component">
            <div>
                <h1>Movie with ID *{id}* does not exist</h1>
                <h2>Return to <Link to="/">home page</Link></h2>
            </div>
            <img src={errorImage} alt="" />
        </div>
    )
}

export default ErrorComponent;