import Head from "next/head"
import stylesheet from 'styles/advice/main.scss'

import Header from "../../components/course/Header"
import AdviceMain from "../../components/news/content/advice/adviceMain"
import Main from "../../components/news/content/advice/Main"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading"
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
    }

    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: !this.state.isArticleVisible,
            article
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                articleTimeout: !this.state.articleTimeout
            })
        }, 350)
    }

    handleCloseArticle() {
        this.setState({
            articleTimeout: !this.state.articleTimeout
        })

        setTimeout(() => {
            this.setState({
                timeout: !this.state.timeout
            })
        }, 325)

        setTimeout(() => {
            this.setState({
                isArticleVisible: !this.state.isArticleVisible,
                article: ""
            })
        }, 350)
    }
    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? "is-article-visible" : ""}`}>
                <div>
                    <Head>
                        <title>Driving app</title>
                        {/* <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" /> */}
                    </Head>

                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                    <AdviceMain onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                    <div id="wrapper">
                        
                        <Main
                            isArticleVisible={this.state.isArticleVisible}
                            timeout={this.state.timeout}
                            articleTimeout={this.state.articleTimeout}
                            article={this.state.article}
                            onCloseArticle={this.handleCloseArticle}
                        />

                    </div>
                    <div>
                        
                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default IndexPage
