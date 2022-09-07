import type { NextPage } from 'next'
import { requestToBodyStream } from 'next/dist/server/body-streams'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


type Todo = {
  value: string;
  readonly id: number;
  finished:boolean;
};

const Home: NextPage = () => {
  const [text,setText]=useState("");
  const [todos,setTodo]=useState<Todo[]>([]);



  const handleText=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  }

  const inputText=(id:number,value:string)=>{
    if(value.length>15){
      alert("文字数は15文字までです");
      return;
    }
    const newTodo=todos.map((todo)=>({...todo}));
    const sinTodo=newTodo.map((todo)=>{
      if(todo.id===id){
        todo.value=value;
      }
      return todo;
    })

    setTodo(sinTodo);
  }

  const handleOnSubmit=()=>{
    if(text===""){
      return;
    }
    if(text.length>15){
      alert("文字数は15文字までです")
      setText("");
      return;
    }
    const newTask:Todo={
      value:text,
      id:new Date().getTime(),
      finished:false,
    }
    setTodo([newTask,...todos]);
    setText('');
  }

  const handleDelete=(id:number)=>{
    const newTodo=todos.filter((todo)=>{
      return todo.id!=id;
    })

    setTodo(newTodo);
  }

  const finishChange=(id:number)=>{
    const newTodo=todos.map((todo)=>({...todo}));
    const sinTodo=newTodo.map((todo)=>{
      if(todo.id===id){
        todo.finished=!todo.finished;
      }
      return todo;
    })

    setTodo(sinTodo);

    }



  return (
    <div className={styles.container}>
      <Head>
        <title>TO DO アプリ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="/">TODOアプリ{" "}</a>
      <a href="/weather">天気{" "}</a>
      <a href="/antdesign">アントデザイン</a>
      <hr/>
      <h1>TODO App</h1>


        <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit();
            }}
          >
            <input
              type="text"
              value={text}
              onChange={(e) => handleText(e)}
            />
            <input type="submit" value="タスク追加" onSubmit={handleOnSubmit} />
          </form>
          <h3>タスク{todos.length}個</h3>
      <ul>
        {todos.map((todo)=>{
          return(
          <li key={todo.id}>
            <button onClick={()=>finishChange(todo.id)}>{todo.finished?"完了":"未完"}</button>
            <input type="text" value={todo.value} onChange={(e)=>inputText(todo.id,e.target.value)}/>
            <button onClick={()=>handleDelete(todo.id)}>削除</button>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
