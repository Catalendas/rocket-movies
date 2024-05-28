import { Container, Tag } from "./styles";
import { Header } from "../../components/Header"
import { Back } from "../../components/Back";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/authHook";

import avatarPlaceholder from "../../assets/image-placeholder.svg"

export function Preview() {
    const { id } = useParams()

    const { user } = useAuth()

    const [data, setData] = useState({})
    const [tags, setTags] = useState([])
    const [rating, setRating] = useState([])

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    function calculateRating(rating) {
        const ratingArr = []

        for(var i = 0; i <= 4; i++) {
            if (i <= rating) {
                ratingArr.push(true)
            } else {
                ratingArr.push(false)
            }

        }

        setRating(ratingArr)
    }

    useEffect(() => {
        async function getNote() {
            const response = await api.get(`/movies_note/${id}`)
            setData(response.data[0])
            setTags(response.data.movieTags)
            calculateRating(response.data[0].rating)
        }

        getNote()
    }, [])

    return (
        <Container>
            <Header />

            <Back />

            <div>
                <div>
                    <h2>{data.title}</h2>
                    <span>
                    {rating.map((star, index) => {
                        if(star) {
                            return <FaStar size={20} key={index}/>
                        } else {
                            return <FaRegStar size={20} key={index}/>
                        }
                    })}
                    </span>
                </div>

                <div>
                    <div>
                        <img src={avatarUrl} alt={user.name} />
                        <span>Por {user.name}</span>
                    </div>
                    <div>
                        <FiClock size={20}/>
                        {new Date(data.created_at).toLocaleString()}
                    </div>
                </div>

                <div>
                    {tags && tags.map((tag, index) => (
                        <Tag key={index}>
                            {tag.name}
                        </Tag>
                    ))}
                </div>

                <p>{data.description}</p>
            </div>
        </Container>
    )
}