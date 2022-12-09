import React from "react"
import "./App.scss"

const Repos = ({name,url}) => {
    return (
        <>
            <a href={url} className="repo" target='_blank'>
                {name}
            </a>
        </>
    )
}

export default Repos
