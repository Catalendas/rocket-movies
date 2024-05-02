import { FiPlus, FiX } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Form  } from "./styles";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Back } from "../../components/Back";

export function Create() {
    return (
        <>
            <Header />

            <Back />

            <Form>
                <h2>Novo filme</h2>

                <div>
                    <Input placeholder="Titulo"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <Textarea placeholder="Observações"/>

                <div>
                    <h3>Marcadores</h3>

                    <div>
                        <Tag text="React" icon={FiX} className="tags"/>
                        <Tag text="Novo marcador" icon={FiPlus} className="tags-new"/>
                    </div>
                </div>

                <div>
                    <Button text="Excluir filme" className="delete-button"/>
                    <Button text="Salvar alteração"/>
                </div>
            </Form>
        </>
    )
}