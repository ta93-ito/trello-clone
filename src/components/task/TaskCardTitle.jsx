import React from "react";
import { useState } from "react";

export const TaskCardTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    // ページの再読み込みを防ぎ、input状態を終了する。
    e.preventDefault();
    setIsClicked(false);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitileInputArea">
      {isClicked ? (
        // onSubmitはenterを押したら発火する。
        <form onSubmit={handleSubmit}>
          {/* onBlurはinputのフィールドから離れてクリックした時に発火する。 */}
          <input
            className="taskCardTitleInput"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            autoFocus
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
