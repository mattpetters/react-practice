import React, {
    PropTypes
} from 'react';
import {
    connect
} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        //setting local state
        this.state = {
            course: {
                title: ""
            }
        };

        //doing a bind here is better than binding in render()
        // because a new bind() would get created for every rerender
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course; //react doesn't autobind in ES6 classes
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>; 
    }

    render() {
        return (<div>
            <h1> Courses </h1> 
            {this.props.courses.map(this.courseRow)}
            <h2> Add Course </h2> 
            <input type = "text" onChange={this.onTitleChange} value={this.state.course.title}/> 
            <input type = "submit" value = "Save" onClick = {this.onClickSave}/> 
            </div>);
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }; //comes from root reducer, aliasing courseReducer
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage); //connect returns a function
