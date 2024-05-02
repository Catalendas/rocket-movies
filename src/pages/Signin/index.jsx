import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container, Form, Title } from "./styles";
import { Button } from "../../components/Button";

export function Signin() {
    return (
        <Container>
            <div>
                <Title>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </Title>

                <Form>
                    <h3>Faça seu login</h3>

                    <div>
                        <Input 
                            type="text"
                            placeholder="E-mail"
                            icon={FiMail}
                        />

                        <Input 
                            type="password"
                            placeholder="Senha"
                            icon={FiLock}
                        />
                    </div>

                    <Button text="Entrar"/>

                    
                </Form>

                <a href="">
                    Criar Conta
                </a>
            </div>

            
            <img src="cinema.png" alt="Cinema" />
            
        </Container>
    )
}