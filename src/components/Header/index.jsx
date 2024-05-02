import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container>
            <h3>RocketMovies</h3>

            <form>
                <Input placeholder="Pesquisar pelo titulo" />
            </form>

            <Profile to="/profile">
                <div>
                    <p>Marcos alexandre</p>
                    <a href="#">Sair</a>
                </div>

                <img src="https://github.com/catalendas.png" alt="Foto do usuario" />
            </Profile>
        </Container>
    )
}