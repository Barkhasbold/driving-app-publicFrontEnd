import PropTypes from 'prop-types';

const AdviceMain = (props) => (
    <div id="adviceContent" style={props.timeout ? {display: 'none'} : {}}>

            <div id="advice">
                <div className="adviceImage">
                    <span className="image main"><img src="/static/images/advice.jpg" className="advice_image" alt="" /></span>
                </div>
                <div className="adviceDesc">
                    <h3>ШӨНӨ ХЭРХЭН АЮУЛГҮЙ МАШИН БАРИХ ВЭ???</h3>
                    <p>Муу явдаг машин гэж байдаггүй харин муу жолооддог жолооч гэж байдаг. Автомашин барих тэр дундаа шөнө автомашин барих маш хэцүү ба шөнө харанхуй болсон үед аваар осол гарах нь хүртэл их байдаг...</p>
                    <button><a  onClick={() => {props.onOpenArticle('advice1')}}>Дэлгэрэнгүй</a></button>
                </div>
            </div>
        
    </div>
)

AdviceMain.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default AdviceMain
