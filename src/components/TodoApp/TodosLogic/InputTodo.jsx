import {FaPlusCircle} from 'react-icons/fa'

function InputToDo() {
  return (
    <div class="limeborder">
        <div class='inputlabel'>
      <input class='addtodo' type="text" placeholder="Add todo... " />
      <button onClick="TodoItem(props)" ><FaPlusCircle /></button>
    </div>
    </div>
  );
}

export default InputToDo