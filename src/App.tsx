import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [store, setStore] = useState("")
	const [restaurant, setRestaurant] = useState(restaurant1)

	const handleClick = (restaurant: any) => {
		let number = randomNum(0, restaurant.length - 1);
		let res: any = restaurantNum(restaurant, number);
		// alert("不许反悔奥！！！")
		setStore(res);
	}
	let handelChangeSelect = (e: any) => {
		setStore("");
		let value = e.target.value;
		if (value === "1") {
			setRestaurant(restaurant1)
		} else {
			setRestaurant(restaurant2)
		}

	}
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<p>
						今日份餐馆一览表
						<select className="area-select" onChange={handelChangeSelect}>
							<option value="1">上海</option>
							<option value="2">杭州</option>
						</select>
					</p>
					<ul className="name-box">
						{
							restaurant.map((item, index) => {
								return <li key={index}><span>{item}</span></li>
							})
						}
						{/* <li>
              <span>添加</span>
            </li> */}
					</ul>
				</div>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					那么问题来了，世纪大难题之
        </p>
				<p onClick={() => handleClick(restaurant)} style={{ "cursor": "pointer", "color": "#FFAF5D" }}>
					今天吃什么(点我翻牌)
        </p>
				<p style={{ "color": "#61dafb" }}>
					{store}
				</p>
			</header>
		</div>
	);
}

export default App;




export function randomNum(minNum: any, maxNum: any) {
	let random = parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
	console.log('random', random)
	return random

}


export function restaurantNum(restaurant: [], number: number) {

	for (let i = 0; i < restaurant.length; i++) {
		if (number === i) {
			console.log('i', i)
			console.log('number', number)
			return restaurant[i]
		}
	}


}

let restaurant1 = [
	"菜饭",
	"本帮面",
	"张亮麻辣烫",
	"小淮娘老鸭粉丝汤",
	"陕老顺",
	"小圆堂",
	"初未日料",
	"汉堡王",
	"谷田稻香",
	"上海富春小笼",
	"鱼你说酸菜鱼",
	"桂府手工粉",
	"香叶餐厅",
	"海南鸡饭",
	"杨国福麻辣烫",
	"金拱门",
	"再给你一次机会",
	"壮家 米粉印象",
	"黄焖鸡"
]
let restaurant2 = [
	"可鱼可饭无刺酸菜鱼",
	"湘遇",
	"小魔椒麻辣香锅",
	"无名肉沫米粉",
	"麻辣烫",
	"黄焖鸡米饭",
	"牛家人大碗牛肉面",
	"蹭饭",
	"意面",
	"披萨",
	"再给你一次机会",
	"别吃了",
	"汉堡",
	"炸鸡",
	"淮南牛肉汤",
	"冒菜",
	"日料"
]
