import '../styles/DarkButton.css'
import { useTheme } from '../storage/ThemeContext.jsx'

function DarkButton() {
    const { theme, toggleTheme } = useTheme()
    const darkMode = e => toggleTheme()

    return (
        <>
            <input id="toggle" name="toggle" type="checkbox" onChange={darkMode} />
            <label htmlFor="toggle">
                <div className="containerDarkMode">
                    <div className="circle">
                        <div className="images">
                            <img className="moon" src="./icons/moon.png" />
                            <img className="sun" src="./icons/sun.png" />
                        </div>
                    </div>
                </div>
            </label>
        </>
    )
}

export default DarkButton