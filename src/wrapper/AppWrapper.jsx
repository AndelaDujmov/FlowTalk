import App from '../App.jsx'
import NavBar from '../components/MainMenu/NavBar/navBar.jsx'
import { ThemeProvider } from '@emotion/react'
import { useEffect, useState } from 'react'
import theme from '../variables/theme.js'
import { BrowserRouter } from 'react-router-dom'

const AppWrapper = () => {

    const [mode, setMode] = useState("light");
    const currentTheme = mode === "light" ? theme.light : theme.dark;

    useEffect(() => {
        document.body.style.backgroundColor = mode === "light" ? "white" : "#282c34";
        document.body.style.color = mode === "light" ? "black" : "white";
    }, [mode])

    return (     
        <div
        style={{
            backgroundColor: mode === "light" ? "white" : "#282c34",
            color: mode === "light" ? "black" : "white", 
            transition: "background-color 0.3s, color 0.3s", 
            
        }}>
             <BrowserRouter>
            <ThemeProvider theme={currentTheme}>
                <NavBar mode={mode} setMode={setMode}/>
                <App/>
            </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default AppWrapper