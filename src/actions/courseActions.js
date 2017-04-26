import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
//action creator
export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    };
    //would be course: course but in ES6 if the right hand side matches the left hand side, can omit
}

export function loadCourses(){
    return function(dispatch){
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw error;
        });
    };
}
