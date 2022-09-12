import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';



export const SideMenu=()=>{

  const router = useRouter();

  const handleClick=(info:any)=>{
    if(info.key==="todo"){
    router.replace('/');
    }
    if(info.key==="weather"){
    router.replace('/weather');
    }
  }

return (
    <div>
      <Menu
      onClick={handleClick}
      items={[
        {label:"ToDo",key:"todo",icon:<UnorderedListOutlined/>},
        {label:"天気",key:"weather",icon:<HomeOutlined/>},
      ]}
      ></Menu>
    </div>
  )

}
