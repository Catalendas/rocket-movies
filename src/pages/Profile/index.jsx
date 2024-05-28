import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/authHook";
import { useState } from "react";
import { api } from "../../service/api";

import avatarPlaceholder from "../../assets/image-placeholder.svg"

export function Profile() {

    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const [avatar, setAvatar] = useState(user.avatar)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const update = {
            name,
            email,
            old_password: oldPassword,
            password: password,
        }

        const userUpdated = await Object.assign(user, update)

        await updateProfile(userUpdated, avatarFile )
    }

    function handleChangeAvatar(event) {
        const [file] = event.target.files
        setAvatarFile(file)
        
        const avatarPreview = URL.createObjectURL(file)
        setAvatar(avatarPreview)
    }

    return (
        <Container>
            <header>
                <Link to={-1}>
                    <FiArrowLeft size={20}/> Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatarUrl} alt={name} />

                    <label htmlFor="avatar">
                        <FiCamera size={20}/>

                        <input type="file" id="avatar" accept="image/png, image/jpeg" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                
                <div>
                    <Input 
                        type="text"
                        placeholder="Nome"
                        icon={FiUser}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input 
                        type="text"
                        placeholder="E-mail"
                        icon={FiMail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div>
                    <Input 
                        type="password"
                        placeholder="Senha atual"
                        icon={FiLock}
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />

                    <Input 
                        type="password"
                        placeholder="Nova senha"
                        icon={FiLock}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button text="Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}