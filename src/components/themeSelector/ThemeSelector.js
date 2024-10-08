import { useTheme } from '../../hooks/useTheme'
import './ThemeSelector.css'
import modeIcon from '../../assets/modeIcon.svg'

const themeColors = ['rgba(66, 182, 66, 0.904)' , 'rgba(31, 26, 102, 0.904)' , 'rgba(211, 56, 9, 0.904)']

export default function ThemeSelector() {

    const {changeColor , changeMode , mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className='theme-selector'>
        <div className="mode-toggle">
            <img 
                onClick={toggleMode}
                src={modeIcon}
                style={{filter : mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
            />
        </div>
      <div className="theme-btns">
        {themeColors.map(color =>(
            <div
             key={color}
             onClick={()=> changeColor(color)}
             style={{background: color}}
            ></div>
        ))}
      </div>
    </div>
  )
}
