import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Cards, Container, Title } from "./styles";

import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <Container>
            <Header/>

            <Title>
                <h2>Meus filmes</h2>
                <Link to="/create">
                    <Button 
                        icon={FiPlus}
                        text="Adicionar filme"
                        className="button-size"
                    />
                </Link>
            </Title>

            <Cards>
               <Card to="/preview/1"/>
               <Card />
               <Card />
               <Card />
               <Card />
            </Cards>
        </Container>
    )
}