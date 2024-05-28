import { useHref, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHook";
import { Input } from "../Input";
import { Container, LogOut, Profile } from "./styles";
import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/image-placeholder.svg"

export function Header() {

    const { user, sinOut, getAll } = useAuth()

    const navigate = useNavigate()
    const href = useHref()
    
    function handleSinOut() {
        navigate("/")
        sinOut()
    }

    function handleSearch(title) {

        if (href.startsWith("/preview/")) {
            navigate("/")
        }
        getAll(title)
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return (
        <Container>
            <h3>RocketMovies</h3>

            <form>
                <Input 
                    placeholder="Pesquisar pelo titulo" 
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </form>

            <Profile to="/profile">
                <div>
                    <p>{user.name}</p>
                    <LogOut onClick={handleSinOut}>Sair</LogOut>
                </div>

                <img src={avatarUrl} alt={user.name} />
            </Profile>
        </Container>
    )
}