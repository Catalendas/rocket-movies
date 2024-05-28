import { Button, Container } from "./style";

export function Tag({ icon: Icon, text, isNew,  onclick,...rest}) {
    return (
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={text}
                readOnly={!isNew}
                {...rest}
            />

            <Button 
                onClick={onclick}
                type="button"
            >
                {Icon && <Icon size={20}/>}
            </Button>
        </Container>
    )
}