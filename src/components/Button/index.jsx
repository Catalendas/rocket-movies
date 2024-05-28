import { Container } from "./styles";

export function Button({icon: Icon, text, ...rest}) {
    return (
        <Container
            type="button" 
            {...rest}
        >
            {Icon && <Icon size={20}/>}
            { text }
        </Container>
    )
}