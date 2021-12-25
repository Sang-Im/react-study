import styles from "./Hello.module.css"
import { useState } from "react";


export default function Hello(props){
    console.log(props);

    function showName(){
        console.log("Mike");
    }

    function showAge(age){
        console.log(age);
    }

    function showText(txt){
        console.log(txt);
    }

//컴포넌트의 속성값
    // let name = "Mike";
    
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age);

    function changeName(){
        // name = name === "Mike" ? "Jane" : "Mike";
        // console.log(name);
        // document.getElementById("name").innerText = name;

        // 
        // const newName = name === "Mike" ? "Jane" : "Mike";
        // setName(newName);

        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age+1);
    }


   return(
       <div>
           <h3>Hello!</h3>
           <div className={styles.box}>Hello</div>

           <button onClick={showName}>Show name</button>
           <button onClick={()=>{
               showAge(30)
           }}>Show age</button>
{/* 
           <input type="text" onChange={showText}/> */}
           <input 
                type="text" 
                onChange={e =>{
                    const txt = e.target.value;
                    showText(txt);
                }}/>


           {/* 컴포넌트의 속성값 */}
           <h1>state</h1>
           <h2 id="name">{name}({age}세)</h2>
           <button onClick={changeName}>Change</button>
       </div>
   
   );
   
}