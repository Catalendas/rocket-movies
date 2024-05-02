import { Container } from "./style";

export function Tag({ icon: Icon, text, ...rest}) {
    return (
        <Container {...rest}>
            {text}
            {Icon && <Icon size={20}/>}
        </Container>
    )
}