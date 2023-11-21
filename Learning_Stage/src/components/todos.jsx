
import './card.css'

const todos=[
    {
        title : "Assignment",
        desc : " Aesterics Algorithm and Nural Network "
    },

    {
        title : "Class",
        desc : " Have Nural Network and expert system Class Test "
    },
    
    {
        title : "Lab",
        desc : " Need to bring laptop , reverse kinemetics simulation"
    },
    
    {
        title : "Tuition",
        desc : " Will take exam , prepare question "
    }
    
]

const List=()=>{
    return (
        <div >

        {todos.map((todo, index)=>{
                
               return  (
                  <div key={index} className="todo">
                   
                   <h3>{todo.title}</h3>
                   <p>{todo.desc}</p>

                  </div>
               )

        })}

        </div>

    );
}

export default List;
