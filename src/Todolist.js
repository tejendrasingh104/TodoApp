import React, { useState, } from "react";

export default function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function handleActivity(e){
    setActivity(e.target.value)
  }
  function addActivity(){
    setListData((listData)=>{
      const updatedList=[...listData, activity]
      // console.log(updatedList);
      setActivity("");
      return updatedList;
  })
  }
 function handleRemove(i){
      const updatedListData = listData.filter((elem,id) => {
         return i!==id;
      })
      console.log("remove called")
      console.log(listData)
      setListData(updatedListData);
      
  }
  function handleRemoveAll(){
    setListData([])
  }

  return(
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input type="text" placeholder="Add Activity" value={activity} onChange={handleActivity}/>
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is Your List :)</p>
        {listData!==[] && listData.map((data,i)=>{
          return(
            <>
            <p key={i}>
              <div className="listData">{data}</div>
              <div className="btn-position">
                <button onClick={() => handleRemove(i)}>Remove(-)</button>
              </div>
            </p>
            </>
          )
        })}
        {listData.length>=1 && <button onClick={handleRemoveAll}>Remove All</button>}
        
      </div>
    </>
  ) 
}
