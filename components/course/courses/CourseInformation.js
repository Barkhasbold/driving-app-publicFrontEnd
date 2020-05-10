import PropTypes from 'prop-types';

const CourseInformation = (props) => {

    console.log(props.courses)
    let courses = props.courses ? props.courses : [];

    return (
        <>
            <div className="container" style={props.timeout ? {display: 'none'} : {}}>
            {
                    courses.map(course => 
                        <div key={course._id} className="courseContent">
                            <span className="image main"><img src={course.image} alt="" height="100" width="500"/></span>
                            <h3>{course.name}</h3>
                            <button><a onClick={() => {props.onOpenArticle(course._id)}}>Дэлгэрэнгүй</a></button>
                        </div>
                    )
                }
            </div>
        </>
    )
}


CourseInformation.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default CourseInformation;
