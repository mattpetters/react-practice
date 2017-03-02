//action creator
export function createCourse(course){
    return {type: 'CREATE_COURSE', course};
    //would be course: course but in ES6 if the right hand side matches the left hand side, can omit
}