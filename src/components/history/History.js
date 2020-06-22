import React, { useEffect, useState } from "react";
import { useRewardStore } from "../providers/RewardStoreProvider";
import Products from "../products/Products";
import { getUserProducts } from "../../asyncActions/AsynActions";

const History = () => {
	const [state, dispatch] = useRewardStore();
	const amountOfProductsToShow = 8;
	const [amountProductsShowed, setAmountProductsShowed] = useState(
		amountOfProductsToShow
	);

	useEffect(() => {
		getUserProducts(dispatch);
	}, [dispatch]);

	const addMoreAmount = () => {
		setAmountProductsShowed(amountProductsShowed + amountOfProductsToShow);
	};

	const producsToShow =
		state.productsByUser?.slice(0, amountProductsShowed) || null;

	return (
		<>
			<Products products={producsToShow} redeeming={false} />
			<button
				style={{
					padding: "10px 30px",
					backgroundColor: "#ef3829",
					color: "white",
					fontWeight: "800",
					border: "none",
					borderRadius: "25px",
					cursor: "pointer",
					fontSize: "1.1em",
					display: "flex",
					margin: "auto",
					marginBottom: "50px",
				}}
				onClick={addMoreAmount}>
				Show more
			</button>
		</>
	);
};

export default History;
