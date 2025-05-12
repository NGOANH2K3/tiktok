import Paragraph from "./paragraph";
import { useState ,useEffect, memo } from "react"
// const tabs = ["posts", "comments", "albums"];
const lessons = [
    {
        id: 1,
        name: "Java",
        description: "Học lập trình Java"
    },
    {
        id: 2,
        name: "PHP",
        description: "Học lập trình cùng PHP"
    },
    {
        id: 3,
        name: "Python",
        description: "Học lập trình dùng Python"
    }
]
function Content({onIncrease}){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [types, setTypes] = useState('posts');
    const [showgoto, setShowgoto] = useState(false);
    const [countdown, setCountdown] = useState(180);
    const [avatar, setAvatar] = useState();
    const [lessonId,setLessonId] = useState(1)
    // useEffect(()=>{
        
    //     fetch(`https://jsonplaceholder.typicode.com/${types}`)
    //     .then(res => res.json())
    //     .then(pust => {
    //         setPosts(pust)
    //     });
    // }, [types]);

    // useEffect(() => { 
    //     const handleScroll = () => {
    //         if(window.scrollY >= 100){
    //             setShowgoto(true);
                
    //         }
    //         else{
    //             setShowgoto(false);
    //         }
    //         // setShow(window.scrollY >= 200);
            
    //     }
    //     window.addEventListener('scroll',handleScroll)

        // cleanup function
        // return () => {
        //     window.removeEventListener('scroll',handleScroll) // react 18 đã hỗ trợ tự unmouted
        // }
    // },[])   

    ////////////////////////////////////////////////////////////////////////
    //    useEffect(()=>{
    //         setInterval(()=>{
    //             setCountdown (prevState => prevState - 1 )
    //         }, 1000)
    //    },[])
    ///////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////
    // useEffect(() => {
    //     return () => {
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //     }
    // },[avatar])
    // const handleAvatar = (e) =>{
    //     const file = e.target.files[0]

    //     file.preview = URL.createObjectURL(file)

    //     setAvatar(file)
    //      e.target.value = null
    // }
    ////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////////////////
    // useEffect(() =>{
    //     const handleComment = ({detail}) => {
    //         console.log(detail)
    //     }
    //     window.addEventListener (`lesson-${lessonId}`,handleComment)

    //     return () =>{
    //         window.removeEventListener (`lesson-${lessonId}`,handleComment )
    
    //         }
    // },[lessonId])
    ////////////////////////////////////////////////////////////////////////
        
    return(
        <div>
            {/* {tabs.map(tab => (
                <button 
                    key={tab} 
                    onClick={() => setTypes(tab)}
                    style = {types === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                >{tab}</button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            
               {posts.map(post =>(
                <li key={post.id}>{post.title || post.name}</li>
               ))}
            
            {showgoto && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                Go to top
                </button>
            )} */}
            
            
            {/* <h1>{countdown}</h1> */}


            {/* <input 
                type="file"
                onChange={handleAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="ảnh đại diện" width="50%"/>
            )} */}


            {/* <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                            'red':
                            '#333',
                            cursor: "pointer"
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul> */}

            {/* <>
                <h2>hello word</h2>
                <button onClick={onIncrease}>Click me!</button>
            </> */}
            <Paragraph />
        </div>
        
    )
}

export default memo(Content)