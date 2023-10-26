import Header from "./Header";
import Task from "./Task";
const Tasks = (props) => {
  const data = props.data;
  console.log(data);

  return (
    <div className="bg-slate-900 w-10/12 h-auto min-h-[80px] my-10 rounded-md">
      <div>
        <Header data={data} del={props.del} len={props.len} />
      </div>
      <hr className="mx-5" />
      <div>
        {data.map((ele, index) => {
          return (
            <Task
              data={data}
              key={index}
              index={index}
              ele={ele}
              delItem={props.delItem}
              setButton={props.setButton}
              setPlaceholder={props.setPlaceholder}
              setIndex={props.setIndex}
              len={props.len}
              moveUp={props.moveUp}
              moveDown={props.moveDown}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
