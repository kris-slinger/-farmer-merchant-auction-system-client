import React from "react"
import Image from "next/image"
import { HiChat } from "react-icons/hi"
import starConverter from "utils/starConverter"
import isOnline from "utils/isOnline"
import Link from "next/link"
import { BiBeenHere } from "react-icons/bi"

const BidSection = () => {
	return (
		<div className="flex flex-col w-[500px]  sticky top-20 h-[500px] bg-white p-4 rounded-xl space-y-7">
			<button className="bg-green-600 text-white p-4 rounded-md self-center w-full">
				<div className=" w-1/2 m-auto">
					<BiBeenHere className="inline text-xl" />
					<span>bid</span>
				</div>
			</button>
			<table id="quantity-table" className="w-full">
				<tbody>
					<tr>
						<td></td>
						<td className="w-[700px]">
							<input
								type="number"
								className=" outline-none w-full h-full text-3xl box-border"
								placeholder="Quantity"
							/>
						</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			{/* bid section */}
			<div className="">
				<div className="text-3xl p-4 rounded-sm">
					<p className="mt-2">Ksh 40,000</p>
				</div>
				<div className="relative ml-4">
					<Image
						className="rounded-full"
						width={60}
						height={60}
						src="/fruits.jpg"
					/>
					{isOnline(true)}
					<div className="inline ml-4 top-3 text-xl absolute">
						<p>Chris Muiru</p>
						<p className="absolute top-5">{starConverter(4)}</p>
					</div>
				</div>
				<div className="bg-green-500 mt-4 flex justify-center items-center text-white m-auto rounded-md h-[40px] w-full">
					0746646464
				</div>
				<Link href="/messages/1">
					<button className="border border-green-500 mt-4 flex relative justify-center items-center m-auto rounded-md h-[40px] w-full">
						<span className="text-xl font-medium">Chat</span>
						<HiChat className="text-green-600 text-2xl absolute top-[4px] right-[116px]" />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default BidSection
