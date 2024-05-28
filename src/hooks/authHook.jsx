import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";

const AuthContext = createContext({})

function AuthProvider({ children }) {

    const [ data, setData ] = useState({})
    const [movies, setMovies] = useState([])

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            setData({user, token})
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel conectar")
            }
        }

    }

    function sinOut() {
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }

    async function updateProfile(user, avatarFile) {

        try {

            if (avatarFile) {
                const form = new FormData()
                form.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", form)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            setData({ user, token: data.token})
            return alert("Dados alterados com sucesso.")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possivel atulizar os dados")
            }
        }
    }

    async function getAll(title) {
        const response = await api.get(`/movies_note?user_id=${data.user.id}&title=${title}`)
        setMovies(response.data)
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketmovies:token")
        const user = localStorage.getItem("@rocketmovies:user")

        if (token && user) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setData({ user: JSON.parse(user), token})
        }
        
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signIn,
                user: data.user,
                sinOut,
                updateProfile,
                getAll,
                movies
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const hook = useContext(AuthContext)
    return hook
}


export { AuthProvider, useAuth }