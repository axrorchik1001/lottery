import React, { useState } from "react";

export default function GameNumber() {
	const [clickedNumbers, setClickedNumbers] = useState([]);

	const handleNumberClick = (number) => {
		if (clickedNumbers.includes(number)) {
			setClickedNumbers(clickedNumbers.filter((n) => n !== number));
		} else {
			setClickedNumbers([...clickedNumbers, number]);
		}
	};

	return (
		<>
			<div className="max-w-7xl border rounded-md h-[400px] flex">
				{/* Left side */}
				<div className="flex-1 border-r">
					<div className="w-[90%] mx-auto mt-4">
						{/* game navbar */}
						<div className="flex justify-between items-center mb-4 ">
							<h3 className="tracking-[-0.238px] text-[24px] font-[800] text-[#111111] leading-[29px]">
								Urinish: 1
							</h3>
							<button
								className="border-2 border-[#008299] rounded-full px-[5px] py-[3px] hover:bg-[#dff8f8] "
								type="submit"
							>
								<span className="font-[800] text-[16px] leading-[42px] text-[#008299]">
									Tezkor tanlash
								</span>
							</button>
						</div>

						{/* Game Numbers */}
						<div className="flex font-[700]">
							<div
								onClick={() => handleNumberClick(1)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(1)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(1) ? " text-white" : "text-black"
										} `}
									>
										1
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(2)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(2) ? "bg-[#008299]" : "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(2) ? " text-white" : "text-black"
										} `}
									>
										2
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(3)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(3) ? "bg-[#008299]" : "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(3) ? " text-white" : "text-black"
										} `}
									>
										3
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(4)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(4)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(4) ? " text-white" : "text-black"
										} `}
									>
										4
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(5) ? " text-white" : "text-black"
										} `}
									>
										5
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(6)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(6)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(6) ? " text-white" : "text-black"
										} `}
									>
										6
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Right side */}
				<div className="flex-1">
					<div className="w-[90%] mx-auto mt-7">
						<h1 className="tracking-[-0.238px] text-[24px] font-[800] text-[#111111] leading-[29px]">
							Tanlanganlar
						</h1>
						<div className="w-[100%] h-[50px] mt-6 bg-[#dff8f8] flex items-center font-[700] ">
							<h1 className="ml-4 mr-4 font-[800] ">1</h1>
							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(5) ? " text-white" : "text-black"
										} `}
									>
										5
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(5) ? " text-white" : "text-black"
										} `}
									>
										5
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(5) ? " text-white" : "text-black"
										} `}
									>
										5
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(5) ? " text-white" : "text-black"
										} `}
									>
										5
									</span>
								</span>
							</div>
							<div
								onClick={() => handleNumberClick(5)}
								className={`cursor-pointer h-10 w-10 p-5 mr-2 rounded-full border ${
									clickedNumbers.includes(5)
										? "bg-[#008299] text-white"
										: "bg-[#F0F0F0]"
								}`}
							>
								<span className="relative">
									<span
										className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
											clickedNumbers.includes(5) ? " text-white" : "text-black"
										} `}
									>
										5
									</span>
								</span>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
