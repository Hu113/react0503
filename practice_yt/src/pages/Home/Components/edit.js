import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  //利用add來幫BUTTON上一個ONCLICK

  const [data, setInputData] = useState({
    //設定初始值，定義包含三個屬性的物件
    note: "", //每個屬性分別對應到表單中的一個輸入欄位
    date: "",
    time: "",
  });
  //console.log(note,date,time);

  const handleChange = (e) => {
    //console.log("1111111111111111111111111111111");
    //console.log("1"+e+"\n","2:"+e.target.name+"\n",+"f:"+e.target.value);
    const { name, value } = e.target; //從e.target的輸入元素中，取出name和value屬性.
    //因為input有設定name屬性，所以可以用name來取得輸入的內容
    setInputData((prev) => ({
      ...prev, //prev 用於更新狀態返回一個新的狀態物件,
      //實現狀態的更新邏輯
      [name]: value,
    }));
    //將先前的狀態物件展開，保留先前狀態中的所有屬性和值，
    //並將新的屬性和值添加上去，name是變數名稱，value是變數的值
    //會將 value 的值設置給狀態物件中名為 "note" 的屬性
    //因為name的名字是自己取的所以需要中括號來表示動態接受
  };
  const addItem = () => {
    const { note, date, time } = data; //從data中解構出note、date和time的值
    add((prevData) => [{ id: v4(), note, date, time }, ...prevData]);
    //add是一個function，將data傳入list的組件中 箭頭函式內的function是顯示list上的順序
    // 最上層那筆代表新增的item，越往下新增的時間越久
    //prevData是一個函數的參數，在先前的數據基礎上添加新的項目
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事:</p>
      <input
        type="text"
        name="note"
        value={data.note}
        onChange={handleChange}
      />{" "}
      {/* 用value來更新input的內容，note控制value值 */}
      <p>日期:</p>
      <input
        type="date"
        name="date"
        value={data.date}
        onChange={handleChange}
      />
      <p>時間:</p>
      <input
        type="time"
        name="time"
        value={data.time}
        onChange={handleChange}
      />
      <button onClick={addItem} className="add">
        新增
      </button>
      {/* onclick把add塞了一個全新的內容 */}
    </div>
  ); //如果是return jsx 會被看作是javascript的原件
};
export default Edit;
