export const routeAnimations = {
	hidden: {
		x: "100vw"
	},

	show: {
		x: 0,
		transition: {
			delay: 0.75,
			duration: 0.75,
			when: "beforeChildren",
			staggerChildren: 0.5
		}
	},

	exit: {
		x: "-100vw",
		transition: {
			duration: 0.75
		}
	}
};

export const cardTransitions = {
	hidden: {
		x: "50vw",
		opacity: 0
	},

	show: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5
		}
	},

	exit: {
		x: "-50vw",
		opacity: 0,
		transition: {
			duration: 0.5
		}
	}
};

export const editCardsAnimation = {
	hidden: {
		y: "100vh"
	},

	show: {
		y: 0,
		transition: {
			delay: 1,
			duration: 1
		}
	},

	exit: {
		y: "-100vh",
		transition: {
			duration: 0.5
		}
	}
};

export const logoutModalAnimation = {
	hidden: {
		scale: 0,
		transition: {
			duration: 0.3
		}
	},

	show: {
		scale: 1,
		transition: {
			duration: 0.3
		}
	}
};
