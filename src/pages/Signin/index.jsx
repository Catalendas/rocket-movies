import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container, Form, Title } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/authHook";
import { useState } from "react";

export function Signin() {

    const { signIn } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSiginIn() {

        if (!email || !password) {
            alert("Preencha todos os campos")
        }

        await signIn({email, password})
    }

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
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input 
                            type="password"
                            placeholder="Senha"
                            icon={FiLock}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button text="Entrar" onClick={handleSiginIn}/>

                    
                </Form>

                <Link to="/signup">
                    Criar Conta
                </Link>
            </div>

            
            <img src="cinema.png" alt="Cinema" />
            
        </Container>
    )
}