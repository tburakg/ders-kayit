import React from "react";
import "./Admin.css";
const LessonEdit = (props) => {
  const { editLesson, setEditLesson, saveFunction, title } = props;

  return (
    <div className="admin-lesson-edit-list">
      <h2>{title}</h2>
      <div className="admin-lesson-edit-list-item">
        <span>Name</span>
        <input
          className="admin-lesson-input"
          placeholder="ders adi"
          value={editLesson.name}
          onChange={(e) =>
            setEditLesson({ ...editLesson, name: e.target.value })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>Code</span>
        <input
          className="admin-lesson-input"
          placeholder="ders kodu"
          value={editLesson.code}
          onChange={(e) =>
            setEditLesson({ ...editLesson, code: e.target.value })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>Credit</span>
        <input
          className="admin-lesson-input"
          placeholder="kredi"
          value={editLesson.credit}
          onChange={(e) =>
            setEditLesson({ ...editLesson, credit: Number(e.target.value) })
          }
        />
      </div>
      <div className="admin-lesson-edit-list-item">
        <span>Grade</span>
        <input
          className="admin-lesson-input"
          placeholder="sinif"
          value={editLesson.grade}
          onChange={(e) =>
            setEditLesson({ ...editLesson, grade: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <button
          onClick={saveFunction}
          style={{ marginRight: 10 }}
          className="lesson-item-edit-btn"
        >
          Save
        </button>
        <button
          onClick={() => setEditLesson()}
          className="lesson-item-remove-btn"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default LessonEdit;
