import { Button } from 'antd';
import {useState} from 'react';

const AntDesign: React.FC= () => {
  const [loading,setLoading]=useState(false)

  const onButtonClick=()=>{
    console.log("クリック")
    setLoading(true)
    setTimeout(()=>{
       setLoading(false)
    },2000);
  }


  return (
    <div>
    <Button type="primary" onClick={onButtonClick}>First Button</Button>
    <Button type="ghost" onClick={onButtonClick}>First Button</Button>
    </div>
  )

}


export default AntDesign
