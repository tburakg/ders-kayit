import React from "react";

import "./StudentLessonList.css";

const StudentLessonItem = (props) => {
  const { lesson, onClick, isAdd } = props;

  return (
    <div className="lesson-item">
      <div>
        <p>
          {lesson.name} - {lesson.code} - cr: {lesson.credit} - gr:
          {lesson.grade}
        </p>
      </div>
      <button className="lesson-item-edit-btn" onClick={onClick}>
        {isAdd ? "+" : "-"}
      </button>
    </div>
  );
};

export default StudentLessonItem;
