import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Button, DatePicker, Input, TimePicker, Select,Popconfirm, Typography,Form} from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Footer } from '../components/Footer';

const {Title,Paragraph}=Typography;



type Todo = {
  value: string;
  readonly id: number;
  finished: boolean;
};

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodo] = useState<Todo[]>([]);



  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const inputText = (id: number, value: string) => {
    if (value.length > 15) {
      alert('文字数は15文字までです');
      return;
    }
    const newTodo = todos.map((todo) => ({ ...todo }));
    const sinTodo = newTodo.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    })

    setTodo(sinTodo);
  }

  const handleOnSubmit = () => {
    if (text === "") {
      alert("テキストを入力してください");
      return;
    }
    if (text.length > 15) {
      alert("文字数は15文字までです")
      setText("");
      return;
    }
    const newTask: Todo = {
      value: text,
      id: new Date().getTime(),
      finished: false,
    }
    setTodo([...todos,newTask]);
    setText('');
  }

  const handleDelete = (id: number) => {
    const newTodo = todos.filter((todo) => {
      return todo.id != id;
    })
    setTodo(newTodo);
  }

  const status=["未完了","実行中","完了"];

  const deleteText = '削除します。よろしいですか？';


  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, height: '100vh' }}>
      <Header title="TODO" />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <SideMenu />
        <div style={{ textAlign: 'center', width: '85%' }}>
          <h1 style={{ marginTop: 20, marginBottom: 25, fontWeight: 'bold', fontSize: 35 }}>TODO App</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit();
            }}>
            <Input
              type="text"
              value={text}
              placeholder='タスクを入力'
              onChange={(e) => handleText(e)}
              style={{ width: "30%" }}></Input>
            <Button type="primary" htmlType="submit">タスク追加</Button>
          </form>
          <h3 style={{ marginTop: 15, marginBottom: 10 }}>タスク{todos.length}個</h3>

          {todos.map((todo) => {
            return (
              <div key={todo.id} style={{ marginBottom: 17 }}>
                <Form>
                <Select
                allowClear
                placeholder="タスク状態"
                style={{width:'15%'}}

                >
                  {status.map((status,index)=>{
                    return (<Select.Option key={index} value={status}>
                  </Select.Option>)
                  })}
                </Select>
                <DatePicker picker='date' />
                <TimePicker />
                <Input
                type="text"
                value={todo.value}
                placeholder='タスクを入力'
                onChange={(e) => inputText(todo.id, e.target.value)}
                style={{ width: "23%" }}></Input>
                <Popconfirm placement="topLeft" title={deleteText} onConfirm={() => handleDelete(todo.id)} okText="はい" cancelText="いいえ">
                <Button icon={<DeleteOutlined />} type="default"
                style={{color:'red',borderColor:'red'}}>削除</Button>
                </Popconfirm>
                </Form>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Home
