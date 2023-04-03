import TodoItem from "./TodosList/TodoItem"
function TodosList() {
    return (
        <div class='violetborder'>
          <TodoItem phrase='first item'/>
          <TodoItem phrase="second item"/>
          <TodoItem phrase='third item'/>
          <TodoItem phrase='fourth item'/>
        </div>
    )
}

export default TodosList