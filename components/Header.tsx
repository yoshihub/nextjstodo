import Head from 'next/head'


export const Header=(props:any)=>{


return (
  <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        height:60,
        backgroundColor:"lightskyblue",
        color:"white",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'bold',
        fontSize:45}}>
        Todo App
      </div>
  </>
  )

}
