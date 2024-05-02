import { Container } from "./styles";

export function Button({icon: Icon, text, ...rest}) {
    return (
        <Container {...rest}>
            {Icon && <Icon size={20}/>}
            { text }
        </Container>
    )
}