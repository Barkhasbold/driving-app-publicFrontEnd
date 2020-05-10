import Head from "next/head"
import stylesheet from 'styles/course/main.scss'
import axios from 'axios';

import Header from "../components/course/Header"
import CourseInformation from "../components/course/courses/CourseInformation"
import Main from "../components/course/Main"


class CoursePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: "",
            loading: "is-loading",
            courses: []
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: "" })
        }, 100)

        axios.post('https://driving-app-graphql.herokuapp.com/graphql', {"operationName":"courses","variables":{},"query":"query courses {\n  courses {\n    _id\n    name\n    description\n    image\n  }\n}\n"})
        .then(res=>this.setState({courses: res.data.data.courses}));
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
                    {this.state.courses? <>
                        <CourseInformation courses={this.state.courses} onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
                        <div id="wrapper">

                            <Main
                                posts={[]}
                                courses={this.state.courses}
                                isArticleVisible={this.state.isArticleVisible}
                                timeout={this.state.timeout}
                                articleTimeout={this.state.articleTimeout}
                                article={this.state.article}
                                onCloseArticle={this.handleCloseArticle}
                            />

                        </div>
                    </>: ""}
                    
                    <div>

                    </div>

                    <div id="bg" />
                </div>
            </div>
        )
    }
}

export default CoursePage