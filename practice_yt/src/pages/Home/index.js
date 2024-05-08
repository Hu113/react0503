import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";
//import axios from 'axios';
import React from "react";
import Edit from "./Components/edit";
//import Item from "./Components/item";
import List from "./Components/list";
import "./Components/index.css";

//get
async function fetchData(setData) {
  try {
    const res = await fetch(API_GET_DATA);
    const data = await res.json();
    setData(data);
    console.log("抓取成功");
  } catch (error) {
    console.log("抓取失敗");
  }
}

//put
async function fetchsetData(data) {
  const res = await fetch(API_GET_DATA, {
    method: "PUT", //如果要改東西都需要用put
    headers: {
      "Content-Type": "application/json", //要改東西都需要用content-type'
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  //let a=100;
  const [data, setData] = useState([]); //data是一個陣列  //setData是要給edit因為新增按鈕在因為新增按鈕在edit區塊內
  const submittingState = useRef(false); //用來防止重複提交
  //useRef永遠維持最新狀態的值但不會影響到渲染的結果，不管渲染幾次都是false

  //只要data有變動透過useeffect做post的動作來更新
  useEffect(() => {
    if (submittingState) {
      return;
    }
    fetchsetData(data).then((data) => {
      submittingState.current = true;
    });
  }, [data]);

  useEffect(() => {
    //拉api出來
    fetchData(setData);
  }, []);
  //第一次載入頁面先fetchData
  return (
    <div className="app">
      <h1>{data.length ? "抓取成功" : "抓取失敗"}</h1>
      <Edit add={setData} />{" "}
      {/* //setData放在這裡因為新增按鈕在edit區塊內 
     add是一個function，可改名需與edit.js傳入的參數一致
    透過add新增項目之後會影響data，data更新後會傳到list裡面*/}
      <List listData={data} deleteData={setData} />
      {/* //listData是一從list傳出來的陣列 */}
      {/* 有兩個props：listData和deleteData */}
    </div>
  ); //如果是return jsx 會被看作是javascript的原件
};
export default Home;
