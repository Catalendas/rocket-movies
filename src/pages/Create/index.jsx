import { FiPlus, FiX } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Form, Tags  } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Back } from "../../components/Back";
import { useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function Create() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState(0)

    const [observation, setObservation] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddTag() {
        if (!newTag) {
            return alert("Adicione uma Tag")
        }

        setNewTag("")
        setTags(prevState => [...prevState, newTag])
    }

    function handleRemoveTag(remove) {
        const filteredTags = tags.filter(tag => tag !== remove)
        setTags(filteredTags)
    }

    async function handleAddNote() {
        if (rating > 5 || rating < 0) {
            return alert("Insira uma avaliação de 0 a 5")
        }

        try {
            const response = await api.post("/movies_note", {title, rating, description: observation, tags})

            alert("Filme cadastrado")
            navigate(-1)
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel cadastrar filme")
            }
        }
    }

    return (
        <>
            <Header />

            <Back />

            <Form>
                <h2>Novo filme</h2>

                <div>
                    <Input 
                        placeholder="Titulo" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <Input 
                        placeholder="Sua nota (de 0 a 5)" 
                        value={rating} 
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>

                <Textarea 
                    placeholder="Observações"
                    onChange={(e) => setObservation(e.target.value)}
                />

                <div>
                    <h3>Marcadores</h3>

                    <Tags>
                        {tags && tags.map((tag) => (
                            <Tag 
                                text={tag} 
                                icon={FiX} 
                                className="tags"
                                onclick={(e) => handleRemoveTag(tag)}
                            />
                        ))}

                        <Tag 
                            placeholder="Novo marcador" 
                            onclick={handleAddTag} 
                            text={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            icon={FiPlus} 
                            isNew 
                            className="tags-new" 
                        />
                    </Tags>
                </div>

                <div>
                    <Button text="Excluir filme" className="delete-button"/>
                    <Button text="Salvar alteração" onClick={handleAddNote}/>
                </div>
            </Form>
        </>
    )
}