export const BALANCING_TYPES = {

	latin_square: {
		docs : {
			display_name: "Latin Square",
			description: "Uses an n x n matrix to balance subconditions presentation."
		}
	},

	random: {
		docs: {
			display_name: "Random",
			description: "Randomizes the order of the subcondition presentation."
		}
	},

	blocked_latin_square: {
		docs: {
			display_name: "Blocked Latin Square",
			description: "Blocked by a selected experimental attribute.  Then, randomized via a Latin Square."
		}
	},

	custom:{
		docs:{
			display_name: "Custom",
			description: "Custom Order for subconditions or block."
		}
	},

	none: {
		docs: {
			display_name: "None",
			description: "No balancing is done on subcondition order."
		}
	}
};
