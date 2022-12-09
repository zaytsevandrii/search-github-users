import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Repos from "./Repos"
import "./App.scss"

function App() {
    const ref = useRef()
    const [text, setText] = useState("")
    const [user, setUser] = useState()
    const [repos, setRepos] = useState()
    const [userEx, setUserEx] = useState(false)
    const [reposEx, setReposEx] = useState(false)

    const APIURL = "https://api.github.com/users/"
    const getUser = async (userName) => {
        try {
            setUserEx(false)
            const { data } = await axios(APIURL + userName)
            setUser(data)
        } catch (err) {
            setUser("")
            if (err.response.status === 404) {
                setUserEx(true)
            }
        }
    }
    const getRepos = async (userName) => {
        try {
            const { data } = await axios(APIURL + userName + "/repos")
            setRepos(data)
            setReposEx(true)
        } catch (err) {
            setUser("")
            if (err.response.status === 404) {
                setReposEx(false)
            }
        }
    }

    /*  useEffect(()=>{
    getUser('bradtraversy')
  },[]) */

    const findUser = (e) => {
        e.preventDefault()

        if (text) {
            getUser(text)
            getRepos(text)
        }
    }
    return (
        <>
            <form className="user-form" onSubmit={findUser}>
                <input type="text" id="search" placeholder="Search a Github user" onChange={(e) => setText(e.target.value)} />
            </form>
            {userEx && (
                <main>
                    <div className="card">
                        <h1>No profile with this username</h1>
                    </div>
                </main>
            )}
            {user && (
                <main ref={ref} id="main">
                    <div className="card">
                        <div>
                            <img src={user.avatar_url} className="avatar" alt={user.name} />
                        </div>
                        <div className="user-info">
                            <h2>{user.name}</h2>
                            <p>{user.bio}</p>

                            <ul>
                                <li>
                                    {user.followers} <strong>Followers</strong>
                                </li>
                                <li>
                                    {user.following} <strong>Following</strong>
                                </li>
                                <li>
                                    {user.public_repos} <strong>Repos</strong>
                                </li>
                            </ul>

                            {reposEx && (
                                <div id="repos">
                                    {repos.map(rep=>(
                                      <Repos key={rep.name} name={rep.name} url={rep.html_url}/>
                                    )).slice(0, 20)}
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}

export default App
