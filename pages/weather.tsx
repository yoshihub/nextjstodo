import styles from '../styles/Home.module.css'
import { useState} from 'react';
import { Button, Form,Input } from 'antd';
import { Header } from '../components/Header';



const Weather= () => {
  const [city,setCity]=useState<string>("");
  const [weather,setWeather]=useState<weatherType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""});

  type weatherType = {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }

  const getWeather=(e:any)=>{
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=d88509903e8144dd915101113222708&q=${city}&aqi=no`)
    .then(res=>res.json())
    .then(data=>{
      setWeather({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
        })
      })
    }

  return(
    <div className={styles.container}>
      <Header title="天気"/>
      <h1>天気</h1>

      <Form>
        <Form.Item label="都市名" name="city">
          <Input
          style={{width:"30%"}}
          placeholder='都市名を英語入力'
          onChange={(e)=>setCity(e.target.value)}
          allowClear
          required></Input>
          <Button type="primary" htmlType="submit" onClick={getWeather}>
          天気を見る
          </Button>
        </Form.Item>
      </Form>

      <div>
        {weather.country &&<div>{weather.country}</div>}
        {weather.cityName &&<div>{weather.cityName}</div>}
        {weather.temperature &&<div>{weather.temperature} <span>°C</span></div>}
        {weather.conditionText &&
          <div>
            <img src={weather.icon} alt="icon"/>
            <span>{weather.conditionText}</span>
          </div>}
      </div>
    </div>
  )
}


export default Weather
