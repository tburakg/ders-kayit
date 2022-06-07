import React, { useState } from "react";
import LessonList from "../../components/LessonList/LessonList";
import "./Admin.css";
import LessonEdit from "./LessonEdit";

const Admin = (props) => {
  
  const { lessons, setLessons, setLoginInfo } = props;
  const [editLesson, setEditLesson] = useState();
  const [newLesson, setNewLesson] = useState();

  const saveFunction = () => {
    if (
      editLesson.name !== "" &&
      editLesson.code !== "" &&
      editLesson.grade !== 0 &&
      editLesson.credit !== 0
    ) {
      const newLessons = lessons.map((x) => {
        if (x.id === editLesson.id) {
          return editLesson;
        }
        return x;
      });
      setLessons(newLessons);
      setEditLesson();
    } else {
      alert("bos alan birakilamaz!");
    }
  };

  const insertNewFunction = () => {
    if (
      newLesson.name !== "" &&
      newLesson.code !== "" &&
      newLesson.grade !== 0 &&
      newLesson.credit !== 0
    ) {
      const newLessons = [...lessons, newLesson];
      setLessons(newLessons);
      setNewLesson();
    } else {
      alert("bos alan birakilamaz!");
    }
  };

  return (
    <div className="admin-div">
      <div className="admin-panel">
        <button
          onClick={() => {
            setLoginInfo({ isLoggedIn: 0, user: undefined });
          }}
          style={{ margin: 10 }}
          className="lesson-item-edit-btn"
        >
          Login
        </button>

        <LessonList
          setNewLesson={setNewLesson}
          setEditLesson={setEditLesson}
          lessons={lessons}
          setLessons={setLessons}
        />
        {newLesson == undefined ? (
          <button
            onClick={() => {
              setEditLesson();
              setNewLesson({
                id: Math.random(),
                name: "",
                code: "",
                credit: 0,
                grade: 0,
              });
            }}
            style={{ margin: 10 }}
            className="lesson-item-edit-btn"
          >
            New Lesson
          </button>
        ) : null}
        {editLesson && (
          <LessonEdit
            title="Edit Lesson"
            editLesson={editLesson}
            setEditLesson={setEditLesson}
            saveFunction={saveFunction}
          />
        )}
        {newLesson && (
          <LessonEdit
            title="Add New Lesson"
            editLesson={newLesson}
            setEditLesson={setNewLesson}
            saveFunction={insertNewFunction}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
