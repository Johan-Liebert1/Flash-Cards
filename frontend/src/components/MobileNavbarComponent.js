import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogoutAction } from "../actions/userActions";

import "../styles/MobileNavbarComponentStyles.css";
import { logoutModalAnimation, mobileSidebarAnimation } from "../animations";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavbarComponent = ({ history, location, match, homeNavbar }) => {
	const dispatch = useDispatch();

	const { userLoginInfo } = useSelector(state => state.userLoginInfo);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	const triggerModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const logoutUserHandler = () => {
		dispatch(userLogoutAction());

		history.push("/");
	};

	const openSidemenu = e => {
		setSideMenuOpen(true);
		document.body.style.overflowY = "hidden";
	};

	const closeSidebar = e => {
		setSideMenuOpen(false);
		document.body.style.overflowY = "visible";
	};

	return (
		<>
			<nav className="container">
				<div className="hamburger" onClick={openSidemenu}>
					<svg
						width="2em"
						height="2em"
						viewBox="0 0 16 16"
						className="bi bi-list"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</div>

				<div>
					<Link to="/cardsets" onClick={closeSidebar} className={`home-link`}>
						<h5>Flash Cards</h5>
					</Link>
				</div>

				<div className="user-profile">
					<div className="profile" onClick={triggerModal}>
						<span> {userLoginInfo ? userLoginInfo.username : ""} </span>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							className="bi bi-caret-down-fill"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
						</svg>
					</div>

					{isModalOpen && (
						<AnimatePresence>
							<motion.div
								variants={logoutModalAnimation}
								animate={isModalOpen ? "show" : "hidden"}
								exit="hidden"
								className="user-profile-modal"
							>
								<p className="profile-link">Profile</p>
								<p className="profile-link" onClick={logoutUserHandler}>
									Logout
								</p>
							</motion.div>
						</AnimatePresence>
					)}
				</div>
			</nav>

			{/* <AnimatePresence> */}
			{sideMenuOpen && (
				<div id="side-menu">
					<motion.div
						style={{ height: "100%" }}
						variants={mobileSidebarAnimation}
						initial="hidden"
						animate="show"
						exit="exit"
					>
						<div id="left-side-menu">
							<div id="close-sidebar" onClick={closeSidebar}>
								<svg
									width="1.5em"
									height="1.5em"
									viewBox="0 0 16 16"
									className="bi bi-plus-circle"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
									/>
									<path
										fillRule="evenodd"
										d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
									/>
								</svg>
							</div>

							<div id="left-side-menu-container">
								<div>
									<Link to="/cardsets" onClick={closeSidebar}>
										<h3>Flash Cards</h3>
									</Link>
								</div>

								<div className="m-link-container">
									<Link
										to="/cardsets/create"
										onClick={closeSidebar}
										className={`m-nav-link 
                                        ${
											location.pathname === "/cardsets/create"
												? "m-link-active"
												: ""
										}`}
									>
										<h6> Create a New Set </h6>
									</Link>
								</div>

								{!homeNavbar && (
									<>
										<div className="m-link-container">
											<Link
												onClick={closeSidebar}
												to={`/cardsets/${match.params.setName}/${match.params.setId}/cards/add`}
												className={`m-nav-link 
                                            ${
												location.pathname ===
												`/cardsets/${match.params.setName}/${match.params.setId}/cards/add`
													? "m-link-active"
													: ""
											}`}
											>
												<h6> Add Cards </h6>
											</Link>
										</div>

										<div className="m-link-container">
											<Link
												onClick={closeSidebar}
												to={`/cardsets/${match.params.setName}/${match.params.setId}/cards/edit`}
												className={`m-nav-link 
                                            ${
												location.pathname ===
												`/cardsets/${match.params.setName}/${match.params.setId}/cards/edit`
													? "m-link-active"
													: ""
											}`}
											>
												<h6> Edit Cards </h6>
											</Link>
										</div>
									</>
								)}
							</div>
						</div>

						<div id="right-side-menu"></div>
					</motion.div>
				</div>
			)}
			{/* </AnimatePresence> */}
		</>
	);
};

export default withRouter(MobileNavbarComponent);
