import * as types from './actionTypes';
//action creator
export function createCourse(course) {
    //this is our action
    return {
        type: types.CREATE_COURSE,
        course
    };
    //would be course: course but in ES6 if the right hand side matches the left hand side, can omit
}
