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
    <Button type="primary" onClick={onButtonClick}>First Button</Button>
  )

}


export default AntDesign
