import PropTypes from 'prop-types';


const NewsMain = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Мэдээ мэдээлэл</h1>
                <p>Мэдээ мэдээлэл бүхий контент</p>
            </div>
        </div>
        <div className="content">
            <div className="inner">
            <nav>
            <ul>
                <li><a href="/news/post" onClick={() => {props.onOpenArticle('')}}>Зарлал мэдээлэл</a></li>
                <li><a href="news/advice" onClick={() => {props.onOpenArticle('')}}>Зөвлөмж зөвөлгөө</a></li>
                <li><a href="/news/legal" onClick={() => {props.onOpenArticle('')}}>Хууль эрх зүй</a></li>
            </ul>
        </nav>
            </div>
        </div>
        
        
    </header>
)

NewsMain.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default NewsMain
