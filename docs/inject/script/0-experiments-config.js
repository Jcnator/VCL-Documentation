const INPUT_TYPES = {
	string: {
		display_name: "String",
		bootstrap_label: "default"
	},
	boolean: {
		display_name: "Boolean",
		bootstrap_label: "success"
	},
	number: {
		display_name: "Number",
		bootstrap_label: "danger"
	},
	assoc_array: {
		display_name: "Associative Array",
		bootstrap_label: "primary"
	}
};

var ADDRESS = location.protocol + "//" + location.hostname + ":" + location.port;

// Firefox check for formatting
if (typeof InstallTrigger !== 'undefined') {
	var IS_FIREFOX = true;
} else {
	var IS_FIREFOX = false;
}

export const EXPERIMENTS = {

	jnd: {
		trial_structure: ["foundational", "design", "custom"],
		graph_type: ["scatter", "strip", "ring"],
		balancing_type: ["random", "latin_square", "blocked_latin_square", "custom"],
		docs: {
			display_name: "JND",
			bootstrap_label: "primary",
			description: "The JND experiment essentially presents users with 2 plots, one with a higher correlation than the other. " +
				"The user then must choose the graph with the higher correlation by pressing the 'z' or 'm' keys to select " +
				"the left or right graphs respectively.",
			spec: "./docs/manual/jnd.md",
			developer: "Caitlin Coyiuto"
		},
		instructions: {
			default_images: ["scatter_1.png", "scatter_2.png"],
			default_html: `
				<div align = 'center' style='display: block' > <font size="5">
					<p>In this experiment, two graphs will appear side-by-side.
	          		<br> Indicate which graph is more correlated by pressing the Z or M key. 
	          		<br> Press any key to continue.
	          		</p>
          			<div style='float: left; margin-right: 5vw'>
          				<img style= 'width: 20vw' src='${ADDRESS}/img/instructions/jnd/image1.png'></img>
          				<p class='small'><strong>Press the Z key</strong></p>
          			</div>
          			<div style='float:right; margin-left: 5vw'>
          				<img style= 'width: 20vw' src='${ADDRESS}/img/instructions/jnd/image2.png'></img>
          				<p class='small'><strong>Press the M key</strong></p>
          			</div>
	          	</div> 
            `
		},
		attributes: {
			base_correlation: {
				required: true,
				docs: {
					desc: "Correlation (R) value of the base distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			block: {
				required: false,
				docs: {
					desc: "Determines the block the subcondition belongs to for Blocked Latin Square Balancing",
					input_type: INPUT_TYPES.string
				}
			},
			max_step_size: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			direction: {
				required: true,
				valid_inputs: ["above", "below", "symmetric"],
				docs: {
					desc: "Determines the direction for the distribution's correlation. ",
					input_type: INPUT_TYPES.boolean
				}
			},
			initial_difference: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			feedback_background_color: {
				required: true,
				docs: {
					desc: "Changes background color of feedback displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			dist_attributes: {
				required: false,
				docs: {
					desc: "Attributes for the distractor graph in distractor conditons.",
					input_type: INPUT_TYPES.assoc_array
				}
			},

			dimension: {
				required: false,
				docs: {
					desc: "Indicates color axis of the condition. 'chro' = chromaticity, 'lum' = luminance, 'hue' = hue. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			reference_start: {
				required: false,
				docs: {
					desc: "The value used to initialize the adjusted statistic for the first time. If none specified, defaults to using the MAX/MIN calculations defined in jnd.js.",
					input_type: INPUT_TYPES.number
				}
			},
			task: {
				required: false,
				valid_inputs: ["correlation", "numerosity"],
				docs: {
					desc: "The type of task. If is correlation, uses the adjusted correlation value to staircase. If numerosity, uses the number of points to staircase.",
					input_type: INPUT_TYPES.string
				}
			},
			subcondition_instructions: {
				required: false,
				docs: {
					desc: "HTML to pass as stimulus into a html-keyboard-response jsPsych object. Displays this instruction block prior to a subcondition starting.",
					input_type: INPUT_TYPES.string
				}
			},
			adjusted_correlation_high: {
				required: false,
				docs: {
					desc: "Adjusted value for the high correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			},
			adjusted_correlation_low: {
				required: false,
				docs: {
					desc: "Adjusted value for the low correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			},
		}
	},

	jnd_radius: {
		trial_structure: ["foundational"],
		graph_type: ["shapes"],
		balancing_type: ["random"],
		instructions: {
			default_images: ["circle.png", "square.png"],
			default_html: `
				<div align = 'center' style = 'margin-top: ${IS_FIREFOX ? "35vh" : "0"}; height: 35vh; display: block'>
			        <p>In this experiment, two shapes will appear side-by-side.
			        <br>
			        Indicate which graph is has a <b>greater area</b> by pressing the Z or M key. </p><p>
			        <div style='height: auto;'>
			          <div style='float: left;'>
			            <img src="${ADDRESS}/img/instructions/jnd_radius/image1.png"></img> 
			            <p class='small'><strong>Press the Z key</strong></p>
			          </div>

			          <div style='float: right;'>
			            <img src="${ADDRESS}/img/instructions/jnd_radius/image2.png"></img>
			            <p class='small'><strong>Press the M key</strong></p>
			          </div>
			        </div>
		      	</div>  
		      	<br>
		      	<div style='text-align: center; display: block'><br><br><br><p>Press any key to continue.</div>
			`
		},
		docs: {
			display_name: "JND Radius",
			bootstrap_label: "info",
			description: "The JND experiment essentially presents users with 2 different shapes, one with a bigger area than the other. " +
				"The user then must choose the graph with the greater area by pressing the 'z' or 'm' keys to select the left " +
				"or right graphs respectively.",
			spec: "./docs/manual/jnd_radius.md",
			developer: "Caitlin Coyiuto"
		},
		attributes: {
			base_radius: {
				required: true,
				docs: {
					desc: "The radius of the base shape in cm.",
					input_type: INPUT_TYPES.number
				}
			},
			initial_difference: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted radius value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			converge_from_above: {
				required: true,
				docs: {
					desc: "Determines whether the shape radius that the user adjusts is higher (true) or lower (false) than the base shape radius.",
					input_type: INPUT_TYPES.boolean
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			feedback_background_color: {
				required: true,
				docs: {
					desc: "Changes background color of feedback displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
		}
	},

	stevens: {
		trial_structure: ["foundational", "design", "custom"],
		graph_type: ["scatter", "strip", "ring"],
		balancing_type: ["random", "latin_square", "blocked_latin_square", "custom"],
		docs: {
			display_name: "Stevens",
			bootstrap_label: "success",
			description: "The Stevens experiment presents users with 3 plots. The task involves having to adjust the correlation of the middle " +
				"plot by pressing the 'z' or 'm' keys to increase or decrease the correlation respectively. The goal is to adjust the " +
				"middle plot so that its correlation is a midpoint between the 2 other plots.",
			spec: "./docs/manual/stevens.md",
			developer: "Caitlin Coyiuto"
		},
		instructions: {
			default_images: ["scatter.png"],
			default_html: `
				<div align = 'center'> <font size="5">
				<p> In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the center graph <br> so that its correlation is roughly
            	the <b>midpoint</b> between the left and right graphs. <br><br>
            	<b>m</b> increases the correlation. 
				<br>
            	<b>z</b> decreases the correlation. 
				<br>
				<br>
            	<div style='float: left; margin-bottom: 25px;'><img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/image1.png'></img></div>
            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
            	<br> Press any key to continue. </div> 
			`
		},
		attributes: {
			round_type: {
				valid_inputs: ["test", "consistency"],
				required: false,
				docs: {
					desc: "The type of trial. Test and consistency are types specific to foundational and differentiates which set of subconditions " +
						"are presented first.",
					input_type: INPUT_TYPES.string
				}
			},
			trials_per_round: {
				required: true,
				docs: {
					desc: "How many trials are run for a given subcondition. (E.g. how many times a person presses spacebar for a given subcondition.)",
					input_type: INPUT_TYPES.number
				}
			},
			high_ref: {
				required: true,
				docs: {
					desc: "The maximum correlation of the plot with the greater correlation.",
					input_type: INPUT_TYPES.number
				}
			},
			low_ref: {
				required: true,
				docs: {
					desc: "The minimum correlation of the plot with the lower correlation.",
					input_type: INPUT_TYPES.number
				}
			},
			starting_high_ref: {
				required: false,
				docs: {
					desc: "The starting high value of the middle plot.",
					input_type: INPUT_TYPES.number
				}
			},
			starting_low_ref: {
				required: false,
				docs: {
					desc: "The starting low value of the middle plot.",
					input_type: INPUT_TYPES.number
				}
			},
			regen_rate: {
				required: true,
				docs: {
					desc: "How long the graphs are presentation before regenerated in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			dist_attributes: {
				required: false,
				docs: {
					desc: "Attributes for the distractor graph in distractor conditons.",
					input_type: INPUT_TYPES.assoc_array
				}
			},

			dimension: {
				required: false,
				docs: {
					desc: "Indicates color axis of the condition. 'chro' = chromaticity, 'lum' = luminance, 'hue' = hue. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			block: {
				required: false,
				docs: {
					desc: "Determines the block the subcondition belongs to for Blocked Latin Square Balancing",
					input_type: INPUT_TYPES.string
				}
			}
		}
	},

	hybrid: {
		trial_structure: ["design", "custom"],
		graph_type: ["scatter"],
		balancing_type: ["blocked_latin_square", "custom"],
		docs: {
			display_name: "Hybrid",
			bootstrap_label: "info",
			description: "The Hybrid (or Sandwich) Experiment combines the JND and Stevens Experiment by having blocks of them run in succession. " +
				"The order is:  Stevens A sub condition 1, JND A, Stevens A subcondition 2, ... , Stevens N suibcondtiion 1, JND N, Stevens N subcondtion 2.",
			developer: "Jose Navarro"
		},
		instructions: {
			default_images: ["scatter.png"],
			default_html: `
				<div align = 'center'> 
				<font size="5"><p>In this experiment, you will be presented with Scatter Plots to do two tasks: an Estimation and a JND Task. 
				<br>
				<br>
				You will be using the <b>z</b>, <b>m</b>, and <b>Space</b> keys on your keyboard for these tasks.
				<br>
            	<br> Press any key to continue to the next set of instructions. </div> 
			`
		},
		attributes: {
			block: {
				required: true,
				docs: {
					desc: "Condition Block for the Hybrid Coditions. Must be the same block defined in the JND and Stevens Condition",
					input_type: INPUT_TYPES.string
				}
			}
		}
	},

	estimation: {
		trial_structure: ["custom"],
		graph_type: ["shapes"],
		balancing_type: ["random", "none"],
		docs: {
			display_name: "Estimation",
			bootstrap_label: "danger",
			description: "The Estimation experiment presents users with 2 shapes side-by-side. The task involves having to adjust the size of the " +
				"modifiable shape so that it is the same size as the reference shape.",
			spec: "./docs/manual/estimation.md",
			developer: "Zoe Zhao"
		},
		instructions: {
			default_images: ["equil_triangle.png", "isosc_triangle.png"],
			default_html: `
				<div align = 'center'> 
					<p>In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the size of the modifiable shape
					<br> so that it's size is roughly the <u>same</u> as the reference shape. 
					<br><br>
               		<div>
               			<img width="20%"src='${ADDRESS}/img/instructions/estimation/image1.png'></img>
               			<img width="20%"src='${ADDRESS}/img/instructions/estimation/image2.png'></img>
               		</div>
	                <b>m</b> increases the size. <br>
	                <b>z</b> decreases the size. <br><br>
	                <div style='float: left; margin-bottom: 25px;'></div>
	                <br> When you are done adjusting the size, hit the <b>spacebar</b>.
	                <br> Press any key to continue. 
                </div>
                `
		},
		attributes: {
			trials_per_round: {
				required: true,
				docs: {
					desc: "How many trials are run for a given subcondition. (E.g. how many times a person presses spacebar for a given subcondition.)",
					input_type: INPUT_TYPES.number
				}
			},
			max_step_size: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next modifiable shape's size based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			mod_fill: {
				required: true,
				docs: {
					desc: "Fill color of the modifiable shape. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			mod_max_size: {
				required: true,
				docs: {
					desc: "Maximum size of the modifiable shape in cm.",
					input_type: INPUT_TYPES.number
				}
			},
			mod_min_size: {
				required: true,
				docs: {
					desc: "Minimum size of the modifiable shape in cm.",
					input_type: INPUT_TYPES.number
				}
			},
			mod_outline: {
				required: true,
				docs: {
					desc: "Outline color of the modifiable shape. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			mod_rotate_by: {
				required: true,
				docs: {
					desc: "Rotation of the modifiable shape in degrees.",
					input_type: INPUT_TYPES.number
				}
			},
			mod_shape: {
				required: true,
				valid_inputs: ["circle", "triangle", "square", "line", "rectangle"],
				docs: {
					desc: "Shape type of the modifiable shape. Can be 'circle', 'triangle', 'square', 'line', or 'triangle'.",
					input_type: INPUT_TYPES.string
				}
			},
			ref_fill: {
				required: true,
				docs: {
					desc: "Fill color of the reference shape. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			ref_outline: {
				required: true,
				docs: {
					desc: "Outline color of the reference shape. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			ref_shape: {
				required: true,
				valid_inputs: ["circle", "triangle", "square", "line", "rectangle"],
				docs: {
					desc: "Shape type of the reference shape. Can be 'circle', 'triangle', 'square', 'line', or 'triangle'.",
					input_type: INPUT_TYPES.string
				}
			},
			ref_size: {
				required: true,
				docs: {
					desc: "Size of the reference shape in cm.",
					input_type: INPUT_TYPES.number
				}
			},
			ref_rotate_by: {
				required: true,
				docs: {
					desc: "Rotation of the reference shape in degrees.",
					input_type: INPUT_TYPES.number
				}
			},
			width_height_ratio: {
				required: false,
				docs: {
					desc: "Width-height ratio for the modifiable shape.",
					input_type: INPUT_TYPES.number
				}
			},
			interf_shape: {
				valid_inputs: ["circle", "triangle", "square", "line", "rectangle"],
				required: false,
				docs: {
					desc: "The interfence shape positioned behind the modifiable shape.",
					input_type: INPUT_TYPES.string
				}
			},
			mod_side_shapes: {
				required: false,
				docs: {
					desc: "The shapes on the MODIFIABLE side. Associative array has keys 'ref' (S2') and 'mod' (S1'), and values are type of shape." +
						"E.g. {'ref': 'triangle', 'mod': 'circle'}.",
					input_type: INPUT_TYPES.assoc_array
				}
			},
			ref_side_shapes: {
				required: false,
				docs: {
					desc: "The shapes on the REFERENCE side. Associative array has keys 'main' (S2) and 'sub' (S1), and values are type of shape." +
						"E.g. {'main': 'square', 'sub': 'square'}.",
					input_type: INPUT_TYPES.assoc_array
				}
			},
			interf_ratio: {
				required: false,
				docs: {
					desc: "Ratio of the modifiable shape's length between interference (bg) shape and foreground shape. Is S1':S2' size (grey to blue shape)." +
						"Applicable for interference conditions that are not 'multi'.",
					input_type: INPUT_TYPES.number
				}
			},
			interf_fill: {
				required: false,
				docs: {
					desc: "Fill color of the interference shape(s). Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			interf_outline: {
				required: false,
				docs: {
					desc: "Outline color of the interference shape(s). Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			mod_side_alignment: {
				valid_inputs: ["overlapping-center", "diagonal", "overlapping-bottom", "overlapping-bottom-edge", "slice-bottom", "overlapping-top-left-corner"],
				required: false,
				docs: {
					desc: "For the modifiable side, the type of alignment for the shapes.",
					input_type: INPUT_TYPES.string
				}
			},
			mod_ratio: {
				required: false,
				docs: {
					desc: "Ratio of the modifiable:non-modifiable shape areas (modifiable/non-modifiable) for the modifiable side." +
						"Applicable for interference conditions that include 'multi'.",
					input_type: INPUT_TYPES.number
				}
			},
			ref_side_alignment: {
				valid_inputs: ["vertical-left", "overlapping-bottom", "vertical-centered", "vertical-left-cutout"],
				required: false,
				docs: {
					desc: "For the reference side, the type of alignment for the shapes.",
					input_type: INPUT_TYPES.string
				}
			},
			ref_interf_overlap: {
				required: false,
				docs: {
					desc: "For the reference side, whether the interference shape overlaps (is behind) the main shape or not." +
						"Applicable for interference conditions that include 'multi'.",
					input_type: INPUT_TYPES.boolean
				}
			},
			ref_ratio: {
				required: false,
				docs: {
					desc: "Ratio of the sub:main areas (sub/main) for the reference side.",
					input_type: INPUT_TYPES.number
				}
			},
			flicker_ref_durations: {
				required: false,
				docs: {
					desc: "Determines the on and off duration of the flicker for the ref side shapes in ms. " +
						"E.g. if flickering ref shapes on for 100 ms and off for 300 ms, would be {on: 100, off: 300}.",
					input_type: INPUT_TYPES.assoc_array
				}
			},
			target_area_ratio: {
				required: false,
				docs: {
					desc: "For absolute area ratio conditions, the target ratio that the subject is aiming for when making adjustments.",
					input_type: INPUT_TYPES.number
				}
			},
		}
	},

	numerosity: {
		trial_structure: ["foundational"],
		graph_type: ["scatter"],
		balancing_type: ["random"],
		docs: {
			display_name: "Numerosity",
			bootstrap_label: "info",
			description: "The Numerosity experiment presents users with 1 randomly distributed plot. The task involves counting the number of target points" +
				"Before the stimulus expires and moves onto the response page. The goal is to adjust the slider  " +
				"on the response page to estimate the number of target points the user saw",
			spec: "./docs/manual/numerosity.md",
			developer: "Kevin Sun"
		},
		instructions: {
			default_images: ["scatter_1.png"],
			default_html: `
			<div align = 'center'>
			<p>You will fixate on the cross displayed in the center of the screen before each trial. 
			<p>Keep your attention there and watch for a display colored squares to appear.
			<p>Afterwards you will be asked to estimate how many sqaures of a color you saw 
			<p>Afterwards you will be asked to estimate how many of this square you saw.
			<div style='height: 200px; display: block;'>
			<img style= 'width: 10vw' src='${ADDRESS}/img/instructions/numerosity/image1.png'></img>
			</div>
			<div> <p>Press any key to continue.</div>
			</div>     
            `
		},
		attributes: {
			distribution_type: {
				valid_inputs: ["random"],
				required: true,
				docs: {
					desc: "Determines how the distribution is computed.",
					input_type: INPUT_TYPES.string
				}
			},
			row: {
				required: true,
				docs: {
					desc: "Number of unique possible x-coordinates for points to be plotted",
					input_type: INPUT_TYPES.number
				}
			},
			col: {
				required: true,
				docs: {
					desc: "Number of unique possible y-coordinates for points to be plotted",
					input_type: INPUT_TYPES.number
				}
			},
			target_num_points: {
				required: true,
				docs: {
					desc: "Number of target points",
					input_type: INPUT_TYPES.number
				}
			},
			target_color: {
				required: false,
				docs: {
					desc: "Color of target points",
					input_type: INPUT_TYPES.string
				}
			},
			target_shape: {
				required: false,
				docs: {
					desc: "Shape of target points",
					input_type: INPUT_TYPES.string
				}
			},
			dist_num_points: {
				required: false,
				docs: {
					desc: "Number of distractor points",
					input_type: INPUT_TYPES.number
				}
			},
			dist_color: {
				required: false,
				docs: {
					desc: "Color of distractor points",
					input_type: INPUT_TYPES.string
				}
			},
			dist_shape: {
				required: false,
				docs: {
					desc: "Shape of distractor points",
					input_type: INPUT_TYPES.string
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			alternate_scaling: {
				required: false,
				docs: {
					desc: "Indictates the experiment does not pre-scale the coordinates generated into the range [0,1], alternate scaling will be used",
					input_type: INPUT_TYPES.boolean
				}
			}
		}
	},

	visual_search: {
		trial_structure: ["foundational"],
		graph_type: ["scatter"],
		balancing_type: ["random"],
		docs: {
			display_name: "Visual Search",
			bootstrap_label: "warning",
			description: `The Visual Search experiment presents users with a target square of a certain color before the
						experiment begins. After which, the user will see 1 randomly distributed plot and must determine if
						the target square is in the plot`,
			spec: "./docs/manual/visual_search.md",
			developer: "Kevin Sun"
		},
		instructions: {
			default_images: ["scatter_1.png"],
			default_html: "<div align = 'center'>" +
				"<p>You will fixate on the cross displayed in the center of the screen before each trial." +
				"<p>Keep your attention there and watch for a display of different colored squares to appear." +
				"<p>Please press the <b>“Z” key</b> if you see the target colored square, please press the <b>“M” key</b> if you believe it was absent from the trial." +
				"<div style='height: 200px; display: block;'>" +
				`<img style= 'width: 10vw' src='${ADDRESS}/img/instructions/visual_search/image1.png'></img>` +
				"</div>" + "<div> <p>Press any key to continue.</div>" +
				"</div>"
		},
		attributes: {
			distribution_type: {
				valid_inputs: ["random"],
				required: true,
				docs: {
					desc: "Determines how the distribution is computed.",
					input_type: INPUT_TYPES.string
				}
			},
			row: {
				required: true,
				docs: {
					desc: "Number of unique possible x-coordinates for points to be plotted",
					input_type: INPUT_TYPES.number
				}
			},
			col: {
				required: true,
				docs: {
					desc: "Number of unique possible y-coordinates for points to be plotted",
					input_type: INPUT_TYPES.number
				}
			},
			num_points: {
				required: true,
				docs: {
					desc: "How many points are in the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			target_present: {
				required: true,
				docs: {
					desc: "Whether or not the target is in the distribution",
					input_type: INPUT_TYPES.boolean
				}
			},
			target_color: {
				required: false,
				docs: {
					desc: "Color of the points of the target distribution. Takes in color name (e.g. 'RED') or HEX value. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			target_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the target distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			target_num_points: {
				required: false,
				docs: {
					desc: "Number of target points",
					input_type: INPUT_TYPES.number
				}
			},
			dist_color: {
				required: false,
				docs: {
					desc: "Color of the points of the distractor distribution. Takes in color name (e.g. 'RED') or HEX value. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the distractor distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_point_size: {
				required: false,
				docs: {
					desc: "Size of the distractor point in pixels. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_num_points: {
				required: false,
				docs: {
					desc: "Number of distractor points",
					input_type: INPUT_TYPES.number
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			alternate_scaling: {
				required: false,
				docs: {
					desc: "Indictates the experiment does not pre-scale the coordinates generated into the range [0,1], alternate scaling will be used",
					input_type: INPUT_TYPES.boolean
				}
			}
		}
	},

	sequencing: {
		trial_structure: ["foundational"],
		graph_type: ["scatter", "strip"],
		balancing_type: ["random", "latin_square", "blocked_latin_square"],
		docs: {
			display_name: "Sequencing",
			bootstrap_label: "primary",
			description: "The Sequencing experiment presents users with 1 plot and then another, one with a higher correlation than the other. " +
				"The user then must choose the graph with the higher correlation by pressing the 'z' or 'm' keys to select " +
				"the first or second graph respectively.",
			spec: "./docs/manual/jnd.md", //TO-DO make a real doc
			developer: "Jose Navarro, Ford Atwater"
		},
		instructions: {
			default_images: ["scatter_1.png", "scatter_2.png"], // TODO
			default_html: `
			<div align = 'center' style='display: block' >
				<p>In this experiment, two graphs will appear sequentially, one and then another.
				  <br><br> Indicate which graph is more correlated by pressing
				  <br> the <strong>Z key</strong> for the first graph, or the <strong>M key</strong> for the second graph.
				  </p>
				  <div>
				  	  <img src='${ADDRESS}/img/instructions/sequencing/sequencing_instructions.png'></img>
				  <div>
				  <br>
				<p> Press any key to continue.</p>
			  </div>
		`
		},
		attributes: {
			distribution_type: {
				valid_inputs: ["gaussian", "uniform"],
				required: true,
				docs: {
					desc: "Determines how the distribution is computed. ",
					input_type: INPUT_TYPES.string
				}
			},
			base_correlation: {
				required: true,
				docs: {
					desc: "Correlation (R) value of the base distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			stimulus_duration: {
				required: true,
				docs: {
					desc: "Duration of first graph in sequence in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			distractor_duration: {
				required: true,
				docs: {
					desc: "Duration of distractor in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			error: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			max_step_size: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			converge_from_above: {
				required: true,
				docs: {
					desc: "Determines whether the distribution's correlation that the user adjusts is higher (true) or lower (false) than the base distribution's correlation.",
					input_type: INPUT_TYPES.boolean
				}
			},
			initial_difference: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			num_points: {
				required: true,
				docs: {
					desc: "How many points are in the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			mean: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			SD: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			num_SD: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			feedback_background_color: {
				required: true,
				docs: {
					desc: "Changes background color of feedback displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			dist_base: {
				required: false,
				docs: {
					desc: "Correlation (R) value of the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_error: {
				required: false,
				docs: {
					desc: "Value used in computing the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_num_points: {
				required: false,
				docs: {
					desc: "How many points are in the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_color: {
				required: false,
				docs: {
					desc: "Color of the points of the distractor distribution. Takes in color name (e.g. 'RED') or HEX value. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the distractor distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_point_size: {
				required: false,
				docs: {
					desc: "Size of the distractor point in pixels. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			target_color: {
				required: false,
				docs: {
					desc: "Color of the points of the target distribution. Takes in color name (e.g. 'RED') or HEX value. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			target_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the target distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dimension: {
				required: false,
				docs: {
					desc: "Indicates color axis of the condition. 'chro' = chromaticity, 'lum' = luminance, 'hue' = hue. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			reference_start: {
				required: false,
				docs: {
					desc: "The value used to initialize the adjusted statistic for the first time. If none specified, defaults to using the MAX/MIN calculations defined in jnd.js.",
					input_type: INPUT_TYPES.number
				}
			},
			task: {
				required: false,
				valid_inputs: ["correlation", "numerosity"],
				docs: {
					desc: "The type of task. If is correlation, uses the adjusted correlation value to staircase. If numerosity, uses the number of points to staircase.",
					input_type: INPUT_TYPES.string
				}
			},
			subcondition_instructions: {
				required: false,
				docs: {
					desc: "HTML to pass as stimulus into a html-keyboard-response jsPsych object. Displays this instruction block prior to a subcondition starting.",
					input_type: INPUT_TYPES.string
				}
			},
			adjusted_correlation_high: {
				required: false,
				docs: {
					desc: "Adjusted value for the high correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			},
			adjusted_correlation_low: {
				required: false,
				docs: {
					desc: "Adjusted value for the low correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			}
		}
	},

	sequencing_side_by_side: {
		trial_structure: ["foundational"],
		graph_type: ["scatter", "strip"],
		balancing_type: ["random", "latin_square", "blocked_latin_square"],
		docs: {
			display_name: "Sequencing Side-by-Side",
			bootstrap_label: "primary",
			description: "The Sequencing experiment presents users with 2 plots one with a higher correlation than the other. " +
				"The user is then shown a distractor and a blank screen. At the blank screen they choose the graph with the higher correlation by pressing the 'z' or 'm' keys to select " +
				"the first or second graph respectively.",
			spec: "./docs/manual/jnd.md", //TO-DO make a real doc
			developer: "Jose Navarro, Ford Atwater, Aaron Wong"
		},
		instructions: {
			default_images: ["scatter_1.png", "scatter_2.png"], // TODO
			default_html: `
			<div align = 'center' style='display: block' >
				<p>In this experiment, two graphs will side by side, followed by a distractor screen, and finally a blank screen.
				  <br><br> On the blank screen indicate which graph is more correlated by pressing
				  <br> the <strong>Z key</strong> for the graph on the left, or the <strong>M key</strong> for the graph on the right.
				  </p>
				  <div>
				  	  <img src='${ADDRESS}/img/instructions/sequencing_side_by_side/instructions.png'></img>
				  <div>
				  <br>
				<p> Press any key to continue.</p>
			  </div>
		`
		},
		attributes: {
			distribution_type: {
				valid_inputs: ["gaussian", "uniform"],
				required: true,
				docs: {
					desc: "Determines how the distribution is computed. ",
					input_type: INPUT_TYPES.string
				}
			},
			base_correlation: {
				required: true,
				docs: {
					desc: "Correlation (R) value of the base distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			stimulus_duration: {
				required: true,
				docs: {
					desc: "Duration of first graph in sequence in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			distractor_duration: {
				required: true,
				docs: {
					desc: "Duration of distractor in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			error: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			max_step_size: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			converge_from_above: {
				required: true,
				docs: {
					desc: "Determines whether the distribution's correlation that the user adjusts is higher (true) or lower (false) than the base distribution's correlation.",
					input_type: INPUT_TYPES.boolean
				}
			},
			initial_difference: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			num_points: {
				required: true,
				docs: {
					desc: "How many points are in the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			mean: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			SD: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			num_SD: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			text_color: {
				required: true,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			feedback_background_color: {
				required: true,
				docs: {
					desc: "Changes background color of feedback displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			dist_base: {
				required: false,
				docs: {
					desc: "Correlation (R) value of the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_error: {
				required: false,
				docs: {
					desc: "Value used in computing the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_num_points: {
				required: false,
				docs: {
					desc: "How many points are in the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			dist_color: {
				required: false,
				docs: {
					desc: "Color of the points of the distractor distribution. Takes in color name (e.g. 'RED') or HEX value. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the distractor distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_point_size: {
				required: false,
				docs: {
					desc: "Size of the distractor point in pixels. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			target_color: {
				required: false,
				docs: {
					desc: "Color of the points of the target distribution. Takes in color name (e.g. 'RED') or HEX value. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			target_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the target distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dimension: {
				required: false,
				docs: {
					desc: "Indicates color axis of the condition. 'chro' = chromaticity, 'lum' = luminance, 'hue' = hue. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			reference_start: {
				required: false,
				docs: {
					desc: "The value used to initialize the adjusted statistic for the first time. If none specified, defaults to using the MAX/MIN calculations defined in jnd.js.",
					input_type: INPUT_TYPES.number
				}
			},
			task: {
				required: false,
				valid_inputs: ["correlation", "numerosity"],
				docs: {
					desc: "The type of task. If is correlation, uses the adjusted correlation value to staircase. If numerosity, uses the number of points to staircase.",
					input_type: INPUT_TYPES.string
				}
			},
			subcondition_instructions: {
				required: false,
				docs: {
					desc: "HTML to pass as stimulus into a html-keyboard-response jsPsych object. Displays this instruction block prior to a subcondition starting.",
					input_type: INPUT_TYPES.string
				}
			},
			adjusted_correlation_high: {
				required: false,
				docs: {
					desc: "Adjusted value for the high correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			},
			adjusted_correlation_low: {
				required: false,
				docs: {
					desc: "Adjusted value for the low correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			}
		}
	},

	sequencing_symbols: {
		trial_structure: ["design", "custom"],
		graph_type: ["scatter", "strip", "mixed"],
		balancing_type: ["random", "latin_square", "blocked_latin_square", "custom"],
		docs: {
			display_name: "Sequencing Symbols",
			bootstrap_label: "primary",
			description: "The Sequencing experiment presents users with 2 plots one with a higher correlation than the other. " +
				"The user is then shown a distractor and a blank screen. At the blank screen they choose the graph with the higher correlation by pressing the 'z' or 'm' keys to select " +
				"the first or second graph respectively. However, this compares different types of graphs to each other using a scatterplot as the base comparison graph. ",
			spec: "./docs/manual/jnd.md", //TO-DO make a real doc
			developer: "Jose Navarro, Aaron Wong, Richard Mao, Dusty Fox"
		},
		instructions: {
			default_images: ["scatter_1.png", "scatter_2.png"], // TODO
			default_html: `
			<div align = 'center' style='display: block' >
				<p>In this experiment, two graphs will side by side, followed by a distractor screen, and finally a blank screen.
				  <br><br> On the blank screen indicate which graph is more correlated by pressing
				  <br> the <strong>Z key</strong> for the graph on the left, or the <strong>M key</strong> for the graph on the right.
				  </p>
				  <div>
				  	  <img src='${ADDRESS}/img/instructions/sequencing_symbols/instructions.png'></img>
				  <div>
				  <br>
				<p> Press any key to continue.</p>
			  </div>
		`
		},
		attributes: {
			base_correlation: {
				required: true,
				docs: {
					desc: "Correlation (R) value of the base distribution.",
					input_type: INPUT_TYPES.number
				}
			},

			stimulus_duration: {
				required: true,
				docs: {
					desc: "Duration of first graph in sequence in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			distractor_duration: {
				required: true,
				docs: {
					desc: "Duration of distractor in ms.",
					input_type: INPUT_TYPES.number
				}
			},
			block: {
				required: false,
				docs: {
					desc: "Determines the block the subcondition belongs to for Blocked Latin Square Balancing",
					input_type: INPUT_TYPES.string
				}
			},
			max_step_size: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			direction: {
				required: true,
				docs: {
					desc: "Determines the direction of the staircasing algorithm, either, above, below or symmetric.",
					input_type: INPUT_TYPES.string
				}
			},
			initial_difference: {
				required: true,
				docs: {
					desc: "One of the values used to calculate the next adjusted correlation value based on user's input.",
					input_type: INPUT_TYPES.number
				}
			},
			graph_a_attributes: {
				required: true,
				docs: {
					desc: "Graphing attributes for graph a.",
					input_type: INPUT_TYPES.assoc_array
				}
			},
			graph_b_attributes: {
				required: true,
				docs: {
					desc: "Graphing attributes for graph b.",
					input_type: INPUT_TYPES.assoc_array
				}
			},
			text_color: {
				required: false,
				docs: {
					desc: "Changes color of the text in the experiment. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			feedback_background_color: {
				required: true,
				docs: {
					desc: "Changes background color of feedback displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			task: {
				required: false,
				valid_inputs: ["correlation", "numerosity"],
				docs: {
					desc: "The type of task. If is correlation, uses the adjusted correlation value to staircase. If numerosity, uses the number of points to staircase.",
					input_type: INPUT_TYPES.string
				}
			},
			subcondition_instructions: {
				required: false,
				docs: {
					desc: "Whether if this block/condition has instructions defined in conditions-config.",
					input_type: INPUT_TYPES.boolean
				}
			},
			adjusted_correlation_high: {
				required: false,
				docs: {
					desc: "Adjusted value for the high correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			},
			adjusted_correlation_low: {
				required: false,
				docs: {
					desc: "Adjusted value for the low correlation distribution of symmetricJND.",
					input_type: INPUT_TYPES.number
				}
			},
			distractor_type: {
				required: false,
				docs: {
					desc: "Distractor Type for the Luminance/Orientation Condition",
					input_type: INPUT_TYPES.string
				}
			},
			z_value: {
				required: false,
				docs: {
					desc: "Determines whether the distractor is random or correlated with the y-value",
					input_type: INPUT_TYPES.string
				}
			}
		}
	},

	//TODO_ensemble_average: double check attributes. we might need 'dimension' as another attribute
	ensemble_average: {
		trial_structure: ["custom"],
		graph_type: ["scatter"],
		balancing_type: ["none", "random"], //TODO_ensemble_average: not sure about balancing type
		docs: {
			display_name: "Ensemble Average",
			bootstrap_label: "warning",
			description: 'The Ensemble Average experiment presents users with a single scatterplot consisting of both target and distractor populations. Users will be cued on which features to attend to, and will be probed on corresponding feature information after each trial.',
			spec: './docs/manual/ensemble_average.md',
			developer: "Devon Kenzie, Jake Moh"
		},
		instructions: {
			default_images: ["distractor_plot_1.png"],
			default_html: "<div align = 'center'>" +
				"<p>Each trial will begin with a cue describing which features to attend to when viewing the scatterplot." +
				"<p>You will then fixate on the cross displayed in the center of the screen before each scatterplot is displayed." +
				"<p>A scatterplot will appear briefly, followed by several probes for corresponding to each scatterplot." +
				"<p>" +
				"<div style='height: 200px; display: block;'>" +
				"< img style= 'width: 10vw' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_1.png' ></img>" +
				"</div>" + "<div> <p>Press any key to continue.</div>" +
				"</div>"
		},
		attributes: {
			distribution_type: {
				valid_inputs: ["gaussian"],
				required: true,
				docs: {
					desc: "Determines how the distribution is computed.",
					input_type: INPUT_TYPES.string
				}
			},
			base_correlation: {
				required: true,
				docs: {
					desc: "Correlation (R) value of the base distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			dist_base: {
				required: false,
				docs: {
					desc: "Correlation (R) value of the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			error: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			dist_error: {
				required: false,
				docs: {
					desc: "Value used in computing the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			num_points: {
				required: true,
				docs: {
					desc: "How many points are in the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			dist_num_points: {
				required: false,
				docs: {
					desc: "How many points are in the distractor distribution. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.number
				}
			},
			mean: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			SD: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			num_SD: {
				required: true,
				docs: {
					desc: "Value used in computing the distribution.",
					input_type: INPUT_TYPES.number
				}
			},
			feedback_background_color: {
				required: true,
				docs: {
					desc: "Changes background color of feedback displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			background_color: {
				required: true,
				docs: {
					desc: "Changes background color of trial displays. Takes in color name (e.g. 'RED') or HEX value.",
					input_type: INPUT_TYPES.string
				}
			},
			target_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the target distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			dist_shape: {
				required: false,
				docs: {
					desc: "Shape of the points of the distractor distribution. Supports shapes defined in attribute point_shape (in graphical attributes). <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},
			mix_by_target_array: {
				required: false,
				docs: {
					desc: "",
					input_type: INPUT_TYPES.string
				}
			},
			mix_by_distractor_array: {
				required: false,
				docs: {
					desc: "",
					input_type: INPUT_TYPES.string
				}
			},
			target_mean_size: {
				required: true,
				docs: {
					desc: "Mean dot size of Target population",
					input_type: INPUT_TYPES.number
				}
			},
			distractor_mean_size: {
				required: true,
				docs: {
					desc: "Mean dot size of Distractor population",
					input_type: INPUT_TYPES.number
				}
			},
			cue: {
				required: true,
				docs: {
					desc: "Cue for an ensemble_average trial (either 'None', 'blue', 'orange', 'less correlated', or 'more correlated')",
					input_type: INPUT_TYPES.string
				}
			},
			size_average_probe: {
				required: true,
				docs: {
					desc: "size average probe for an ensemble_average trial (either 'blue', 'orange', 'less correlated', or 'more correlated')",
					input_type: INPUT_TYPES.string
				}
			},
			/**dimension: {
				required: false,
				docs: {
					desc: "Indicates color axis of the condition. 'chro' = chromaticity, 'lum' = luminance, 'hue' = hue. <b>ONLY applies for conditions starting with 'distractor_'.</b>",
					input_type: INPUT_TYPES.string
				}
			},*/
		}
	},
};
