import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft size={20}/> Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/catalendas.png" alt="foto do usuario" />

                    <label htmlFor="avatar">
                        <FiCamera size={20}/>

                        <input type="file" id="avatar" accept="image/png, image/jpeg"/>
                    </label>
                </Avatar>

                
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
                </div>
                
                <div>
                    <Input 
                        type="password"
                        placeholder="Senha atual"
                        icon={FiLock}
                    />

                    <Input 
                        type="password"
                        placeholder="Nova senha"
                        icon={FiLock}
                    />
                </div>
                

                <Button text="Salvar" disabled={true}/>
            </Form>
        </Container>
    )
}