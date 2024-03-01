import { Link } from "react-router-dom";

const PrimaryButton = ({ thisPath, NamaButton }) => {
    return (
        <Link to={thisPath} className="button is-dark">
            {NamaButton}
        </Link>

    )
}
export default PrimaryButton