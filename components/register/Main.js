import PropTypes from 'prop-types';



class Main extends React.Component {
  render() {

    let close = <a className="close" href="/course" onClick={() => {this.props.onCloseArticle()}}></a>

    return (
      
      <div id="main" >

        <article id="login">
          <h2 className="major">Бүртгүүлэх</h2>
          <form method="post" action="#">
            <div className="field">
              <label htmlFor="name">Таны нэр</label>
              <input type="text" name="name" id="name" />
            </div>
            
            <div className="field">
              <label htmlFor="name">Таны овог</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="name">Таны регистрийн дугаар</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="name">Таны утасны дугаар</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Таны цахим шуудан</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Таны нууц үг</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="field">
              <label htmlFor="message">Нууц үгийг дахин давтана уу</label>
              <input type="password" name="password" id="password" />
            </div>
            
            <ul className="actions">
              <li><input type="submit" value="Бүртгүүлэх" className="special" /></li>
            </ul>
          </form>
          {close}
        </article>
      </div>
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