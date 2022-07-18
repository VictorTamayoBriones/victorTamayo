import { Logo } from "../../styled-components/Logo"
import { Head } from "./style"

export const Header = () => {
    return(
        <Head>
            <Logo/>
            <div>
                <h1>Víctor Tamayo</h1>
                <nav>
                    <a href="">Home</a>
                    <a href="">Projects</a>
                    <a href="">About</a>
                </nav>
            </div>
        </Head>
    )
}