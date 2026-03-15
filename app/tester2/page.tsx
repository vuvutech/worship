"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import HomeSmooth from "@/components/smoth-scroll/Home";

export default function App() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<HomeSmooth />
			
		</>
	);
}
