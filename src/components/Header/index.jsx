import { Link } from "react-router-dom"
import { Logo } from "../../styled-components/Logo"
import { Head } from "./style"

export const Header = () => {
    return(
        <Head>
            <Logo/>
            <div>
                <Link to="/"><h1>Víctor Tamayo</h1></Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </nav>
            </div>
        </Head>
    )
}