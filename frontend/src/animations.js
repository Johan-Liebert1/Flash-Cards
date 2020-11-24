export const routeAnimations = {
	hidden: {
		x: "100vw"
	},

	show: {
		x: 0,
		transition: {
			delay: 0.75,
			duration: 0.75
		}
	},

	exit: {
		x: "-100vw",
		transition: {
			duration: 0.75
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
