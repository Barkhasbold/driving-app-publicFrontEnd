import Link from 'next/link';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-regular/faUser'

const Header = (props) => (
    <>
    <div className="login_icon">
            <Link href="http://localhost:3000/login">
                <a>
                    <FontAwesomeIcon icon={faUser} />
                </a>
            </Link>
        </div>
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">      
            {/*<span className="icon fa-diamond"></span>*/}
            {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
            <span className="image main"><img className="logo_benz" src="/static/images/Benz_logo.png" alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>UB Drive</h1>javascript
                <p>Ухаалаг шийдлээр таны цагийг хэмнэнэ.</p>
                <button><a onClick={() => {props.onOpenArticle('intro')}}>Дэлгэрэнгүй</a></button>
            </div>
        </div>
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
