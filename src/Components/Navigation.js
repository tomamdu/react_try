import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    
    return (

        <nav>
            <span>
                <FontAwesomeIcon
                    icon={faBars}
                />
            </span>
        </nav>

    )
}

export default Navigation;