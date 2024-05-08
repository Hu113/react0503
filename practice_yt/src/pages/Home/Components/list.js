import Item from "./item";

const List = ({ listData, deleteData,onEditItem,setUpdate}) => {
  //listData是一個陣列
  console.log("listData", listData);
  const list = Array.isArray(listData) ? listData : [];
  return (
    <div className="list">
      {
        list.map((item) => {
          const { note, date, time, id} = item; //從item中解構出note、date和time的值
          return (
            <Item
              key={id}        //確保列表項目在 React 中具有唯一的識別符
              id={id}        //為了將 id 作為自定義屬性傳遞給 Item 組件
              noteData={note}
              dateData={date}
              timeData={time}
              deleteData={deleteData}
           
            />
          );
          //左邊的note是 item.js中要拿的note，右邊的note是傳進來的note
        }) //右邊的note是從item中解構出的值，名字可能不同
        
      }
    </div>
  ); //如果是return jsx 會被看作是javascript的原件
};
export default List;

//list接收到listData之後會重新渲染出note、date、time

