**\*THIS IS A ToDo \*\***
This a to using Contex API and uses local storage

**\*1st step\*\***
creating a context first

1.  importing CREATECONTEXT USECONTEXT
2.  adding the values in createContext in a variable ToDoContext
    --> Supppose the todos are arrays every array have todos like (.) learn DSA (.)learn NodeJS (.)learn React have unique id as there is no database so we will be manually generate the ids we have various way it can be date we can generate using math.random

        Now we have many functionality like edit delete add toggle(mark as read or incomplete)

    working--->
    we are taking a array in which every toDo (task) will be a object and every to (object) have an **_id_**
    **_For example pourpse so that we remember the model 1st we are creating a basic object but by default we need empty objects_**
    todos: [{
    id:1,
    toDo:"!st todo message",
    completed:false // default value must we can say checked unchecked
    }]
    **_Functionalities_** this are the work to be done in TODO write , edit , delete, mark as read(toggle)
    now we are writing the functionalities but we not write the defeniation here we write it in App.jsx we just write the name
    addTodo:(todo)=>{} // for adding the data in todo it demand todo from above array object
    updateTodo:(id,todo) // update is to update the whole to do it will demand from array object two things (id,todo)
    delete:(id)=>{} //for deleting it demand id only from array object

3.  making a coustom Hook where returning the value of ToDoContext in
    useContext
4.  exporting the Provider from here so that we have not to import from
    there ToDoContext.Provider

**\*2ndStep\***
Creating an index file
A we take all the import here and whatever file required to be import ,import it from here
export{ToDoContext,TodoProvider,useContext} from "./ToDoContext" makes work easy

**\*3rd Step\***
working on App.js

1. we are copying the css from git hub
2. we are using state for the todos we are getting from the context we have to store in some where which will change the ui as well so we use a hook useState which will have a default value an empty array as if we not use a empty array then it will be null there will be problem and if we are using loop then we will know that there is no value 3._Adding functionality_
   for adding the functionality we need to add the todoProvider first, now provider will provide what --> it requires values
3. After taking the values we need to define the functionalities in App.js

_working_
a.**\*addTodo**
so for addTodo we need a todo as we set in in ToDoContext it need a todo so we are adding a parameter in function
const addTodo=(todo)=>{}
this todo value we will get from values (after adding somthing in todos ) it is not comming from state as states have all the todos

Now if we set the todos in settod directly like this
settodos(todos) --> this will delete all the previous todo and set a new one so we are using a **\*callback function** setTodos((prev)
in here we are taking the old vlaues of the array using destructure concept [...prev](we took previous values and we sprade it )

now we cannot directly write [todo,...prev] as we have three values in it in(ToDoContext.js we have taken a object) so we are taking a object here
settodos((prev)=[{id:Date.now(),...todo},...prev])
we are injecting a id here and we took the todo using spread(...todo)

b. **\*updateTodo**
const updateTodo=(id, todo)=>{
Now which id and what to update -->
in here we know that our todos is a array so we need to add a loop in here we want to update a property name id we want to update and we update that todo
**_IN HERE WE ARE FINDING WHICH TODO HAVE ID THAT ARE MATHING SO THAT WE CAN ADD A NEW TODO_**
so we are calling the setTodo--> (hook) (we take the previous state of the array ) After that we are adding loop here(Map is used ) --> In here we are doing that we find every element's ID
now if the id matches keep as it is and if not mached then add a todo
}
c. **\*Delete the TOdO**
as above we are taking the access of previous (prev)
Now we have to delete a todo so when deleting --> here we have a original array we have to make a new array and in new array we should have those values **_which does not match with the id given here_** so for that we are using a js function name **filter**
setTodos((prev) // here we are passing the previous array/value in a callback function
=>prev.filter((todo)=>todo.id!==id) )// here taking the previous array/ value .filter which have a function witha variable parameter todo --> todo.id means variable.id if != id of the todo to be deleted will be in ther array and the one will match will get removed

d.**\*for toggle button (Buisness logic)**
HERE THE IMPORTANT IS THE CHECK MARK BOX (THE TICK MARK BOX ) --> WHEN THE BOX IS CHECKED(TICKED) THEN THE TODO HAVE A CUT MARK OVER IT

In here we need to go through the todo object in ToDoContext.js in it we have a parameter name completed : false we have to toggle it

as we need a map in every prev now in map we gets the value of prev (map fearture ) we are naaming the accessed value prevTodo now adding loop
now , in loop we wii check the id matchinng or not --> if match then keep prevTodo as it is else keep the other items unchanged (so we are using spread operators(...prev)) while making a object & change the value matched with the ids (overriding the completed value with !prevTodo.complted )

**\*2nd Step \*\***
_addding local storage_
Now we are using a local storage in todo bow while loading a data for the first time ina todo it can happen that we already have some data in it (ex -> we1st add some data and refreshed the page then there is some data in it) for that we need to use a hook name _useEffect_ here --> this will do is -> it will query in local storage and will get all the data from it and insert it in useState todo.

**IN REACT ONLY** _we can access ocal storage directly UNTIL AND UNLESS WE TALKING ABOUT SERVR SIDE RENDERING_

**_For local storage_**
we get a output in string format so we are using a JSON.parse to convert it into a json format

Now checking if there is any data present previously in it or not

**_Upto now we are getting the todos _**

Now we are adding the data in local storage

now,
there is a way we can pass todos in dependency of useEffect but if we use that we will get the data again and again how mmany time the new data is passed

so we are using a **\*2nd useEffect(we can use more then one use effect)**

localStorage.setItem("key","value") setting the value
we need to give the same key as we are givrn here
localStorage.getItem("todos"))

now in value part we are giving JASON.stringify()
as we kno we using a array so we are giving the JSON METHOD HERE

\***\*WORKING OF CONTEXT API ENDS HERE**

_MAKING THE COMPONENT_
After completing the ui from github
**TodoForm.jsx**
adding state for individual todo

---

Now,
This is my add toDo part and the funcionality is in App.jsx(value={{ addTodo,) and the value is injected from here

const addTodo = (todo) => {
setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
};

But we need it back for more usage
for that
we take it form useTodo(Coustom hooks created in TodoContext.js ) well not using this ueContext because it was already reaturn in useToDo and use context have al the context
export const useToDo = () => {
return useContext(ToDoContext);
};

---

Now we are writing const {addTodo} = useTodo In here which functionality which is required we will extract from here like here addTodo now we have to take value and pass in add to addTodo expects in ToDoContext.js page ( addTodo: (todo) => {}, in here ) now here it expect a todo and what will it do {}(blank -- as itis not written here)

it is written in App.jsx where the functionalities are defined
so in
_const addTodo = (todo) => {setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);_

here we provide 1st values date.now() & remening values ...todo
we spraied in here --> but no object is there
Now in here we are giving the object

So making a method for that
const add=(e)=>{
e.preventDefault()
Now if there is nothing in ToDo simply return
if (!todo) return;
if there is a value in here simply add todo
addTodo(todo) // but this is not the way as we took an array in App.js in here
// adding data in todos
const addTodo = (todo) => {
setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
};
here we are spread the object as well here-> { id: Date.now(), ...todo } so we need a object in here---> addTodo()

_So we are passing addTodo(id: Date.now(),todo:todo,completed:false)_
Now as we give setTodos((prev) => [{ id: Date.now(),) date.now here we no need to require addTodo(id: Date.now(),todo:todo,completed:false) -->addTodo(todo:todo,completed:false)
_in newSyntax_ if my field name and my values name is same we can remove it as well -->addTodo({todo,completed:false})
}
**In css Part**
1.
we are adding a onSubmit on form 
<form onSubmit={add} className="flex">
2.
wiring up in input field
In here we are wiring outr input with state 

value={todo}
3.
For change happens in it 

we will call setTodo
onChange={(e)=> setTodo(e.target.value)}

**TodoItem.jsx**
In it the 1st functionality is the 
*toggle box* -> 1st we have to check it is editable or not if we are marking the toggle button then it will not be editable as it is done so editable option and cross option will be invalid  
*edit option*-> if we edit then the todo message we need to update 
*delete* -> if we delete the todo then we need a delete functionality

 ***WORKING**
 1.// writing the context here from here only we get our context (useTodo-> coustome Hook and addTodo is the functionality)
    const {updateTodo,toggleComplete,deleteTodo}= useToDo

2.taking a useState -> const [isTodoEditable, setisTodoEditable] = useState(false); making it false because by default it is not shown like not ticked 
 
 we need to take a new useState as when we will click the toggle button then the todo will change then the state will change  
 const [todoMsg, setTodoMsg] = useState(todo.todo);

 the default value will be the the todoint todo (todo.todo)

 3.Now we are working on functionality --> creating a new functionality here 
  const editTodo=()=>{
     so 1st we are calling a update as we are updating every thing here
      updateTodo(
        // in update we need 1st todo id 
        *todo.id*,
        //2nd we need todo whole todo --> todo here is a object as we pass a object in appp.jsx in here
        const addTodo = (todo) => {
    setTodos((prev) => ***[{ id: Date.now(), ...todo }**, ...prev]);

    below here we 1st spread the existing value(for getting the individual value) & then we update the only reqired todo to update 
    
    {...todo,todo:todoMsg}
4. after we get the todo from above we will setTodoEditable(false)--->  setting state here 
5. for toggle function (that tick mark part right side )
const toggleCompleted=()=>{
      toggleComplete(todo.id) // in here we are passing the prop
        
***Above TodoItem.jsx part is complete**
***Now in App.jsx part**
Line 57 --> div className="mb-4">{/* Todo form goes here */}
          <TodoForm/>
Just adding the form
        & 
Line 60--> <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
In here the working is a bit different 
 --> here we have to add loop which we bring from the context  && inside the loop in a todo item we will  be pssing a prop and we will call it 
step 1:  {todos.map((todo)=>(
              <div></div>
            ))}
we know that inside the loop <div></div> will repeate now the problem is how to know that every div is unique or not 
*here we use keys* without key the performance degrade

step:2 <div keys={todo.id}></div>

Now the questoin arrives that these are arrays we are dealing with so we can take index value in map in here todos.map((todo)=>  and we can pass the index here <div keys={todo.id}

so index does not give much good performance have draw backs and pitfall untill and unless there is no option  

Step:3 <div keys={todo.id} className="w-full">
                <TodoItem/>
pass TodoItem in here like above 
and we have to pass a component props
