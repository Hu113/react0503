// import React, { useState } from "react";
const Item = ({ id, noteData, dateData, timeData, deleteData, handleChange ,}) => {
  //希望把這三個物件加到list裡
  // 刪除
  function deleteItem() {
    deleteData((prev) => {
      //prev 是deleteData的props所以deleteData函式作為<Item/>屬性直接傳遞
      return prev.filter((item) => item.id !== id); //item.id 是Item 元件中每個項目的自訂屬性
    }); //   用於辨識和處理 Item 元件的相關數據
    //id則是於協助 React 識別列表中的每個項目
  }


  return (
    <li className="item">
      <div >
        <p>{noteData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div> 
    
      <div className="item__btn" key={id}>
       
      </div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
      
      <div></div>
    </li>
  ); //如果是return jsx 會被看作是javascript的原件
};

export default Item;
