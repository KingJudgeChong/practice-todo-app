import InputToDo from "./TodosLogic/InputTodo";
import TodosList from "./TodosLogic/TodosList";
function Body() {
    return (
      <div class="body">
        <InputToDo/>        
        <TodosList/>
      </div>
    );
}

export default Body