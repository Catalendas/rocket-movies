import { FiArrowLeft } from "react-icons/fi";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Back({ text = "Voltar", href, ...rest}) {
    return (
        <Container>
            <Link to="/"><FiArrowLeft size={20}/> {text}</Link>
        </Container>
    )
}