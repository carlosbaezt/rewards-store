import React from "react";
import { useRewardStoreDispatch } from "../providers/RewardStoreProvider";
import { buyProductFlow } from "../../asyncActions/AsynActions";
import Product from "./product/Product";
import CSS from "./products.module.css";
import { UPDATE_SUCCESS_MESSAGE } from "../../constants/actions";

const Products = ({ products, redeeming = true }) => {
	const dispatch = useRewardStoreDispatch();

	const onBuyProductHandler = async (product) => {
		await buyProductFlow(dispatch, product._id);
		dispatch({
			type: UPDATE_SUCCESS_MESSAGE,
			payload: `${product.name} redeemed successfully`,
		});
	};

	return (
		<div className={CSS.products}>
			{products &&
				products.map((product, index) => (
					<Product
						key={`${product._id}${index}`}
						product={product}
						onBuyProductHandler={
							redeeming
								? () => onBuyProductHandler(product)
								: null
						}
					/>
				))}
		</div>
	);
};

export default Products;
