import React, { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

const Task = ({
  data,
  index,
  ele,
  delItem,
  setButton,
  setPlaceholder,
  setIndex,
  len,
  moveUp,
  moveDown,
}) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="text-gray-400 mt-2 mx-5  pb-5">
      <div>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <div>
              {index !== 0 ? (
                <div>
                  <button
                    onClick={()=>{moveUp(index)}}
                  >
                    <AiOutlineArrowUp />
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              <div>
                {index !== len - 1 ? (
                  <div>
                    <button
                      onClick={() => {
                        moveDown(index);
                      }}
                    >
                      <AiOutlineArrowDown />
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                className="accent-gray-600"
                onChange={() => {
                  setIsDone((prev) => !prev);
                }}
                checked={isDone}
              />
            </div>
            <div className={isDone ? "line-through" : ""}>{ele}</div>
          </div>
          <div className="flex text-lg text-gray-400 gap-2">
            <button
              onClick={() => {
                setButton("Edit");
                setPlaceholder("Edit a Text");
                setIndex(index);
              }}
            >
              <AiOutlineEdit />
            </button>
            <button
              onClick={() => {
                delItem(index);
              }}
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
        <hr className="mx-[10px] h-1 rounded-md bg-gray-700 mt-1  border-none" />
      </div>
    </div>
  );
};

export default Task;
