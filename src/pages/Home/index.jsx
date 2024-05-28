import { FiPlus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Cards, Container, Title } from "./styles";

import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { useAuth } from "../../hooks/authHook";

export function Home() {

    const { movies, getAll } = useAuth()
    
    useEffect(() => {
        getAll("")
    }, [])

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
               {movies && movies.map((card) => (
                    <Card 
                        key={card.id}
                        to={`/preview/${card.id}`}
                        title={card.title}
                        description={card.description}
                        ratings={card.rating}
                        tags={card.tags}
                    />
               ))}
            </Cards>
        </Container>
    )
}