import React from "react";
import "./LessonList.css";
const LessonItem = (props) => {
  const { lesson, deleteLesson, editLessonFunction } = props;

  return (
    <div className="lesson-item">
      <div>
        <p>
          {lesson.name} - {lesson.code} - cr: {lesson.credit} - gr:
          {lesson.grade}
        </p>
      </div>
      <div className="lesson-item-buttons">
        <button className="lesson-item-remove-btn" onClick={deleteLesson}>
          X
        </button>
        <button className="lesson-item-edit-btn" onClick={editLessonFunction}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default LessonItem;
