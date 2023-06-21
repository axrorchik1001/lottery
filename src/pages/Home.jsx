import React from "react";
import GameNumber from "../components/GameNumber";

export default function Home() {
	return (
		<div>
			<div className="flex justify-between">
				<div>Reklama</div>
				<div className="flex flex-col mt-2">
					<span>Bugungi Yutuq</span>
					<span>30,000 so'm</span>
					<span>3 kishi uchun</span>
				</div>
			</div>
			<h1 className="mt-2 mb-2">Boshqa o'yinlar </h1>
			<GameNumber/>
		</div>
	);
}
