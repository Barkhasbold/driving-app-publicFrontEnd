import Head from "next/head"
import stylesheet from 'styles/course/main.scss'

import Header from "../components/course/Header"
import Main from "../components/course/Main"
import NewsMain from "../components/news/newsMain"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",
            posts: []
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
                    <NewsMain onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                    {/* <Post onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                    <Legal onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                    <Advice onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} /> */}
                    
                    <div id="wrapper">
                        
                        <Main
                            courses={[]}
                            posts={[]}
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
