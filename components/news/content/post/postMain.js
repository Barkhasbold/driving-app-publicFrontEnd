import PropTypes from 'prop-types';

const PostMain = (props) => {
    return (
        <div id="postContent" style={props.timeout ? {display: 'none'} : {}}>
            {props.posts.map(post => (
                <div key={post._id} id="post">
                    <div className="postImage">
                        <span className="image main"><img src={post.image} alt="" /></span>
                    </div>
                    <div className="postDesc">
                        <h3>{post.title}</h3>
                        <p>{post.description.substring(0, 20) + '...'}</p>
                        <button><a  onClick={() => {props.onOpenArticle(post._id)}}>Дэлгэрэнгүй</a></button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

PostMain.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default PostMain
