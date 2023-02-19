import { Link } from "react-router-dom"
const LandingPage = () => {
    return (
        <div>
            <h1> GAMES PAGE</h1>
            <Link to="/home">
                <button>HOME</button>
            </Link>
        </div>
    )
}

export default LandingPage