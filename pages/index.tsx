import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button,DatePicker,Input,Col, Row, TimePicker } from 'antd';
import {DeleteOutlined} from '@ant-design/icons'
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Footer } from '../components/Footer';



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
    <div style={{display:"flex",flexDirection:"column",flex:1,height:'100vh'}}>
      <Header title="TODO"/>
      <div style={{display:"flex",flexDirection:"row",flex:1}}>
        <SideMenu/>
        <div style={{textAlign:'center',width:'85%'}}>
          <h1 style={{marginTop:20,marginBottom:25,fontWeight:'bold',fontSize:35}}>TODO App</h1>
          <form
          onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
          }}>
          <Input
            type="text"
            value={text}
            maxLength={15}
            placeholder='タスクを入力'
            onChange={(e) => handleText(e)}
            style={{width:"30%"}}></Input>
            <Button type="primary" htmlType="submit" onSubmit={handleOnSubmit}>
            タスク追加
            </Button>
            </form>
            <h3 style={{marginTop:15,marginBottom:10}}>タスク{todos.length}個</h3>

            {todos.map((todo)=>{
            return(
            <div key={todo.id} style={{marginBottom:17}}>
              <Button type={todo.finished===true?"dashed":"primary"} onClick={()=>finishChange(todo.id)}>{todo.finished?"完了":"未完"}</Button>
                <input type="text" value={todo.value} onChange={(e)=>inputText(todo.id,e.target.value)}/>
              <DatePicker picker='date'/>
              <TimePicker/>

              <Button icon={<DeleteOutlined />} type="dashed" onClick=
              {()=>handleDelete(todo.id)}>削除</Button>
            </div>
            )
          })}
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Home
