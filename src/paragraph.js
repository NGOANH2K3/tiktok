import { useContext } from 'react'
import {ThemeContext} from './themeContext'

function Paragraph() {

    const context = useContext(ThemeContext)

    return(
        <p className={context.theme}>
            Học để đi làm kiếm tiền!
        </p>
    )
}

export default Paragraph