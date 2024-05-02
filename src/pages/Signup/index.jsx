import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container, Form, Title } from "./styles";
import { Button } from "../../components/Button";

export function Signup() {
    return (
        <Container>
            <div>
                <Title>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </Title>

                <Form>
                    <h3>Crie sua conta</h3>

                    <div>

                        <Input 
                            type="text"
                            placeholder="Nome"
                            icon={FiUser}
                        />

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

                    <Button text="Cadastrar"/>

                    
                </Form>

                <a href="">
                    <FiArrowLeft size={20}/> Voltar para login
                </a>
            </div>

            
            <img src="cinema.png" alt="Cinema" />
            
        </Container>
    )
}