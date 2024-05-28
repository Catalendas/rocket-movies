import { useEffect, useState } from "react";
import { Container, Tag } from "./styles";
import { FaRegStar, FaStar } from "react-icons/fa";

export function Card({ title, description, ratings, tags, ...rest }) {

    const [rating, setRating] = useState([])

    function calculateRating() {
        const ratingArr = []

        for(var i = 0; i <= 4; i++) {
            if (i <= ratings) {
                ratingArr.push(true)
            } else {
                ratingArr.push(false)
            }

        }

        setRating(ratingArr)
    }

    useEffect(() => {
        calculateRating()
    }, [])

    return (
        <Container {...rest}>
            <div>
                <h3>{title}</h3>
                <span>
                    {rating.map((star, index) => {
                        if(star) {
                            return <FaStar size={10} key={index}/>
                        } else {
                            return <FaRegStar size={10} key={index}/>
                        }
                    })}
                </span>
            </div>

            <p>{description}</p>

            <div>
                { tags && tags.map((tag) => (
                    <Tag key={tag.id}>{tag.name}</Tag>
                ))}
                {/* <Tag text="Ficção cientifica" />
                <Tag text="Drama" />
                <Tag text="Familia" /> */}
            </div>
        </Container>
    )
}