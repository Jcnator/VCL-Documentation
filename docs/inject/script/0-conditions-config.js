var ADDRESS;

// On the other hand, server side does not have location properties
if (typeof location !== "undefined") {
  ADDRESS = location.protocol + "//" + location.hostname + ":" + location.port;
}

export const CONDITIONS = {
  base: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "latin_square",
    display_name: "Base",
    display_info: {
      description:
        "The standard foundational base condition with no additional manipulation on how the gaussian distributions are displayed or generated.",
      researcher: "Everyone",
      developer: "Caitlin Coyiuto",
    },
  },

  symmetric_jnd: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "latin_square",
    display_name: "SymmetricJND",
    display_info: {
      description:
        "The standard symmetric jnd condition with no additional manipulation on how gaussian distributions are delayed or generated.",
      researcher: "Everyone",
      developer: "Kyle Mas",
    },
  },

  strip_ring_size: {
    experiment: ["jnd", "stevens", "sequencing"],
    graph_type: ["ring"],
    trial_structure: ["foundational"],
    balancing: "latin_square",
    display_name: "Strip Ring Size",
    display_info: {
      description:
        "Ring visualizations where for a given distribution, the x coordinate is the horizontal translation and the y coordinate is the ring radius.",
      researcher: "Main Correlation Team",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p> In this experiment, two graphs will appear one on top of the other.
	          			<br> Indicate which graph is more correlated by pressing the Z or M key.
	          			</p>
	          			<p>
	          			<strong>Press the Z key if the graph <u>above</u> is more correlated.</strong>
	          			<div style='float: center; display: block;'>
	          				<img src='${ADDRESS}/img/instructions/jnd/strip_ring_size.png'></img>
	          			</div>
	          			<strong>Press the M key if the graph <u>below</u> is more correlated.</strong>
	          		</div>
				`,
      },
      stevens: {
        custom_images: ["strip_ring_size.png"],
      },
    },
  },

  stable_line_length_strip: {
    experiment: ["jnd", "stevens", "sequencing"],
    graph_type: ["strip"],
    trial_structure: ["foundational"],
    balancing: "latin_square",
    display_name: "Stable Line Length Strip",
    display_info: {
      description:
        "Strip visualizations where for a given distribution, the x coordinate is the horizontal translation and strip height is constant.",
      researcher: "Main Correlation Team",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p> In this experiment, two graphs will appear one on top of the other.
	          			<br> Indicate which graph is more correlated by pressing the Z or M key.
	          			</p>
	          			<p>
	          			<strong>Press the Z key if the graph <u>above</u> is more correlated.</strong>
	          			<div style='float: center; display: block;'>
	          				<img src='${ADDRESS}/img/instructions/jnd/stable_line_length_strip.png'></img>
	          			</div>
	          			<strong>Press the M key if the graph <u>below</u> is more correlated.</strong>
	          		</div>
				`,
      },
      stevens: {
        custom_images: ["stable_line_length_strip.png"],
      },
    },
  },

  line_length_strip: {
    experiment: ["jnd", "stevens", "sequencing"],
    graph_type: ["strip"],
    trial_structure: ["foundational"],
    balancing: "latin_square",
    display_name: "Line Length Strip",
    display_info: {
      description:
        "Strip visualizations where for a given distribution, the x coordinate is the horizontal translation and the y coordinate is the strip height.",
      researcher: "Main Correlation Team",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p> In this experiment, two graphs will appear one on top of the other.
	          			<br> Indicate which graph is more correlated by pressing the Z or M key.
	          			</p>
	          			<p>
	          			<strong>Press the Z key if the graph <u>above</u> is more correlated.</strong>
	          			<div style='float: center; display: block;'>
	          				<img src='${ADDRESS}/img/instructions/jnd/line_length_strip.png'></img>
	          			</div>
	          			<strong>Press the M key if the graph <u>below</u> is more correlated.</strong>
	          		</div>
				`,
      },
      stevens: {
        custom_images: ["line_length_strip.png"],
      },
    },
  },

  multi_size_scatter: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Multi Size Scatter",
    display_info: {
      description:
        "Standard JND and Stevens with manipulation on size of dots (1.25, 2.5, 5, 10 mm diameter) and " +
        "mix condition (25% of 1.25mm, 25% of 2.5mm etc.).",
      researcher: "Jessica Ip",
      developer: "Kevin Sun",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
      hybrid: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  test_hybrid_scatter: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Test Hybrid Scatter",
    display_info: {
      description: "Test",
      researcher: "Jessica Ip",
      developer: "Nicholas Chin",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  multi_color_scatter_combined: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Multi Color Scatter Combined",
    display_info: {
      description:
        "JND and Stevens sandwich with varying colors of dots (blue, red, green, grey) as well as a mix of the four.",
      researcher: "Edris Wu",
      developer: "Edris Wu",
    },
    instructions: {
      jnd: {
        custom_images: ["multi_color_scatter_combined/multi_color_scatter_combined_mixed_1.png", "multi_color_scatter_combined/multi_color_scatter_combined_mixed_2.png"],
        custom_block_images: {
          block_BLUE_images: ["multi_color_scatter_combined/multi_color_scatter_combined_blue_1.png", "multi_color_scatter_combined/multi_color_scatter_combined_blue_2.png"],
          block_GREEN_images: ["multi_color_scatter_combined/multi_color_scatter_combined_green_1.png", "multi_color_scatter_combined/multi_color_scatter_combined_green_2.png"],
          block_GREY_images: ["multi_color_scatter_combined/multi_color_scatter_combined_grey_1.png", "multi_color_scatter_combined/multi_color_scatter_combined_grey_2.png"],
          block_RED_images: ["multi_color_scatter_combined/multi_color_scatter_combined_red_1.png", "multi_color_scatter_combined/multi_color_scatter_combined_red_2.png"],
          block_MIX_images: ["multi_color_scatter_combined/multi_color_scatter_combined_mixed_1.png", "multi_color_scatter_combined/multi_color_scatter_combined_mixed_2.png"]
        }
      },
      stevens: {
        custom_images: ["multi_color_scatter_combined_mixed_0.5.png"],
        custom_block_images: {
          block_BLUE_images: ["multi_color_scatter_combined/multi_color_scatter_combined_blue_0.5.png",],
          block_GREEN_images: ["multi_color_scatter_combined/multi_color_scatter_combined_green_0.5.png",],
          block_GREY_images: ["multi_color_scatter_combined/multi_color_scatter_combined_grey_0.5.png",],
          block_RED_images: ["multi_color_scatter_combined/multi_color_scatter_combined_red_0.5.png",],
          block_MIX_images: ["multi_color_scatter_combined/multi_color_scatter_combined_mixed_0.5.png",],
        }
      },
    },
  },

  multi_border_combined: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Multi Border Combined",
    display_info: {
      description:
        "JND and Stevens sandwich with scatterplots having different borders. " +
        "The five blocks tested are: 2 borders on the X and Y axes (control), no borders,  X and Y axes and a third border on the right, " +
        "forming a 'U' shape, 3 borders in a C shape, and a full square border, X and Y axes and a third border on the top, forming a 'C' shape, " +
        "and borders on all sides, forming a box",
      researcher: "Edris Wu",
      developer: "Yajas Malhotra",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  multi_shape_scatter_combined: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: ["blocked_latin_square"],
    display_name: "Multi Shape Scatter Combined",
    display_info: {
      description:
        "JND and Stevens sandwich with varying shapes (hollow circle, hollow triangle, solid +, and solid x, and a mix",
      researcher: "Edris Wu",
      developer: "Yajas Malhotra, Jose Navarro",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  multi_luminance_scatter_combined: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Multi Luminance Scatter Combined",
    display_info: {
      description:
        "JND and Stevens sandwich with varying luminance (1/4, 1/2, 3/4, 1) as well as a mix",
      researcher: "Edris Wu",
      developer: "Edris Wu",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  multi_opacity_scatter_combined: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Multi Opacity Scatter Combined",
    display_info: {
      description:
        "JND and Stevens sandwich with varying opacity (1, 3/4, 1/2, 1/4, and mix)",
      researcher: "TBA",
      developer: "Yimeng Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  multi_size_scatter_combined: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Multi Size Scatter Combined",
    display_info: {
      description:
        "JND and Stevens sandwich with varying sizes (0.05, 0.1, 0.2, 0.4) as well as mixed",
      researcher: "Edris Wu",
      developer: "Edris Wu",
    },
    instructions: {
      jnd: {
        custom_images: ["multi_size_scatter_combined/multi_size_scatter_combined_mixed_1.png", "multi_size_scatter_combined/multi_size_scatter_combined_mixed_2.png"],
        custom_block_images: {
          block_05_images: ["multi_size_scatter_combined/multi_size_scatter_combined_0.5_1.png", "multi_size_scatter_combined/multi_size_scatter_combined_0.5_2.png"],
          block_10_images: ["multi_size_scatter_combined/multi_size_scatter_combined_1_1.png", "multi_size_scatter_combined/multi_size_scatter_combined_1_2.png"],
          block_20_images: ["multi_size_scatter_combined/multi_size_scatter_combined_2_1.png", "multi_size_scatter_combined/multi_size_scatter_combined_2_2.png"],
          block_40_images: ["multi_size_scatter_combined/multi_size_scatter_combined_4_1.png", "multi_size_scatter_combined/multi_size_scatter_combined_4_2.png"],
          block_mixed_size_images: ["multi_size_scatter_combined/multi_size_scatter_combined_mixed_1.png", "multi_size_scatter_combined/multi_size_scatter_combined_mixed_2.png"]
        }
      },
      stevens: {
        custom_images: ["multi_size_scatter_combined/multi_size_scatter_combined_mixed_0.5.png"],
        custom_block_images: {
          block_05_images: ["multi_size_scatter_combined/multi_size_scatter_combined_0.5_0.5.png",], //note: 05 is 0.5
          block_10_images: ["multi_size_scatter_combined/multi_size_scatter_combined_1_0.5.png",], //note: 10 is 1.0
          block_20_images: ["multi_size_scatter_combined/multi_size_scatter_combined_2_0.5.png",],
          block_40_images: ["multi_size_scatter_combined/multi_size_scatter_combined_4_0.5.png",],
          block_mixed_size_images: ["multi_size_scatter_combined/multi_size_scatter_combined_mixed_0.5.png",],
          block_mixed_size_images: ["multi_size_scatter_combined/multi_size_scatter_combined_mixed_0.9.png",],
        }
      },
    },
  },

  distractor_rainbow: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Rainbow",
    display_info: {
      description:
        "2-distributions presented on each graph, one the target and one the distractor population. " +
        "Target and distractor population colors will vary. Distractor population correlation always set to 0.3.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_images: ["multi_distractor_1.png", "multi_distractor_2.png"],
      },
    },
  },

  distractor_square_red_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Red Hue",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/red_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/red_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_red.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_red_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Red Hue",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/red_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/red_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_red.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_red_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Red Lum",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/red_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/red_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_red.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_red_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Red Lum",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/red_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/red_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_red.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_red_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Red Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/red_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/red_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_red.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_red_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Red Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/red_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_red_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/red_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_red.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_yellow_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Yellow Hue",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/yellow_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/yellow_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_yellow.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_yellow_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Yellow Hue",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/yellow_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/yellow_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_yellow.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_yellow_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Yellow Lum",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/yellow_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/yellow_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_yellow.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_yellow_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Yellow Lum",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/yellow_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/yellow_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_yellow.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_yellow_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Yellow Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/yellow_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/yellow_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_yellow.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_yellow_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Yellow Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/yellow_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_yellow_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/yellow_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_yellow.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_blue_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Blue Hue",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/blue_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/blue_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_blue.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_blue_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Blue Hue",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/blue_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/blue_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_blue.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_blue_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Blue Lum",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/blue_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/blue_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_blue.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_blue_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Blue Lum",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/blue_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/blue_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_blue.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_blue_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Blue Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/blue_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/blue_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_blue.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_blue_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Blue Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/blue_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_blue_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/blue_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_blue.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_green_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Green Hue",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/green_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/green_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_green.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_green_hue: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Green Hue",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/green_hue.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/green_hue.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_green.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_green_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Green Lum Hue",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/green_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/green_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_green.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_green_lum: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Green Lum Hue",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/green_lum.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/green_lum.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_green.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_square_green_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Square Green Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (square shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/green_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/green_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_green.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_diamond_square_green_chrom: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Diamond Square Green Chrom",
    display_info: {
      description:
        "Part of the series of Distractor Diamond-Square experiments across Red/Blue/Green/Yellow colors and for axes Hue, " +
        "Chromaticity and Luminance axes. 2-distributions presented on each graph, one the target (square shaped) and one " +
        "the distractor (diamond shaped). Distractor population correlation always set to 0.2.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
				 	<div align = 'center'>In this experiment, two graphs will appear side-by-side.
                 	<br>
                 	Indicate which graph has a higher correlation of the <b>target-colored squares</b> by pressing the Z or M key.
                 	<br>
                 	Ignore any squares with a <b>distractor</b> color.
                 	<br>
                 	<br>
                 	<img src='${ADDRESS}/img/instructions/jnd/distractors/target-distractors/green_chrom.png'></img>
                 	<br>
                	<div style='height: 43vh; display: block;'>
                  		<div style='float: left;'>
                    		<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_1.png'></img>
                    		<p class='small'><strong>Press the Z key</strong></p>
                  		</div>
	                <div style='float: right;'>
	                  <img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_green_2.png'></img>
	                  <p class='small'><strong>Press the M key</strong></p></div>
	                </div>
	                <div>
	                  <br>
	                  <p>Press any key to continue.</p>
	                </div>
                `,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of the <b>target-colored squares</b> is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<img src='${ADDRESS}/img/instructions/stevens/distractors/target-distractors/green_chrom.png'></img>
	            	<br>
	            	<div style='float: left; margin-bottom: 25px;'>
	            		<img style='width: 80vw' src='${ADDRESS}/img/instructions/stevens/distractors/plots/sample_distractor_green.png'></img>
	            	</div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_multi: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Distractor Multi-Phase (Task 1)",
    display_info: {
      description:
        "Task one of 'Multi-Phase' experiments. 2-distributions presented on each graph, one the target and on the distractor population. " +
        "Target and distractor population colors will vary. Distractor population correlation always set to 0.2. Draws from the first 12 " +
        "subconditions of Design for base values.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_images: ["multi_distractor_1.png", "multi_distractor_2.png"],
      },
    },
  },

  circle_square: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Circle, Square",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["circle.png", "square.png"],
      },
    },
  },

  circle_triangle: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Circle, Triangle",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["circle.png", "triangle.png"],
      },
    },
  },

  square_triangle: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Square, Triangle",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["triangle.png", "square.png"],
      },
    },
  },

  rotSquare_rotTriangle: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Rotated Square, Rotated Triangle",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["rotSquare.png", "rotTriangle.png"],
      },
    },
  },

  slice0_triangle: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Slice 0-Degrees, Triangle",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["slice0.png", "triangle.png"],
      },
    },
  },

  slice45_triangle: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Slice 45-Degrees, Triangle",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["slice45.png", "triangle.png"],
      },
    },
  },

  slice90_triangle: {
    experiment: ["jnd_radius"],
    graph_type: ["shapes"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Slice 90-Degrees, Triangle",
    display_info: {
      description:
        "Manipulation on the size of various shape combinations. Responses are based on the user's ability to " +
        "disciminate shape with the greater area.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd_radius: {
        custom_images: ["slice90.png", "triangle.png"],
      },
    },
  },

  shape_estimation: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Circle, Square, Triangle",
    display_info: {
      description:
        "User must manipulate the size of the reference shape to match that of the target shape. Shapes " +
        "presented are subject to the condition being run.",
      researcher: "Tina Qi",
      developer: "Zoe Zhao",
    },
    instructions: {
      estimation: {
        custom_images: ["circle.png", "triangle.png"],
      },
    },
  },

  line_length: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Line Length",
    display_info: {
      description:
        "User must manipulate the size of the reference shape to match that of the target shape. Shapes " +
        "presented are subject to the condition being run.",
      researcher: "Tina Qi",
      developer: "Zoe Zhao",
    },
    instructions: {
      estimation: {
        custom_images: ["horiz_line.png", "angled_line.png"],
      },
    },
  },

  rectangle_square: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Rectangle, Square",
    display_info: {
      description:
        "User must manipulate the size of the reference shape to match that of the target shape. Shapes " +
        "presented are subject to the condition being run.",
      researcher: "Tina Qi",
      developer: "Zoe Zhao",
    },
    instructions: {
      estimation: {
        custom_images: ["square.png", "rect.png"],
      },
    },
  },

  triangle: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Triangle",
    display_info: {
      description:
        "User must manipulate the size of the reference shape to match that of the target shape. Shapes " +
        "presented are subject to the condition being run.",
      researcher: "Tina Qi",
      developer: "Zoe Zhao",
    },
    instructions: {
      estimation: {
        custom_images: ["equil_triangle.png", "isosc_triangle.png"],
      },
    },
  },

  rectangle_rotated_square_solid: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Rectangle Rotated Square Solid",
    display_info: {
      description:
        "User must manipulate the size of the reference shape to match that of the target shape. Shapes " +
        "presented are subject to the condition being run.",
      researcher: "Tina Qi",
      developer: "Zoe Zhao",
    },
    instructions: {
      estimation: {
        custom_images: ["square.png", "rect.png"],
      },
    },
  },

  rectangle_rotated_square_outline: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Rectangle Rotated Square Outline",
    display_info: {
      description:
        "User must manipulate the size of the reference shape to match that of the target shape. Shapes " +
        "presented are subject to the condition being run.",
      researcher: "Tina Qi",
      developer: "Zoe Zhao",
    },
    instructions: {
      estimation: {
        custom_images: ["square.png", "rect.png"],
      },
    },
  },

  distractor_blue_shades: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Blue Shades",
    display_info: {
      description:
        "Part of series of Distractor Shade experiments for Blue/Red/Yellow. 2-distributions are presented on each graph, one the target and one the distractor population. " +
        "Target is always #699938 (green) and distractor population colors will vary across a Blue, Red or Green for a given condition. " +
        "Distractor population correlation always set to 0.3. Draws on the first 12 subconditions of Design for base values.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, two graphs will appear side-by-side.
		          		<br> Indicate which graph has the more correlated <font color = 'green'>green</font> points by pressing the Z or M key.
		          		</p><p>
		          		<div style='height: 290px; width: 700px; display: block;'>
		          			<div style='float: left;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_1.png'></img>
		          				<p class='small'><strong>Press the Z key</strong></p>
		          			</div>
		          			<div style='float: right;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_2.png'></img>
		          				<p class='small'><strong>Press the M key</strong></p>
		          			</div>
		          		</div>
		          	<div>
		          	<br><p>Press any key to continue.</p>
            	`,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of <font color = 'green'>green</font> points is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<div style='float: left; margin-bottom: 25px;'><img src='${ADDRESS}/img/instructions/stevens/distractors/plots/distractor_shades.png'></img></div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_red_shades: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Red Shades",
    display_info: {
      description:
        "Part of series of Distractor Shade experiments for Blue/Red/Yellow. 2-distributions are presented on each graph, one the target and one the distractor population. " +
        "Target is always #699938 (green) and distractor population colors will vary across a Blue, Red or Green for a given condition. " +
        "Distractor population correlation always set to 0.3. Draws on the first 12 subconditions of Design for base values.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, two graphs will appear side-by-side.
		          		<br> Indicate which graph has the more correlated <font color = 'green'>green</font> points by pressing the Z or M key.
		          		</p><p>
		          		<div style='height: 290px; width: 700px; display: block;'>
		          			<div style='float: left;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_1.png'></img>
		          				<p class='small'><strong>Press the Z key</strong></p>
		          			</div>
		          			<div style='float: right;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_2.png'></img>
		          				<p class='small'><strong>Press the M key</strong></p>
		          			</div>
		          		</div>
		          	<div>
		          	<br><p>Press any key to continue.</p>
            	`,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of <font color = 'green'>green</font> points is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<div style='float: left; margin-bottom: 25px;'><img src='${ADDRESS}/img/instructions/stevens/distractors/plots/distractor_shades.png'></img></div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_yellow_shades: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Yellow Shades",
    display_info: {
      description:
        "Part of series of Distractor Shade experiments for Blue/Red/Yellow. 2-distributions are presented on each graph, one the target and one the distractor population. " +
        "Target is always #699938 (green) and distractor population colors will vary across a Blue, Red or Green for a given condition. " +
        "Distractor population correlation always set to 0.3. Draws on the first 12 subconditions of Design for base values.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, two graphs will appear side-by-side.
		          		<br> Indicate which graph has the more correlated <font color = 'green'>green</font> points by pressing the Z or M key.
		          		</p><p>
		          		<div style='height: 290px; width: 700px; display: block;'>
		          			<div style='float: left;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_1.png'></img>
		          				<p class='small'><strong>Press the Z key</strong></p>
		          			</div>
		          			<div style='float: right;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_2.png'></img>
		          				<p class='small'><strong>Press the M key</strong></p>
		          			</div>
		          		</div>
		          	<div>
		          	<br><p>Press any key to continue.</p>
            	`,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of <font color = 'green'>green</font> points is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<div style='float: left; margin-bottom: 25px;'><img src='${ADDRESS}/img/instructions/stevens/distractors/plots/distractor_shades.png'></img></div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_control_shades: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Control Shades",
    display_info: {
      description:
        "Part of series of Distractor Shade experiments for Blue/Red/Yellow. No distractor population for these presentations, only " +
        "the target population with color #699938 (green). Draws on the first 12 subconditions of Design for base values.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, two graphs will appear side-by-side.
		          		<br> Indicate which graph has the more correlated <font color = 'green'>green</font> points by pressing the Z or M key.
		          		</p><p>
		          		<div style='height: 290px; width: 700px; display: block;'>
		          			<div style='float: left;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_1.png'></img>
		          				<p class='small'><strong>Press the Z key</strong></p>
		          			</div>
		          			<div style='float: right;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_shades_2.png'></img>
		          				<p class='small'><strong>Press the M key</strong></p>
		          			</div>
		          		</div>
		          	<div>
		          	<br><p>Press any key to continue.</p>
            	`,
      },
      stevens: {
        custom_html: `
					<div align = 'center'> <p>In this experiment, you will be using the <b>m</b>
	            	and <b>z</b> keys to adjust the center graph <br> so that the correlation of <font color = 'green'>green</font> points is roughly
	            	the <u>midpoint</u> between the left and right graphs. <br><br>
	            	<b>m</b> increases the correlation. <br>
	            	<b>z</b> decreases the correlation. <br><br>
	            	<div style='float: left; margin-bottom: 25px;'><img src='${ADDRESS}/img/instructions/stevens/distractors/plots/distractor_shades.png'></img></div>
	            	<br> <br> <br> When you are done adjusting the center graph, hit the <b>spacebar</b>.
	            	<br> Press any key to continue. </div>
				`,
      },
    },
  },

  distractor_ratio_pilot: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Distractor Ratio Pilot",
    display_info: {
      description:
        "Pilot for Correlation Discrimination trials of the Numerosity Discrimination experiment. Varying target:distractor numbers with " +
        "ratios 1:1, 1:5, and 3:1, which are counterbalanced (except for 1:1) for target and distractor. Max number of points for a given population is 150. Each combination then must be presented with target " +
        "correlation values of 0.3, 0.6, and 0.9. Total number of subconditions = 5 (ratios) x " +
        "3 (target correlation values) = 15 subconditions. Set target color = blue (#007ebc) and dist color = yellow (#dbc667).",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, two graphs will appear side-by-side.
		          		<br> Indicate which graph has the more correlated <font color = 'blue'>blue</font> points by pressing the Z or M key.
		          		</p><p>
		          		<div style='height: 290px; width: 700px; display: block;'>
		          			<div style='float: left;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_ratio_1.png'></img>
		          				<p class='small'><strong>Press the Z key</strong></p>
		          			</div>
		          			<div style='float: right;'>
		          				<img src='${ADDRESS}/img/instructions/jnd/distractors/plots/sample_distractor_ratio_2.png'></img>
		          				<p class='small'><strong>Press the M key</strong></p>
		          			</div>
		          		</div>
		          	<div>
		          	<br><p>Press any key to continue.</p>
            	`,
      },
    },
  },

  hollow_scatter: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Hollow Scatter",
    display_info: {
      description: "Standard JND/Stevens using a hollow_circle point type.",
      researcher: "Matyas Barta",
      developer: "Youssef Farag",
    },
    instructions: {
      jnd: {
        custom_images: ["hollow_scatter_1.png", "hollow_scatter_2.png"],
      },
      stevens: {
        custom_images: ["hollow_scatter.png"],
      },
    },
  },

  thin_hollow_scatter: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Thin Hollow Scatter",
    display_info: {
      description:
        "Standard JND/Stevens using a thin_hollow_circle point type.",
      researcher: "Matyas Barta",
      developer: "Youssef Farag",
    },
    instructions: {
      jnd: {
        custom_images: [
          "thin_hollow_scatter_1.png",
          "thin_hollow_scatter_2.png",
        ],
      },
      stevens: {
        custom_images: ["thin_hollow_scatter.png"],
      },
    },
  },

  bullseye_scatter: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Bullseye Scatter",
    display_info: {
      description: "Standard JND/Stevens using a bullseye_circle point type.",
      researcher: "Matyas Barta",
      developer: "Youssef Farag",
    },
    instructions: {
      jnd: {
        custom_images: ["bullseye_scatter_1.png", "bullseye_scatter_2.png"],
      },
      stevens: {
        custom_images: ["bullseye_scatter.png"],
      },
    },
  },

  large_dot_sizes: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Large Dot Sizes",
    display_info: {
      description:
        "Standard JND and Stevens with manipulation on size of dots (4.8, 7.1, 10, 14.2 mm diameter) and " +
        "mix condition (25% of 4.8mm, 25% of 7.1mm etc.).",
      researcher: "Matyas Barta",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  mix_point_styles: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Mixed Point Styles",
    display_info: {
      description:
        "Standard JND/Stevens with a combination of the hollow_circle, thin_hollow_circle, bullseye_circle and circle point styles.",
      researcher: "Matyas Barta",
      developer: "Youssef Farag",
    },
    instructions: {
      jnd: {
        custom_images: ["mixed_point_styles_1.png", "mixed_point_styles_2.png"],
      },
      stevens: {
        custom_images: ["mixed_point_styles.png"],
      },
    },
  },

  point_styles_combined: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Point Styles Combined",
    display_info: {
      description:
        "Standard JND/Stevens with a combination of the hollow_circle, thin_hollow_circle, bullseye_circle and circle point styles.",
      researcher: "Matyas Barta",
      developer: "Youssef Farag",
    },
    instructions: {
      jnd: {
        custom_images: ["mixed_point_styles_1.png", "mixed_point_styles_2.png"],
      },
      stevens: {
        custom_images: ["mixed_point_styles.png"],
      },
    },
  },

  distractor_num_corr: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Distractor Numerosity-Correlation",
    display_info: {
      description:
        "Distractor condition of the numerosity-correlation experiment. Total of 18 subconditions, derived from: " +
        "2 types of tasks (numerosity and correlation) x 3 kinds of base correlation (0.3, 0.6, 0.9) x 3 base number of dots (50, 100, 150)." +
        "Initial adjusted correlation or adjusted num points are (0.2, 0.5, 0.8) for each of the base correlation values " +
        "and (40, 90, 140) dots for each of the base number of dots. Distractor population is r = 0.5 with num_points = 100. Complete spec is " +
        "<a href = 'https://blogs.ubc.ca/vclcorrelation/project-overview/correlation-numerosity-discrimination/?cb=654032242'>here</a>. Password = numcorrvcl.",
      researcher: "Madison Elliott",
      developers: "Caitlin Coyiuto, Madison Elliott, Kevin Sun",
    },
    instructions: {
      jnd: {
        custom_html: `
				<div align = 'center'> <p>In each trial of this experiment, you will view two graphs side-by-side, just like the example here.
				<br><b><i>PLEASE CAREFULLY READ THE INSTRUCTIONS BELOW</b></i><br>
				<br> There are two correlation populations on each graph. The <font color = 'RED'>red</font> population is your <b>target population.</b></p><p>
				<br> <i>Always ignore the <font color = 'GREEN'>green</font> dots in both populations.</i><br>
				<i> Base your responses on the <font color = 'RED'>red</font> dots only. <br>
				<br><b>You will be asked two types of questions:</b> <br>
				1. On some trials, you will be asked to select whether the left or right graph has the <b>more correlated</b> <font color = 'RED'>target</font> population,<br>
				2. On other trials, you will be asked to select whether the left or right graph has <b>more data points</b> in the <font color = 'RED'>target</font> population.</i><br>
				<br> You'll go through some practice trials first. <br>
				Use the Z key to select the graph on the left, and the M key to select the graph on the right.<br>
				<br><b>In the full experiment, you will need to remember the instructions for several trials in a row.<br>
				Keep responding according to the last instruction screen you saw, until you get a new instruction.</b><br>
				<br>The more correct responses you make, the fewer trials you will need to complete. More accurate participants finish quicker. All participants are paid the same amount, so getting more trials correct is advantageous!<br>
				<div style='height: 290px; width: 700px; display: block;'>
				<div style='float: left;'><img src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_1.png'></img>
				<p class='small'><strong>Press the Z key</strong></p></div>
				<div style='float: right;'><img src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_1.png'></img>
				<p class='small'><strong>Press the M key</strong></p></div>
				</div><div> <br><p>If you're sure you understand, you can maximize your browser and move your cursor off screen now.</p>
				<p>Press any key to continue to the experiment.</p> </div>
				</div>
				`,
      },
    },
  },

  square_circle_interference: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Square, Circle Interference",
    display_info: {
      description:
        "User must manipulate the size of the modifiable shape (equil. triangle) to match that of the reference shape (square). " +
        "Interference shape (circle or square) is displayed behind the modifiable shape on some subconditions.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
  },

  circle_interference: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Circle Interference",
    display_info: {
      description:
        "User must manipulate the size of the modifiable shape (equil. triangle) to match that of the reference shape (square). " +
        "Interference shape (circle) is displayed behind the modifiable shape on all subconditions.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
  },

  num_corr: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Numerosity-Correlation",
    display_info: {
      description:
        "Non-distractor condition of the numerosity-correlation experiment. Total of 18 subconditions, derived from: " +
        "2 types of tasks (numerosity and correlation) x 3 kinds of base correlation (0.3, 0.6, 0.9) x 3 base number of dots (50, 100, 150)." +
        "Initial adjusted correlation or adjusted num points are (0.2, 0.5, 0.8) for each of the base correlation values " +
        "and (40, 90, 140) dots for each of the base number of dots. Complete spec is " +
        "<a href = 'https://blogs.ubc.ca/vclcorrelation/project-overview/correlation-numerosity-discrimination/?cb=654032242'>here</a>. Password = numcorrvcl.",
      researcher: "Madison Elliott",
      developer: "Caitlin Coyiuto, Madison Elliott, Kevin Sun",
    },
    instructions: {
      jnd: {
        custom_html: `
				<div align = 'center'> <p>In each trial of this experiment, you will view two graphs side-by-side, just like the example here.
				<br><b><i>PLEASE CAREFULLY READ THE INSTRUCTIONS BELOW</b></i><br>
				<br>Move your cursor off the screen and maximize Google Chrome before you begin.<br>
				<br>You will be asked two types of questions: <br>
				1. On some trials, you will be asked to select whether the left or right graph has the <b>more correlated</b> population,<br>
				2. On other trials, you will be asked to select whether t the left or right graph has <b>more data points</b>.<br>
				<br> You'll go through some practice trials first. <br>
				Use the Z key to select the graph on the left, and the M key to select the graph on the right.<br>
				<br><b>In the full experiment, you will need to remember the instructions for several trials in a row.<br>
				Keep responding according to the last instruction screen you saw, until you get a new instruction.</b><br>
				<br>The more correct responses you make, the fewer trials you will need to complete. More accurate participants finish quicker.<br>
				<br>All participants are paid the same amount, so getting more trials correct is advantageous!<br>
				<div style='height: 290px; width: 700px; display: block;'>
				<div style='float: left;'><img src='${ADDRESS}/img/instructions/jnd/scatter_new_1.png'></img>
				<p class='small'><strong>Press the Z key</strong></p></div>
				<div style='float: right;'><img src='${ADDRESS}/img/instructions/jnd/scatter_new_2.png'></img>
				<p class='small'><strong>Press the M key</strong></p></div>
				</div><div> <br><p>Press any key to continue.</p> </div>
				</div>

				`,
      },
    },
  },

  numerosity_blue_squares: {
    experiment: ["numerosity"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Numerosity Blue Squares",
    display_info: {
      description: `Part of the numerosity proof-of-concept experiments. One population of
						  100 blue squares, randomly distributed`,
      researcher: "Everyone",
      developer: "Kevin Sun",
    },
    instructions: {
      numerosity: {
        custom_images: ["num_007ebc.png"],
      },
    },
  },

  numerosity_red_squares: {
    experiment: ["numerosity"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Numerosity Red Squares",
    display_info: {
      description: `Part of the numerosity proof-of-concept experiments. One population of
			100 red squares, randomly distributed`,
      researcher: "Everyone",
      developer: "Kevin Sun",
    },
    instructions: {
      numerosity: {
        custom_images: ["num_cd4c32.png"],
      },
    },
  },

  numerosity_yellow_squares: {
    experiment: ["numerosity"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Numerosity Yellow Squares",
    display_info: {
      description: `Part of the numerosity proof-of-concept experiments. One population of
			100 yellow squares, randomly distributed`,
      researcher: "Everyone",
      developer: "Kevin Sun",
    },
    instructions: {
      numerosity: {
        custom_images: ["num_dbc667.png"],
      },
    },
  },

  numerosity_green_squares: {
    experiment: ["numerosity"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Numerosity Green Squares",
    display_info: {
      description: `Part of the numerosity proof-of-concept experiments. One population of
			100 blue squares, randomly distributed`,
      researcher: "Everyone",
      developer: "Kevin Sun",
    },
    instructions: {
      numerosity: {
        custom_images: ["num_20874a.png"],
      },
    },
  },

  distractor_numerosity_red_lum_1: {
    experiment: ["numerosity"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Distractor Numerosity Red Lum +1",
    display_info: {
      description: `Part of the numerosity proof-of-concept experiments. One population of
			100 red squares, each a different luminence with one color being the target. Randomly distributed`,
      researcher: "Everyone",
      developer: "Kevin Sun",
    },
    instructions: {
      numerosity: {
        custom_images: ["num_cd4c32.png"],
      },
    },
  },

  multi_square_interference: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Square Interference",
    display_info: {
      description:
        "User must manipulate the size of the modifiable shape (square) so that the area ratio between the 2 rightmost squares " +
        "is equal to that of the two leftmost squares. ",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
  },

  multi_shape_interference: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Shape Interference",
    display_info: {
      description:
        "User must manipulate the size of the modifiable shape (circle) so that the area ratio between the 2 rightmost shapes " +
        "is equal to that of the two leftmost squares. ",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_images: [
          "multi_shape_interference_1.png",
          "multi_shape_interference_2.png",
        ],
      },
    },
  },

  multi_fan_interference: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Fan Interference",
    display_info: {
      description:
        "User must manipulate the size of the modifiable fan so that the area ratio between the 2 shapes (fan and circle) on the modifiable side " +
        "is equal to that of the ratio between the reference shapes (fan and circle). ",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_images: [
          "multi_fan_interference_1.png",
          "multi_fan_interference_2.png",
        ],
      },
    },
  },

  absolute_area_ratio: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Absolute Area Ratio",
    display_info: {
      description:
        "Subjects adjust the area of the modifiable square until they feel the area ratio between the reference square and" +
        " modifiable square are as equal as possible to the specified area ratio.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the size of the modifiable square
						<br> so that the size between the two squares are of the desired ratio.
						<br><br>
	               		<div>
	               			<img width='70%' src='${ADDRESS}/img/instructions/estimation/absolute_area_ratio.png'></img>
	               		</div>
		                <b>m</b> increases the size. <br>
		                <b>z</b> decreases the size. <br><br>
		                <div style='float: left; margin-bottom: 25px;'></div>
		                <br> When you are done adjusting the size, hit the <b>spacebar</b>.
		                <br> Press any key to continue.
	                </div>
                `,
      },
    },
  },

  absolute_area_ratio_bisection_variant_A: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "none",
    display_name: "Absolute Area Ratio Bisection (Variant A)",
    display_info: {
      description:
        "Subjects adjust the area of the modifiable square in the center until they feel that its area is halfway between" +
        " the squares on the right and left. Variant A and B differ in the order of subcondition presentation.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the size of the middle square
						<br> so that its area is halfway between that of the two reference squares.
						<br><br>
	               		<div>
	               			<img width='70%' src='${ADDRESS}/img/instructions/estimation/absolute_area_ratio_bisection.png'></img>
	               		</div>
		                <b>m</b> increases the size. <br>
		                <b>z</b> decreases the size. <br><br>
		                <div style='float: left; margin-bottom: 25px;'></div>
		                <br> When you are done adjusting the size, hit the <b>spacebar</b>.
		                <br> Press any key to continue.
	                </div>
                `,
      },
    },
  },

  absolute_area_ratio_bisection_variant_B: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "none",
    display_name: "Absolute Area Ratio Bisection (Variant B)",
    display_info: {
      description:
        "Subjects adjust the area of the modifiable square in the center until they feel that its area is halfway between" +
        " the squares on the right and left. Variant A and B differ in the order of subcondition presentation.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the size of the middle square
						<br> so that its area is halfway between that of the two reference squares.
						<br><br>
	               		<div>
	               			<img width='70%' src='${ADDRESS}/img/instructions/estimation/absolute_area_ratio_bisection.png'></img>
	               		</div>
		                <b>m</b> increases the size. <br>
		                <b>z</b> decreases the size. <br><br>
		                <div style='float: left; margin-bottom: 25px;'></div>
		                <br> When you are done adjusting the size, hit the <b>spacebar</b>.
		                <br> Press any key to continue.
	                </div>
                `,
      },
    },
  },

  multi_fan_interference_B: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Fan Interference (Part B)",
    display_info: {
      description:
        "User must manipulate the size of the modifiable fan so that the area ratio between the 2 shapes (fan and circle) on the modifiable side " +
        "is equal to that of the ratio between the reference shapes (fan and circle). Differs from Multi Fan Interference in that " +
        "uses 4 different kinds of alignment on modifiable side.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_images: [
          "multi_fan_interference_1.png",
          "multi_fan_interference_2.png",
        ],
      },
    },
  },

  multi_square_cutout_interference: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Square Cutout Interference",
    display_info: {
      description:
        "User must manipulate the size of the modifiable square so that the area ratio between the 2 squares on the modifiable side " +
        "is equal to that of the ratio between the reference squares.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_images: [
          "multi_square_cutout_interference_1.png",
          "multi_square_cutout_interference_2.png",
        ],
      },
    },
  },

  absolute_area_ratio_flicker: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Absolute Area Ratio Flicker",
    display_info: {
      description:
        "Flicker variant of Absolute Area Ratio condition. " +
        "Flicker occurs on reference side, 1000ms on duration, 1000ms off duration.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the size of the modifiable square
						<br> so that the size between the two squares are of the desired ratio.
						<br><br>
	               		<div>
	               			<img width='70%' src='${ADDRESS}/img/instructions/estimation/absolute_area_ratio.png'></img>
	               		</div>
		                <b>m</b> increases the size. <br>
		                <b>z</b> decreases the size. <br><br>
		                <div style='float: left; margin-bottom: 25px;'></div>
		                <br> When you are done adjusting the size, hit the <b>spacebar</b>.
		                <br> Press any key to continue.
	                </div>
                `,
      },
    },
  },

  absolute_area_ratio_bisection_variant_A_flicker: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "none",
    display_name: "Absolute Area Ratio Bisection (Variant A) Flicker",
    display_info: {
      description:
        "Flicker variant of Absolute Area Ratio condition. " +
        "Flicker occurs on reference side, 1000ms on duration, 1000ms off duration.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_html: `
					<div align = 'center'>
						<p>In this experiment, you will be using the <b>m</b> and <b>z</b> keys to adjust the size of the middle square
						<br> so that its area is halfway between that of the two reference squares.
						<br><br>
	               		<div>
	               			<img width='70%' src='${ADDRESS}/img/instructions/estimation/absolute_area_ratio_bisection.png'></img>
	               		</div>
		                <b>m</b> increases the size. <br>
		                <b>z</b> decreases the size. <br><br>
		                <div style='float: left; margin-bottom: 25px;'></div>
		                <br> When you are done adjusting the size, hit the <b>spacebar</b>.
		                <br> Press any key to continue.
	                </div>
                `,
      },
    },
  },

  multi_fan_interference_B_flicker: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Fan Interference (Part B) Flicker",
    display_info: {
      description:
        "Flicker variant of Absolute Area Ratio condition. " +
        "Flicker occurs on reference side, 1000ms on duration, 1000ms off duration.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_images: [
          "multi_fan_interference_1.png",
          "multi_fan_interference_2.png",
        ],
      },
    },
  },

  multi_square_cutout_interference_flicker: {
    experiment: ["estimation"],
    graph_type: ["shapes"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Multi Square Cutout Interference Flicker",
    display_info: {
      description:
        "Flicker variant of Absolute Area Ratio condition. " +
        "Flicker occurs on reference side, 1000ms on duration, 1000ms off duration.",
      researcher: "Tina Qi",
      developer: "Caitlin Coyiuto",
    },
    instructions: {
      estimation: {
        custom_images: [
          "multi_square_cutout_interference_1.png",
          "multi_square_cutout_interference_2.png",
        ],
      },
    },
  },

  vs_blue_squares: {
    experiment: ["visual_search"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Visual Search Blue Squares",
    display_info: {
      description: `Part of the visual search proof-of-concept experiments. One population of
			blue squares, the subject must determine if the target square is among them. Randomly distributed`,
      researcher: "Everyone",
      developer: "Kevin Sun",
    },
    instructions: {
      visual_search: {
        custom_images: ["vs_007ebc.png"],
      },
    },
  },

  multi_size_scatter: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "latin_square",
    display_name: "Multi Size Scatter - 1.25, 2.5, 5, 10, Mix",
    display_info: {
      description:
        "Standard JND and Stevens with manipulation on size of dots (1.25, 2.5, 5, 10 mm diameter) and " +
        "mix condition (25% of 1.25mm, 25% of 2.5mm etc.).",
      researcher: "Jessica Ip",
      developer: "Kevin Sun",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  multi_size_scatter_alternate: {
    experiment: ["jnd", "stevens"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Multi Size Scatter (Alternate)",
    display_info: {
      description:
        "Standard JND and Stevens with manipulation with alternate base correlation values(0.3, 0.55, 0.8) on size of dots (1.25, 2.5, 5, 10 mm diameter) and " +
        "mix condition (25% of 1.25mm, 25% of 2.5mm etc.).",
      researcher: "Jessica Ip",
      developer: "Kevin Sun",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  distractor_black_high_target: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Distractor Black High Target",
    display_info: {
      description: `A JND correlation task with the same colored distractors and targets.`,
      researcher: "Madison Elliott",
      developer: "Jake Moh & Madison Elliott",
    },
    instructions: {
      jnd: {
        custom_html: `
				<div align = 'center'>
						<p>In this experiment, most scatter plots you view will show <i>two different</i> populations of data: a <b>target population</b> and an <b>irrelevant population</b> that should always be ignored.
						<br>In the example image shown below, the red points are the target population and the green points should be ignored.
						<br>
						<br><i>However, in today's task, the target population is defined not by color, but instead by its relative correlation value.</i>
						<br>The target populations will always have <b>HIGHER<b/> correlation values than the irrelevant populations,
						<br>so as you view each plot, you should ignore the population with a lower correlation value.
						<br>Your task is to correctly identify which scatter plot has a higher correlation for the <b>target population</b>.
						<br><br>
	               		<div>
											<img width='20%' src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_1.png'></img>
											<img width='20%' src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_2.png'></img>
										 </div>
										 <br><b>Next, you'll complete a set of practice trials where both populations of data are shown with black dots, so you must use the correlation values to identify and select the correct population.</b>
										 <br>Occasionally, you will encounter a set of trials with no distractor population. Please use your best judgement to determine when there is 1 vs. 2 populations and only made decisions about the target populations in both cases.
										 <br>You will be using the <b>m</b> and <b>z</b> keys to decide.
										 <br>
										 <br> Press any key to continue.
	                </div>
				`,
      },
    },
  },

  distractor_black_low_target: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "random",
    display_name: "Distractor Black Low Target",
    display_info: {
      description: `A JND correlation task with the same colored distractors and targets.`,
      researcher: "Madison Elliott",
      developer: "Madison Elliott",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, most scatter plots you view will show <i>two different</i> populations of data: a <b>target population</b> and an <b>irrelevant population</b> that should always be ignored.
							<br>In the example image shown below, the red points are the target population and the green points should be ignored.
							<br>
							<br><i>However, in today's task, the target population is defined not by color, but instead by its relative correlation value.</i>
							<br>The target populations will always have <b>LOWER</b> correlation values than the irrelevant populations,
							<br>so as you view each plot, you should ignore the population with a lower correlation value.
							<br>Your task is to correctly identify which scatter plot has a higher correlation for the <b>target population</b>.
							<br><br>
							   <div>
												<img width='20%' src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_1.png'></img>
												<img width='20%' src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_2.png'></img>
											 </div>
											 <br><b>Next, you'll complete a set of practice trials where both populations of data are shown with black dots, so you must use the correlation values to identify and select the correct population.</b>
											 <br>Occasionally, you will encounter a set of trials with no distractor population. Please use your best judgement to determine when there is 1 vs. 2 populations and only made decisions about the target populations in both cases.
											 <br>You will be using the <b>m</b> and <b>z</b> keys to decide.
											 <br>
											 <br> Press any key to continue.
						</div>
					`,
      },
      jnd: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, most scatter plots you view will show <i>two different</i> populations of data: a <b>target population</b> and an <b>irrelevant population</b> that should always be ignored.
							<br>In the example image shown below, the red points are the target population and the green points should be ignored.
							<br>
							<br><i>However, in today's task, the target population is defined not by color, but instead by its relative correlation value.</i>
							<br>The target populations will always have <b>LOWER</b> correlation values than the irrelevant populations,
							<br>so as you view each plot, you should ignore the population with a lower correlation value.
							<br>Your task is to correctly identify which scatter plot has a higher correlation for the <b>target population</b>.
							<br><br>
							   <div>
												<img width='20%' src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_1.png'></img>
												<img width='20%' src='${ADDRESS}/img/instructions/jnd/sample_distractor_num_corr_2.png'></img>
											 </div>
											 <br><b>Next, you'll complete a set of practice trials where both populations of data are shown with black dots, so you must use the correlation values to identify and select the correct population.</b>
											 <br>Occasionally, you will encounter a set of trials with no distractor population. Please use your best judgement to determine when there is 1 vs. 2 populations and only made decisions about the target populations in both cases.
											 <br>You will be using the <b>m</b> and <b>z</b> keys to decide.
											 <br>
											 <br> Press any key to continue.
						</div>
					`,
      },
    },
  },

  devon_attribute_array_test: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "random",
    display_name: "Devon attribute array test",
    display_info: {
      description: `testing graphs made using mix_by_attribute_array`,
      researcher: "Madison Elliott",
      developer: "Madison Elliott",
    },
  },

  distractor_array_devon_test: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "random",
    display_name: "Distractor Array Devon Test",
    display_info: {
      description: `a JND correlation task to test imlementation of mix_by_distractor and mix_by_target properties.`,
      researcher: "Madison Elliott",
      developer: "Madison Elliott",
    },
  },

  distractor_ensemble_average_trial_test: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial Test",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_1: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 1",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_2: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 2",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_3: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 3",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_4: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 4",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_5: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 5",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_6: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 6",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_7: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 7",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_8: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 8",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_9: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 9",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_10: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 10",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_11: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 11",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  distractor_ensemble_average_trial_12: {
    experiment: ["ensemble_average"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "random",
    display_name: "Ensemble Average Trial 12",
    diplay_info: {
      description: "Feature based attention in two-class scatterplots.",
      researcher: "Madison Elliott",
      developer: "Devon Kenzie, Jake Moh, Yifei Chen",
    },
    instructions: {
      ensemble_average: {
        custom_html: `
					<div align = 'center'>
							<p>In this experiment, you will see scatterplots with <i>two different</i> populations of data: a <b>blue population</b> and an <b>orange population</b>.
							<br>Take a look at the example plot below; you'll see something just like this on every trial.
							<br>
							<br>Each trial, the sizes of the dots in both populations will be different. The correlation values of each population will also vary.
							<br>Before each trial, you will be asked to pay attention to <b>either</b> color or correlation value. Please follow this cue: do your best to pay attention to the population indicated.
							<br>After you see each plot, you will be prompted to report the average size of the dots in one of the populations. Sometimes it will be the one that was cued, but sometimes it will be the other.</b>.
							<br>It's very important that you don't try to attend to the whole display, and instead focus on the population you're told to pay attention to! Do your best on the responses, but don't worry if you have to guess.
							<br><br>
							<div>
								<img width='20%' src='${ADDRESS}/img/instructions/ensemble_average/distractor_plot_2.png'></img>
							</div>
							<br>
							<br> Press any key to continue.
					</div>
					`,
      },
    },
  },

  visual_masking: {
    experiment: ["stevens", "jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking Base",
    display_info: {
      description: "JND Visual Masking",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  visual_masking_border: {
    experiment: ["stevens", "jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking Base with Border",
    display_info: {
      description: "JND Visual Masking with Boarder",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
      stevens: {
        custom_images: ["large_dot_sizes.png"],
      },
    },
  },

  visual_masking_multi_size_half: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking Multi Size 0.5",
    display_info: {
      description: "JND Visual Masking with Mask size of 0.5",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_multi_size_half_border: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking Multi Size 0.5 Bordered",
    display_info: {
      description: "JND Visual Masking with Mask size of 0.5 and border",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_sides: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking on Sides",
    display_info: {
      description: "JND Visual Masking at Both Sides of the graph",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_sides_border: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking on Sides with Border",
    display_info: {
      description: "JND Visual Masking at Both Sides of the graph",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_sides_multi_size_half: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking on Sides Multi Size 0.5",
    display_info: {
      description:
        "JND Visual Masking at Both Sides of the graph with mask size of 0.5",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_sides_multi_size_half_border: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking on Sides Multi Size 0.5 Bordered",
    display_info: {
      description:
        "JND Visual Masking at Both Sides of the graph with mask size of 0.5 and border",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_fence: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking as Fence",
    display_info: {
      description: "JND Visual Masking at Both Sides of the graph",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_fence_border: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking as Fence with Border",
    display_info: {
      description: "JND Visual Masking at Both Sides of the graph",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_fence_multi_size_half: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking as Fence Multi Size 0.5",
    display_info: {
      description: "JND Visual Masking as Fence with Mask Size of 0.5",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  visual_masking_fence_multi_size_half_border: {
    experiment: ["jnd"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "latin_square",
    display_name: "Visual Masking as Fence Multi Size 0.5 Bordered",
    display_info: {
      description: "JND Visual Masking as Fence with Mask Size of 0.5",
      researcher: "Wuyang Li",
      developer: "Wuyang Li",
    },
    instructions: {
      jnd: {
        custom_images: ["large_dot_sizes_1.png", "large_dot_sizes_2.png"],
      },
    },
  },

  sequencing_timing_condition: {
    experiment: ["sequencing"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "blocked_latin_square",
    display_name: "Timing Condition",
    display_info: {
      description:
        "A JND-type experiment where the scatterplots are shown in a sequence.  Blocked by the duration of the first scatterplot.",
      researcher: "Jessica Ip",
      developer: "Nicolas Navarre, Jose Navarro, Ford Atwater",
    },
  },

  timing_condition_uniform_distribution: {
    experiment: ["sequencing"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "blocked_latin_square",
    display_name: "Timing Condition - Uniform Distribution",
    display_info: {
      description:
        "A JND-type experiment where the scatterplots are shown in a sequence.  Blocked by the duration of the first scatterplot.  Studies a uniform distribution.",
      researcher: "Jose Navarro, Ford Atwater",
      developer: "Jose Navarro, Ford Atwater",
    },
  },

  sequencing_side_by_side_condition: {
    experiment: ["sequencing_side_by_side"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Side-by-Side",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after.  Blocked by the duration of the first scatterplot.",
      researcher: "Jessica Ip",
      developer: "Jose Navarro",
    },
  },

  sequencing_side_by_side_condition_uniform_distribution: {
    experiment: ["sequencing_side_by_side"],
    graph_type: ["scatter"],
    trial_structure: ["foundational"],
    balancing: "blocked_latin_square",
    display_name: "Side By Side - Uniform Distribution",
    display_info: {
      description:
        "A JND-type experiment where the scatterplots are shown in a sequence.  Blocked by the duration of the first scatterplot.  Studies a uniform distribution.",
      researcher: "Jose Navarro, Ford Atwater",
      developer: "Jose Navarro, Ford Atwater, Philippe Chapdelaine",
    },
  },

  sequencing_symbols_condition: {
    experiment: ["sequencing_symbols"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares Scatterplot to Scatterplot, Line Scatter Plot to Line Scatterplot and finally Scatterplot to Line Scatterplot",
      researcher: "Jose Navarro",
      developer: "Jose Navarro, Aaron Wong, Richard Mao",
    },
  },

  sequencing_symbols_condition_uniform_distribution: {
    experiment: ["sequencing_symbols"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Uniform Distribution",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares Scatterplot to Scatterplot, Line Scatter Plot to Line Scatterplot and finally Scatterplot to Line Scatterplot. Studies a uniform distribution.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro, Dusty Fox",
    },
  },

  sequencing_symbols_condition_strip_plot: {
    experiment: ["sequencing_symbols"],
    graph_type: ["mixed"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Strip Plot Condition",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares Scatterplot to Scatterplot, Strip Plot to Strip Plot and finally Scatterplot to Strip Plot.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro, Aaron Wong, Richard Mao, Dusty Fox",
    },
    // instructions: {
    // 	sequencing_symbols: {
    // 		custom_html: `
    // 			<div align = 'center'>
    // 				<p> In this experiment, you will see two graphs displayed on screen for a brief moment. The graphs will be either side-by-side or one on top of the other.
    // 				<br>
    //       			</p>
    //       			<p>

    // 				<div style='float: center; display: block;'>
    //       				<img src='${ADDRESS}/img/instructions/sequencing_symbols/mixed_plot_screen_1.png'></img>
    // 					<img src='${ADDRESS}/img/instructions/sequencing_symbols/mixed_strip_plot_instructions.png'></img>
    //       			</div>
    // 				<strong>Press the Z key if the graph <u>above or to the left</u> is more correlated.</strong>
    //       			<br><strong>Press the M key if the graph <u>below or to the right</u> is more correlated.</strong>
    //       		</div>
    // 		`
    // 	}
    // }
  },

  sequencing_symbols_features_strip_luminance_orientation: {
    experiment: ["sequencing_symbols"],
    graph_type: ["strip"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Strip Plot Luminance-Orientation",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares strip plots with differing luminance to convey correlation. Orientation distractor",
      researcher: "Jose Navarro",
      developer: "Jose Navarro, Aaron Wong, Richard Mao, Dusty Fox",
    },
  },

  sequencing_symbols_features_strip_orientation_luminance: {
    experiment: ["sequencing_symbols"],
    graph_type: ["strip"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Strip Plot Orientation-Luminance",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares strip plots with differing orientation to convey correlation. Luminance distractor",
      researcher: "Jose Navarro",
      developer: "Jose Navarro, Aaron Wong, Richard Mao, Dusty Fox",
    },
  },

  sequencing_symbols_scatter_density: {
    experiment: ["sequencing_symbols"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Density Condition",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares Scatterplots with different dot densities.",
      researcher: "Jose Navarro, Aaron Wong, Richard Mao",
      developer: "Jose Navarro",
    },
  },

  sequencing_symbols_scatter_parallel: {
    experiment: ["sequencing_symbols"],
    graph_type: ["mixed"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Parallel Plot Condition",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares Scatterplot to Scatterplot, Parallel Coordinates to Parallel Coordinates and finally Scatterplot to Parallel Coordinates.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro",
    },
  },

  sequencing_symbols_scatter_strip_luminance: {
    experiment: ["sequencing_symbols"],
    graph_type: ["mixed"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Luminance Condition",
    display_info: {
      description:
        "A JND-type experiment where the decision is made on a blank screen shown after. Compares Scatterplot to Scatterplot, Luminance Strip Plot to Luminance Strip Plot, and finally Scatterplot to Luminance Strip Plot.",
      researcher: "Aaron Wong",
      developer: "Aaron Wong",
    },
  },

  sequencing_symbols_strip_orientation_luminance_combined: {
    experiment: ["sequencing_symbols"],
    graph_type: ["strip"],
    trial_structure: ["custom"],
    balancing: "blocked_latin_square",
    display_name:
      "Sequencing Symbols - Strip Plot Orientation and Luminance Combined",
    display_info: {
      description:
        " A JND-type experiment where the decision is made on a blank screen shown after. Compares two strip plots with alterations to the orientation, luminance, or both at the same time",
      researcher: "Aaron Wong",
      developer: "Jose Navarro, Aaron Wong",
    },
    block_instructions: {
      sequencing_symbols_orientation_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_orientation_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>For this block, please use the <b>Orientation</b> of the Strip Plot to determine Correlation.</p>
          <br>
          Press Space to Continue
          </div>`
        ]
      },
      sequencing_symbols_luminance_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_luminance_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>For this block please use the <b>Luminance</b> of the Strip Plot to determine Correlation.</p>
          <br>
          Press Space to Continue
          </div>`
        ]
      },
      sequencing_symbols_orientation_luminance_covar_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_orientation_luminance_covar_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>For this block you can use either <b>Orientation or Luminance</b> to determine Correlation</p>
          <br>
          Press Space to Continue
          </div>`
        ]
      },
      sequencing_symbols_orientation_luminance_random_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_orientation_luminance_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>For this block please use the <b>Orientation</b> to determine Correlation and <b>ignore Luminance</b>.</p>
          <br>
          Press Space to Continue
          </div>`
        ]
      },
      sequencing_symbols_luminance_orientation_random_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_luminance_orientation_random_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>For this block please use the <b>Luminance</b> to determine Correlation and <b>ignore Orientation</b>.</p>
          <br>
          Press Space to Continue
          </div>`
        ]
      }
    }
  },

  sequencing_symbols_strip_luminance_widths: {
    experiment: ["sequencing_symbols"],
    graph_type: ["strip"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Strip Plot Luminance Widths",
    display_info: {
      description:
        " A JND-type experiment where the decision is made on a blank screen shown after. Compares two luminance strip plots varying the thickness of the strip widths per block.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro",
    },
  },

  sequencing_symbols_scatter_strip_color_yellow_blue: {
    experiment: ["sequencing_symbols"],
    graph_type: ["mixed"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Scatter-Strip Color Yellow-Blue ",
    display_info: {
      description: " A JND-type experiment where the decision is made on a blank screen shown after. Compares two color strip plots varying the thickness of the strip widths per block. Y value is represented by color gradient between yellow and light blue.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro"
    }
  },

  sequencing_symbols_scatter_strip_color_yellow_blue_800: {
    experiment: ["sequencing_symbols"],
    graph_type: ["mixed"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Scatter-Strip Color Yellow-Blue 800ms",
    display_info: {
      description: " A JND-type experiment where the decision is made on a blank screen shown after. Compares two color strip plots varying the thickness of the strip widths per block. Y value is represented by color gradient between yellow and light blue.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro"
    }
  },

  sequencing_symbols_scatter_strip_color_yellow_blue_1200: {
    experiment: ["sequencing_symbols"],
    graph_type: ["mixed"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Scatter-Strip Color Yellow-Blue 1200ms",
    display_info: {
      description: " A JND-type experiment where the decision is made on a blank screen shown after. Compares two color strip plots varying the thickness of the strip widths per block. Y value is represented by color gradient between yellow and light blue.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro"
    }
  },

  sequencing_symbols_memory_control: {
    experiment: ["sequencing_symbols"],
    graph_type: ["scatter"],
    trial_structure: ["custom"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Scatter Plot Memory Control",
    display_info: {
      description: "Control experiment to account for memory of the average correlation. Block 1 is normal side-by-side scatterplot comparison using Design parameters. Block 2 shows the Base Correlation for 5 seconds at the start of the sub condition and then 1 graph either higher or lower for 400 ms.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro"
    },
    instructions: {
      sequencing_symbols: {
        data: { screen_id: "sequencing_symbols_instruction" },
        type: "instructions",
        key_forward: " ",
        pages:
          [
            `<b>Task A</b>:
          <p>Two graphs will appear side by side, followed by a distractor screen, and finally a blank screen.
          <br>
          <br> 
          On the blank screen indicate which graph is more correlated by pressing
          <br> the <strong>Z key</strong> for the graph on the left, or the <strong>M key</strong> for the graph on the right.
          </p>
          <div><img src='${ADDRESS}/img/instructions/sequencing_symbols/instructions.png'></img><div>
          <br>
          
          <br><br><p><b>Press Space to continue.</b></p></font></div>
          `
            ,
            `<b>Task B</b>:
          <p>You will be shown a Scatter Plot with a Base Correlation at the start of the sub condition for 5 seconds, 
          then you will be shown Scatter Plots that will be on-screen for a brief moment, followed by a blank screen that will be on-screen indefinitely.</p> 
          <p>On the blank screen, you have to determine whether the scatterplot just shown has a <b>higher or lower correlation</b> than the <b>average correlation</b> of all scatterplots shown in this sub condition thus far. </p>
          <p>You will press <b>Z</b> if it is lower and <b>M</b> if its higher.</p?
          <br><br><p><b>Press Space to continue.</b></p></font></div>
          `
          ]
      },
    },
    block_instructions: {
      sequencing_symbols_scatter_scatter_memory_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_scatter_scatter_memory_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>You will be doing <b>Task B</b> over the next 3 sub conditions.</p>
          You will be shown a Scatter Plot with a Base Correlation at the start of the sub condition for 5 seconds, 
          then you will be shown Scatter Plots that will be on-screen for a brief moment, followed by a blank screen that will be on-screen indefinitely.</p> 
          <p>On the blank screen, you have to determine whether the scatterplot just shown has a <b>higher or lower correlation</b> than the <b>average correlation</b> of all scatterplots shown in this sub condition thus far. </p>
          <p>You will press <b>Z</b> if it is lower and <b>M</b> if its higher.</p>
          <br><br><p><b>Press Space to continue.</b></p></font></div>
          </div>`
        ]
      },
      sequencing_symbols_scatter_scatter_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_scatter_scatter_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>You will be doing <b>Task A</b> over the next 3 sub conditions.</p>
          <p>Two graphs will side by side, followed by a distractor screen, and finally a blank screen.
            <br><br> On the blank screen indicate which graph is more correlated by pressing
            <br> the <strong>Z key</strong> for the graph on the left, or the <strong>M key</strong> for the graph on the right.
            </p>
            <br>
          <p> Press Space to continue.</p>
          </div>`
        ]
      }
    }
  },

  sequencing_symbols_memory_control_1200: {
    experiment: ["sequencing_symbols"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Scatter Plot Memory Control 1200",
    display_info: {
      description: "Control experiment to account for memory of the average correlation. Block 1 is normal side-by-side scatterplot comparison using Design parameters. Block 2 shows the Base Correlation for 5 seconds at the start of the sub condition and then 1 graph either higher or lower for 400 ms.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro"
    },
    instructions: {
      sequencing_symbols: {
        data: { screen_id: "sequencing_symbols_instruction" },
        type: "instructions",
        key_forward: " ",
        pages:
          [
            `<b>Task A</b>:
          <p>Two graphs will appear side by side, followed by a distractor screen, and finally a blank screen.
          <br>
          <br> 
          On the blank screen indicate which graph is more correlated by pressing
          <br> the <strong>Z key</strong> for the graph on the left, or the <strong>M key</strong> for the graph on the right.
          </p>
          <div><img src='${ADDRESS}/img/instructions/sequencing_symbols/instructions.png'></img><div>
          <br>
          
          <br><br><p><b>Press Space to continue.</b></p></font></div>
          `
            ,
            `<b>Task B</b>:
          <p>You will be shown a Scatter Plot with a Base Correlation at the start of the sub condition for 5 seconds, 
          then you will be shown Scatter Plots that will be on-screen for a brief moment, followed by a blank screen that will be on-screen indefinitely.</p> 
          <p>On the blank screen, you have to determine whether the scatterplot just shown has a <b>higher or lower correlation</b> than the <b>average correlation</b> of all scatterplots shown in this sub condition thus far. </p>
          <p>You will press <b>Z</b> if it is lower and <b>M</b> if its higher.</p?
          <br><br><p><b>Press Space to continue.</b></p></font></div>
          `
          ]
      },
    },
    block_instructions: {
      sequencing_symbols_scatter_scatter_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_scatter_scatter_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>You will be doing <b>Task A</b> over the next 3 sub conditions.</p>
          <p>Two graphs will side by side, followed by a distractor screen, and finally a blank screen.
            <br><br> On the blank screen indicate which graph is more correlated by pressing
            <br> the <strong>Z key</strong> for the graph on the left, or the <strong>M key</strong> for the graph on the right.
            </p>
            <br>
          <p> Press Space to continue.</p>
          </div>`
        ]
      },
      sequencing_symbols_scatter_scatter_memory_html: {
        type: "instructions",
        data: { screen_id: "sequencing_symbols_scatter_scatter_memory_html" },
        key_forward: " ",
        pages: [
          `<div class="instructions" align='center'>
          <p>You will be doing <b>Task B</b> over the next 3 sub conditions.</p>
          You will be shown a Scatter Plot with a Base Correlation at the start of the sub condition for 5 seconds, 
          then you will be shown Scatter Plots that will be on-screen for a brief moment, followed by a blank screen that will be on-screen indefinitely.</p> 
          <p>On the blank screen, you have to determine whether the scatterplot just shown has a <b>higher or lower correlation</b> than the <b>average correlation</b> of all scatterplots shown in this sub condition thus far. </p>
          <p>You will press <b>Z</b> if it is lower and <b>M</b> if its higher.</p>
          <br><br><p><b>Press Space to continue.</b></p></font></div>
          </div>`
        ]
      },
    }
  },


  sequencing_symbols_strip_color_luminance: {
    experiment: ["sequencing_symbols"],
    graph_type: ["strip"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Sequencing Symbols - Strip Color and Luminance",
    display_info: {
      description: "A JND Sequencing Condition for Strip Plots. Compares the effect of black vs white backgrounds for Luminance and Yellow-Blue color. Luminance y-value representation will be color inverted for the backgrounds.",
      researcher: "Jose Navarro",
      developer: "Jose Navarro"
    }
  },

  decreasing_number_of_dots: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Decreasing Dot Amount",
    display_info: {
      description: "A standard JND plot experiment condition, comparing the JND value for 5 different decreasing value for number of dots including 100, 48, 24, 12, 6",
      researcher: "Otto Chen",
      developer: "Otto Chen"
    },
  },

  increasing_number_of_dots: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Increasing Dot Amount",
    display_info: {
      description:
        "A standard JND plot experiment condition, comparing the JND value for 5 different increasing value for number of dots including 100, 150, 200, 250, 300",
      researcher: "Otto Chen",
      developer: "Otto Chen",
    },
  },

  hybrid_multi_luminance_scatter: {
    experiment: ["jnd", "stevens", "hybrid"],
    graph_type: ["scatter"],
    trial_structure: ["design"],
    balancing: "blocked_latin_square",
    display_name: "Hybrid Luminance Scatter",
    display_info: {
      description:
        "A standard JND plot experiment condition, comparing the JND value for 5 different values of dot luminance (all 4mm diam) including 0.0 (black), 49.0, 67.0, 86.0, and mixed",
      researcher: "AJ Montajes",
      developer: "AJ Montajes",
    },
  },
};

// condition-config is called from both client and server. However client side (browser) does not use modules and displays an error message.
// if (typeof module !== "undefined") {
//   console.log("Exporting modules")
//   module.exports = CONDITIONS;
// }
