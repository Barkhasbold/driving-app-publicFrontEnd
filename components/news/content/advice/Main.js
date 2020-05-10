import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <>
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Бидний тухай</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>Энэхүү веб аппликейшн нь Улаанбаатар хотын авто жолооны дамжаануудыг нэгтгэсэн бүртгэл болон онлайн сургалтыг хослуулсан цогц веб аппликешн юм. Хэрэв та хүсвэл онлайн дүрмийн сургалтад суралцах боломжтой. Мөн тэнхимийн сургалтад суралцах боломжтой юм.</p>
          {close}
        </article>

        <article id="answer" className={`${this.props.article === 'answer' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Түгээмэл асуулт хариулт</h2>
            <Collapsible trigger="1. Онлайн сургалтад дүрмийн хичээлээ үзээд дромдоо яаж гарах вэ?">
            
              <p>Сайн байна уу! Та онлайнаар өөрийн сонгосон жолооны дамжааны багштайгаа ярилцан дромд гарах боломжтой. Хуваарийг календарь хэсгээс харж болно.</p>
              </Collapsible>
          
          <Collapsible trigger="2. Хэрхэн жолооны дамжаанд бүртгүүлэх вэ?">
        <p>Хэрэглэгч та манай веб сайтад бүртгүүлсний дараагаар сонгосон жолооны дамжаандаа бүртгүүлэх боломжтой. Та өөрийн мэдээллийг оруулан бүртгүүлэх боломжтой.</p>
        
      </Collapsible>
          {close}
        </article>

        <article id="news" className={`${this.props.article === 'news' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Мэдээ мэдээлэл</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>.</p>
          {close}
        </article>

        <article id="use" className={`${this.props.article === 'use' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Хэрхэн ашиглах</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>.</p>
          {close}
        </article>
        <article id="advice1" className={`${this.props.article === 'advice1' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">ШӨНӨ МАШИН БАРИХ</h2>
          <span className="image main"><img src="/static/images/advice.jpg" alt="" /></span>
          <p>Муу явдаг машин гэж байдаггүй харин муу жолооддог жолооч гэж байдаг. Автомашин барих тэр дундаа шөнө автомашин барих маш хэцүү ба шөнө харанхуй болсон үед аваар осол гарах нь хүртэл их байдаг. Энэ нь гэрэл муутай ба өнгө ялгах чадвар мууддаг зэргээс болдог байна.</p>
          <p>1. Та орой бүрэнхий болохоос өмнө машиныхаа гэрлийг асаах хэрэгтэй ба өглөө гэгээ цайхаас өмнө машин харагддаг болох хүртэл гэрлээ асаах хэрэгтэй байдаг.</p>
          <p>2. Шөнө юм сайн харахын тулд урд талыхаа цонхыг сайтар арчих хэрэгтэй.</p>
          <span className="image main"><img src="/static/images/advice2.jpg" alt="" /></span>
          <p>3. Мэдээж согтууруулах ундаа хэрэглэсэн үед машин жолоодож болохгүй. Хичнээн ганц пиво уугаад танд нөлөөлөхгүй байгаа ч энэ нь таны нойрыг маш их хүргэдэг. Нойр хүрнэ гэдэг осол гарах том шалтгаан болдог.</p>
          <span className="image main"><img src="/static/images/advice3.jpg" alt="" /></span>
          <p>4. Амралтын өдрүүд болон баасан гаригын орой машин барихдаа илүү болгоомжтой байх хэрэгтэй байдаг. Яагаад гэвэл ихэнх согтуугаас болсон осол аваарууд энэ өдрүүдэд гарсан байдаг.</p>
          <span className="image main"><img src="/static/images/advice4.jpg" alt="" /></span>
          <p>5. Оройн цагаар машин барихдаа та урдах машинаасаа зайгаа сайн барьж аль болох хол явах хэрэгтэй. Шөнө өмнөх машин болон таны машин 2-ын хоорондын зайг хэмжихэд маш хэцүү байдаг.</p>
          <span className="image main"><img src="/static/images/advice5.jpg" alt="" /></span>
          <p>6. Манай жолооч нар ихэнхдээ ойрын гэрэл болон холын гэрлээ тохируулах дүрмийг сайн мэддэггүй ба хэрэгжүүлдэггүй учир урдаас ирж буй машинд хүндрэл учруулсанаар осол их гардаг. Тиймээс та энэ байдлаас өөрийгөө аврахын тулд та замын баруун захад нүдээ төвлөрүүлж явах хэрэгтэй . Мөн урд тань ямар ч машин байхгүй тохиолдолд та холын гэрлээ тавьж явааарай. Энэ нь танд зам болон орчныг харах сайн нөхцөл бүрдүүлж өгөх болно.</p>
          <span className="image main"><img src="/static/images/advice6.jpg" alt="" /></span>
          <p>7. 13. Шөнө машин барихдаа ямар нэг нарны шил зүүж болохгүй.</p>
          <span className="image main"><img src="/static/images/advice7.jpg" alt="" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Бидэнтэй холбогдох</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Нэр</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Цахим шуудан</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Мессеж</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Илгээх" className="special" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>
        <article id="login" className={`${this.props.article === 'login' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Нэвтрэх</h2>
          <form method="post" action="#">
            <div className="field">
              <label htmlFor="name">Утасны дугаар</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Цахим шуудан</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Нууц үг</label>
              <input type="password" name="email" id="email" />
            </div>
            <ul className="actions">
              <li><input type="submit" value="Нэвтрэх" className="special" /></li>
            </ul>
          </form>
          {close}
        </article>
      </div>
      </>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main