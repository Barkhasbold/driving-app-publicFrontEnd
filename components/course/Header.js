import Link from 'next/link';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-regular/faUser'

const Header = (props) => (
    <>
    <div className="icons">
        <Link href="http://localhost:3000/login">
            <a>
            <FontAwesomeIcon icon={faUser} />
            </a>
        </Link>
    </div>
    <header id="header" style={props.timeout ? {} : {}}>
        
        <nav>
            <ul>
                <li><Link href="/course"><a>Жолооны курс</a></Link></li>
                <li><a onClick={() => {props.onOpenArticle('answer')}}>Асуулт хариулт</a></li>
                <li><Link href="/news"><a>Мэдээ мэдээлэл</a></Link></li>
                <li><a onClick={() => {props.onOpenArticle('use')}}>Хэрхэн ашиглах</a></li>
                <li><a onClick={() => {props.onOpenArticle('contact')}}>Бидэнтэй холбогдох</a></li>
            </ul>
        </nav>
    </header>
    </>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
