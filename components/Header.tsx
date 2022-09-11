import Head from 'next/head'
import { Menu, Space } from 'antd';
import { useRouter } from 'next/router';





export const Header=(props:any)=>{

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
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Space>
     <Menu
     mode="horizontal"
     onClick={handleClick}
     items={[
      {label:"ToDo",key:"todo"},
      {label:"天気",key:"weather"},
     ]}
     ></Menu>
     </Space>
    </div>
  )

}