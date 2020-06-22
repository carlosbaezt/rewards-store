import React from "react";
import CSS from "./product.module.css";

const Product = ({ product, onBuyProductHandler }) => {
	return (
		<div className={CSS.product}>
			<img
				src={product.img.url}
				alt={product.name}
				className={CSS.image}
			/>
			<span>Category: {product.category}</span>
			<span>
				<strong>{product.name}</strong>
			</span>
			<span className={CSS.cost}>
				${Intl.NumberFormat().format(product.cost)}
			</span>
			{onBuyProductHandler && (
				<div className={CSS.divButton}>
					<button
						className={CSS.button}
						onClick={onBuyProductHandler}>
						Redeem now
					</button>
				</div>
			)}
		</div>
	);
};

export default Product;
