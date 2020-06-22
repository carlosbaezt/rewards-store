import React from "react";
import CSS from "./Header.module.css";
import { useRewardStore } from "../providers/RewardStoreProvider";
import { updatePoints } from "../../asyncActions/AsynActions";
import Name from "./name/Name";
import Points from "./points/Points";
import { Link } from "react-router-dom";
import { UPDATE_SUCCESS_MESSAGE } from "../../constants/actions";

const Header = () => {
	const [state, dispatch] = useRewardStore();

	const updatePointsHandler = async () => {
		const pointsAvailable = [1000, 5000, 7500];
		const points =
			pointsAvailable[Math.floor(Math.random() * pointsAvailable.length)];
		await updatePoints(dispatch, points);
		dispatch({
			type: UPDATE_SUCCESS_MESSAGE,
			payload: `$${Intl.NumberFormat().format(
				points
			)} Points increased successfully`,
		});
	};

	return (
		<div className={CSS.header}>
			<Link to="/" className={CSS.box}>
				<Name name={state.user} />
			</Link>
			<Link to="/history" className={CSS.box}>
				<i className="fas fa-history"></i> Previous Redeems
			</Link>
			<div className={CSS.box}>
				<Points
					onClickHandler={updatePointsHandler}
					points={state.points}
				/>
			</div>
		</div>
	);
};

export default Header;
