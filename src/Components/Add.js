import React, { useEffect , useState } from "react";
const Add = (props) => {
  const [showCustomPlaceholder, setShowCustomPlaceholder] = useState(false);
  function onChangeHandler(ev) {
    props.setTask(ev.target.value);
  }

  function onClickHandler() {
    props.updateData(props.task);
    props.setTask("");
  }

  function placeholderHandler() {
    props.setPlaceholder("Add a Text")
  }

  useEffect(() => {
    if (showCustomPlaceholder) {
      const timeout = setTimeout(() => {
        setShowCustomPlaceholder(false);
        props.setPlaceholder('Add a Text');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showCustomPlaceholder]);

  // const plc = props.placeholder;

  return (
    <div className="bg-slate-900 w-10/12 h-[40px] rounded-md flex mt-8 justify-evenly items-center text-center">
      <div className=""></div>
      <input
        type="text"
        className="text-gray-300  bg-slate-900 w-10/12 placeholder:text-gray-400"
        onFocus={placeholderHandler}
        placeholder={props.placeholder}
        onChange={onChangeHandler}
        value={props.task}
      />
      <button
        className="text-gray-600"
        onClick={
          props.button === "Add"
            ? onClickHandler
            : () => {
                props.editHandler(props.index, props.task);
              }
        }
      >
        {props.button}
      </button>
    </div>
  );
};

export default Add;
