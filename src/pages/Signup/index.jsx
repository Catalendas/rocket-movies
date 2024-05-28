import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container, Form, Title } from "./styles";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../service/api";

export function Signup() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleRegister() {
        if(!name || !email || !password) {
            alert("Preencha todos os campos")
        }

        api.post("/users", {name, email, password})
            .then(() => {
                alert("Usuario cadastrado com sucesso.")
                navigate("/")
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possivel registrar o usuario.")
                }
            } )
    }

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
                            onChange={(e) => setName(e.target.value)}
                        />

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

                    <Button text="Cadastrar" onClick={handleRegister}/>

                    
                </Form>

                <Link to="/">
                    <FiArrowLeft size={20}/> Voltar para login
                </Link>
            </div>

            
            <img src="cinema.png" alt="Cinema" />
            
        </Container>
    )
}