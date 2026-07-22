import React from "react";

function CourseDetails(props) {

    const coursedet = (
        <ul>
            {props.courses.map((course) => (
                <div key={course.id}>
                    <h2>{course.cname}</h2>
                    <h4>{course.date}</h4>
                </div>
            ))}
        </ul>
    );

    return (
        <div className="mystyle1">
            <h1>Course Details</h1>
            {coursedet}
        </div>
    );
}

export default CourseDetails;