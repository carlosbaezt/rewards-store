import React, { useState } from "react";
import CSS from "./filters.module.css";
import { useRewardStore } from "../providers/RewardStoreProvider";
import { FETCH_PRODUCTS } from "../../constants/actions";

const Filters = () => {
	const [state, dispatch] = useRewardStore();
	const [filtered, setFiltered] = useState("");

	const sortByLowestPrice = () => {
		const products = state.products;
		const productsOrdered = products.sort((a, b) =>
			a.cost > b.cost ? 1 : -1
		);
		dispatch({ type: FETCH_PRODUCTS, payload: productsOrdered });
		setFiltered("lowest");
	};

	const sortByHighestPrice = () => {
		const products = state.products;
		const productsOrdered = products.sort((a, b) =>
			a.cost < b.cost ? 1 : -1
		);
		dispatch({ type: FETCH_PRODUCTS, payload: productsOrdered });
		setFiltered("highest");
	};

	return (
		<div className={CSS.filters}>
			<span>Sort by: </span>
			<div className={CSS.divButtons}>
				<button
					className={`${CSS.button} ${
						filtered === "lowest" ? CSS.active : ""
					}`}
					onClick={sortByLowestPrice}>
					Lowest Price
				</button>
				<button
					className={`${CSS.button} ${
						filtered === "highest" ? CSS.active : ""
					}`}
					onClick={sortByHighestPrice}>
					Highest Price
				</button>
			</div>
		</div>
	);
};

export default Filters;
