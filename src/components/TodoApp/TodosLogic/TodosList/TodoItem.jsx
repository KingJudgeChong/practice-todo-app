import {AiFillEdit} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
function TodoItem(props) {
    return (        
    <div class='redborder'>
        
        <input type="checkbox" id="item" name="item" ></input>
        <div class='middle'>
            <div>
            <label for="item">{props.phrase}</label>
            </div>
            <div>
            <button onClick="EditItem()"><AiFillEdit/></button>
            <button onClick="DeleteItem()"><MdDelete/></button>
            </div>
        </div>
        </div>
        
    )
}

export default TodoItem