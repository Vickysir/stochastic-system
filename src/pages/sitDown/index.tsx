import React, { useState } from "react";
import logo from "../../logo.svg";
import "./index.css";

const SitDown = () => {
  const users = [
    // "宇宙",
    "晓娜",
    // "赵林",
    // "雨柔",
    "紫薇",
    // "赵新",
    // "超君",
    // "振唐",
    "美蓉",
    // "思佳",
    // "智勇",
    // "李林",
    // "梓墨",
    "超学",
    "坤梅",
  ];
  const [position, setPosition] = useState([]);
  const handleSort = (arr) => {
    const tem = arr.sort(() => Math.random() - 0.5);
    setPosition(tem);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "100px", marginBottom: "20px" }}>
          <p>看看你在哪里</p>
        </div>
        <div style={{ display: "flex", marginBottom: "100px" }}>
          {users?.map((el) => {
            return <div>{el}、</div>;
          })}
        </div>
        <img src={logo} className="App-logo" alt="logo" />

        <div
          style={{ marginBottom: "60px", color: "#FFAF5D" }}
          onClick={() => handleSort(users)}
        >
          命运的排序(Here)
        </div>
        <div style={{ display: "flex", color: "#61dafb", cursor: "pointer" }}>
          {position?.map((el) => {
            return <div>{el}、</div>;
          })}
        </div>
      </header>
    </div>
  );
};

export default SitDown;
