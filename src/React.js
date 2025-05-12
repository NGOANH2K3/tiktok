import Content from './content';
import { useState, useEffect, useRef, useCallback, useMemo, useReducer, useContext, createContext } from 'react';
import TodoApp from './Todo';
import { ThemeContext } from './themeContext';
import { useStore, actions } from './Store';
import './App.css';
// const order = [100,200,300]

// const courses = [
//   {
//     id: 1,
//     name: 'java'
//   },
//   {
//     id: 2,
//     name: 'PHP'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

function App() {
    // const [counter, setCounter] = useState(()=>{
    //   const total = order.reduce((total, cur) => total + cur)
    //   console.log(total)
    //   return total
    // })
    // const handleIncrease = () => {
    //   setCounter(counter + 1)
    // }
    // return (
    //   <div className="App" style={{padding: 20}}>
    //       <h1>{counter}</h1>
    //       <button onClick={handleIncrease}>Increase</button>
    //   </div>
    // );

    // const [info, setInfo] = useState({
    //   name: 'ngo anh',
    //   age: 21,
    //   address: 'Hà Nội'
    // }
    // )
    // const handleUpdate = () => {
    //   setInfo({
    //     bio: 'Hello guys!'
    //   })
    // }
    // return (
    //   <div className="App" style={{padding: 20}}>
    //       <h1>{JSON.stringify(info)}</h1>
    //       <button onClick={handleUpdate}>Update</button>
    //   </div>
    // );

    //------------------GIFT RANDOM--------------------------------

    // const gifts = [
    //   'CPU i9',
    //   'RAM 32GB RGB',
    //   'RGB keyboard',
    // ]

    //   const [gift, setGift] = useState()
    //   const randomGift = () => {
    //     const index = Math.floor(Math.random() * gifts.length)
    //     setGift(gifts[index])
    //   }

    // return (
    //   <div className="App" style={{padding: 20}}>
    //       <h1>{gift || 'chưa có phần thưởng'}</h1>
    //       <button onClick={randomGift}>Lấy thưởng</button>
    //   </div>
    // );
    //------------------------------------------------------------------

    //------------------------ input two-way-binding ------------------------------------------
    // const [name, setName]= useState('')
    // const [email, setEmail] = useState('')
    // const handleSubmit = ()=>{
    //   console.log({
    //     name,
    //     email
    //   })

    // }
    // return(
    //   <div style={{padding: 32}}>
    //     <input
    //     value={name}
    //       onChange = {e => setName(e.target.value)}
    //     /> <br/>
    //     <input
    //     value={email}
    //       onChange = {e => setEmail(e.target.value)}
    //     />
    //     <button onClick={handleSubmit}>Change</button>
    //   </div>
    // )

    //---------------------- RADIO -------------------------------------------
    // const [checked, setchecked] = useState('')
    // const handleSubmit = ()=>{
    //   console.log( {id: checked})
    // }

    // return (
    //   <div style={{padding: 32}}>
    //     {courses.map(course => (
    //       <div key={course.id}>
    //         <input
    //           type="radio"
    //           checked={checked === course.id}
    //           onChange={()=> setchecked(course.id)}
    //         />
    //         {course.name}
    //       </div>
    //     ))}

    //     <button onClick={handleSubmit}>Register</button>
    //   </div>
    // )

    //--------------------------CHECKBOX------------------------------------------

    // const [checked, setchecked] = useState([])

    // const handleChecked = (id) =>{
    //   setchecked (prev =>{
    //     const ischecked = checked.includes(id)
    //       if(ischecked){
    //         return checked.filter(item => item !== id)
    //       }
    //       else{
    //         return [...prev,id]
    //       }
    //   })
    // }
    // const handleSubmit = ()=>{
    //   console.log({ids: checked})
    // }

    // return (
    //   <div style={{padding: 32}}>
    //     {courses.map(course => (
    //       <div key={course.id}>
    //         <input
    //           type="checkbox"
    //           checked={checked.includes(course.id)}
    //           onChange={()=> handleChecked(course.id)}
    //         />
    //         {course.name}
    //       </div>
    //     ))}

    //     <button onClick={handleSubmit}>Register</button>
    //   </div>
    // )
    //-----------------------------------------------------------------------------

    //----------------------------TODOLIST-----------------------------------------

    // const [job,setjob] = useState('')
    // const [jobs,setjobs]=useState( () => {
    //   const storageJobs = JSON.parse(localStorage.getItem('jobs'))

    //   return storageJobs ?? []
    // })
    // const handleSubmit = ()=>{
    //   setjobs(prev => {
    //     const newJobs = [...prev,job]

    //     // save to local storage
    //     const jsonJobs = JSON.stringify(newJobs)
    //     localStorage.setItem('jobs', jsonJobs)
    //     return newJobs
    //   })

    //   setjob('')
    // }
    // const handleDelete = (index)=>{
    //   setjobs(prev => {
    //     const newJobs = prev.filter(job => job !== index)
    //     const jsonJobs = JSON.stringify(newJobs)
    //     localStorage.setItem('jobs', jsonJobs)
    //     return newJobs
    //   })
    // }
    // return (
    //     <div  style={{padding: 32}}>
    //         <input
    //           value={job}
    //           onChange={e => setjob(e.target.value)}
    //         />
    //         <button onClick={handleSubmit}>ADD</button>

    //           {jobs.map( (job,index) =>(
    //             <ul key={index}>
    //               <li >{job}
    //                 <button onClick={()=>handleDelete(job)}>xóa</button>
    //               </li>
    //             </ul>
    //           ))}

    //     </div>
    //   );

    //------------------------- Mounted / UnMouted ----------------------------------------

    // const [show,setShow] = useState(false)

    // return(
    //   <div style={{padding: 32}}>
    //     <button onClick={()=> setShow(!show)}>Toggle</button>
    //     {show && <Content/>}
    //   </div>
    // )

    //----------------------------UseEffect HooK------------------------------------------------
    /**
     * content.js
     */

    //-----------------------------------------UseRef Hook ----------------------------------

    // const [count,setCount] = useState(60);
    // const timeId =useRef();
    // const prevCount = useRef();

    // useEffect(()=>{
    //   prevCount.current = count
    // },[count])
    // const handleStart = () => {
    //   timeId.current = setInterval(()=>{

    //     setCount(prevCount => prevCount - 1)
    //   },1000)
    // }

    // const handleStop = () => {
    //   clearInterval(timeId.current)
    // }

    // return(
    //   <div style={{padding: 30}}>
    //     <h1>{count}</h1>
    //     <button onClick={handleStart}>Start</button>
    //     <button onClick={handleStop}>Stop</button>
    //   </div>
    // )

    //----------------------- useCallback / Memo(HOC) ------------------------------------------
    // const[count,setCount] = useState(0)
    // const handleIncrease = useCallback( () => {
    //   setCount(prevCount => prevCount + 1 )
    // }, [])

    // return(
    //   <div style={{padding: '10px  32px' }}>
    //     <Content onIncrease={handleIncrease}/>
    //     <h1>{count}</h1>
    //   </div>
    // )

    //-------------------------useMemo Hook ------------------------------------------
    // const [name,setName] = useState('')
    // const [price,setPrice] = useState('')
    // const [products,setProducts] = useState([])

    // const nameRef = useRef()
    // const handleShow = () => {
    //   setProducts ([...products, {
    //     name,
    //     price: +price /** number.price /  */
    //   }])
    //   setName('')
    //   setPrice('')

    //   nameRef.current.focus()
    // }

    // const total = useMemo(()=>{
    //   const result = products.reduce((results,prod) =>
    //   results + prod.price , 0 )
    //   return result
    // }, [products])

    // return (
    //   <div style={{padding: '12px 32px'}}>
    //     <input
    //       ref={nameRef}
    //       value={name}
    //       placeholder="Eter name"
    //       onChange={e => setName(e.target.value)}
    //     />

    //     <br/>

    //     <input
    //       value={price}
    //       placeholder="Eter price"
    //       onChange={e => setPrice(e.target.value)}
    //     />

    //     <br/>

    //     <button onClick={handleShow}>Add</button>
    //     <br/>
    //     Total: {total}
    //     <ul>
    //       {products.map((product, index) => (
    //         <li key={index}>{product.name} - {product.price}</li>
    //       ))}
    //     </ul>

    //   </div>
    // )

    //----------------------------- UseReducer Hook ----------------------------------------
    // return <TodoApp />

    //------------------------------UseContext Hook -----------------------------

    // const themeContext = useContext(ThemeContext)

    // return(

    //   <div style={{padding: '25px 32px'}}>
    //     <button onClick={themeContext.toggleTheme}>Toggle Theme</button>
    //     <Content />
    //   </div>

    // )

    //----------------------------UseContext + UseReducer -----------------------------
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const [change, SetChange] = useState(false);
    const indexChange = useRef(0);
    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
        dispatch(actions.setTodoInput(''));

        inputRef.current.focus();
    };

    const openUpdate = (todo, index) => {
        SetChange(true);
        dispatch(actions.setTodoInput(todo));
        indexChange.current = index;
    };

    const handleUpdate = () => {
        dispatch(actions.updateTodo(todoInput, indexChange.current));
        SetChange(false);
        dispatch(actions.setTodoInput(''));

        inputRef.current.focus();
    };

    const handleClearAll = () => {
        const confirmed = window.confirm('Are you sure to want to clear all todos');
        if (!confirmed) {
            return;
        }
        dispatch(actions.clearAllTodo());
    };

    // console.log('todolist: ', todoInput)
    return (
        <div style={{ padding: '25px 32px' }}>
            <input
                ref={inputRef}
                value={todoInput}
                placeholder="Enter Todo..."
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />

            {!change && <button onClick={handleAdd}>Add TODO</button>}
            {change && <button onClick={handleUpdate}>Update</button>}
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <span
                        style={{ cursor: 'pointer', marginLeft: '5px', color: 'red' }}
                        onClick={() => {
                            dispatch(actions.delelteTodo(index));
                        }}
                    >
                        &times;
                    </span>

                    <span
                        style={{ cursor: 'pointer', marginLeft: '5px', color: '#04AA6D' }}
                        onClick={() => {
                            openUpdate(todo, index);
                        }}
                    >
                        &or;
                    </span>
                </li>
            ))}
            <button
                onClick={handleClearAll}
                className="ml-3 btn-clearAll"
                style={{ display: change === false ? 'inline-block' : 'none' }}
            >
                Clear all
            </button>
        </div>
    );
}

export default App;
