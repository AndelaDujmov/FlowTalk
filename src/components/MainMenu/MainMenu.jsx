import { useEffect, useState } from "react"
import AcceptButton from "../Buttons/AcceptButton"

const MainMenu = (userType) => {
    const [color, setColor] = useState("blue")
    const [visited, isVisited] = useState(false)

    const changeVisited = () => {
        isVisited(true)
      }
    
      useEffect(() => {
        if (visited)
          setColor("purple")
      }, [visited])
    

    return (
        <div>
            <AcceptButton value="Start The Chat" color={color} action={changeVisited}/>
        </div>
    )
}

export default MainMenu