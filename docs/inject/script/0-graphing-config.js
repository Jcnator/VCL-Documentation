export const G_INPUT_TYPES = {
  string: {
    display_name: "String",
    bootstrap_label: "default",
  },
  boolean: {
    display_name: "Boolean",
    bootstrap_label: "success",
  },
  number: {
    display_name: "Number",
    bootstrap_label: "danger",
  },
  assoc_array: {
    display_name: "Associative Array",
    bootstrap_label: "primary",
  },
  array: {
    display_name: "Array",
    bootstrap_label: "secondary",
  },
};

export const GRAPH_TYPES = {
  scatter: {
    docs: {
      display_name: "Scatter",
      icon: "&#8759;",
      description:
        "Conventional scatter plot where using 1st quadrant of x-y coordinate system.",
    },

    attributes: {
      axis_color: {
        default: "BLACK",
        docs: {
          desc: "Changes color of the axes. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      axis_length: {
        default: 250,
        docs: {
          desc: "Lenth of the x and y axis with no buffer. 50 units is 1cm",
          input_type: G_INPUT_TYPES.number,
        },
      },
      axis_thickness: {
        default: 2,
        docs: {
          desc: "Thickness of the X and Y axis. 1 unit is 1/50th of 1cm.",
          input_type: G_INPUT_TYPES.number,
        },
      },

      buffer: {
        default: 25,
        docs: {
          desc: "Buffer between scatter cloud and axis extension on their ends. Adds onto the axis length.",
          input_type: G_INPUT_TYPES.number,
        },
      },

      point_color: {
        default: "BLACK",
        docs: {
          desc: "Changes color of the points. Takes in color name (e.g. 'RED') or RGB HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      point_color_hsla: {
        default: null,
        docs: {
          desc:
            "Point Color attribute described in Hue, Saturation, Luminosity, and Alpha. Using this attribute overrides the point_color attribute. " +
            "Hue value have range [0,360], SLA values have range [0.0, 1.0]. Ex: {h: 0, s: 1.0 , l: 0.5, a: 1.0} for red",
          input_type: G_INPUT_TYPES.assoc_array,
        },
      },
      point_shape: {
        default: "circle",
        valid_inputs: [
          "circle",
          "square",
          "diamond",
          "hollow_circle",
          "thin_hollow_circle",
          "bullseye_circle",
          "line",
          "hollow_triangle",
          "plus",
          "cross",
        ],
        docs: {
          desc: "Changes shape of the point. Takes in string name of shape.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      point_size: {
        default: 6,
        docs: {
          desc: "Diameter of the point. 50 units is 1cm.",
          input_type: G_INPUT_TYPES.number,
        },
      },
      line_length: {
        default: 25,
        docs: {
          desc: "Length of the line for line shape",
          input_type: G_INPUT_TYPES.number,
        },
      },
      borders: {
        default: "2",
        valid_inputs: ["0", "2", "3C", "3U", "4"],
        docs: {
          desc: "Changes number of borders (axes) around scatterplot. Takes condition name as parameter.",
          input_type: G_INPUT_TYPES.string,
        },
      },
    },
  },

  strip: {
    docs: {
      display_name: "Strip",
      icon: "&#8741;",
      description:
        "Strip plot displaying strips along a horizontal axis. For a coordinate (x,y), x determines horizontal translation. Y may" +
        " or may not determine strip height, depending on whether attribute fixed_strip_height is true.",
    },

    attributes: {
      axis_color: {
        default: "BLACK",
        docs: {
          desc: "Changes color of the horizontal axis. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      fill_color: {
        default: "BLACK",
        docs: {
          desc: "Changes the fill color of the strip. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      y_value_representation: {
        default: "orientation",
        valid_inputs: ["orientation", "luminance", "height", "cielab"],
        docs: {
          desc: "Feature that represents the y-value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      y_value_range: {
        default: {min: -30, max: 30},
        docs: {
          desc: "Minimum and maximum values for linearly transformning between (0,1) for Y value to another feature. Min and Max can be either numbers or assoc arrays for multi value features such as color.",
          input_type: G_INPUT_TYPES.assoc_array,
        },
      },

      distractor_value_feature: {
        default: "none",
        valid_inputs: ["orientation", "luminance", "height", "none"],
        docs: {
          desc: "Feature that represents the z-value/distractor.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      fixed_strip_height: {
        default: true,
        docs: {
          desc:
            "If true, makes all strip heights equal. If false, uses the y-coordinate as the height." +
            "(So height of strips vary).",
          input_type: G_INPUT_TYPES.boolean,
        },
      },

      line_height: {
        default: 300,
        docs: {
          desc: "Height of strip plot lines",
          input_type: G_INPUT_TYPES.number,
        },
      },

      axis_length: {
        default: 600,
        docs: {
          desc: "Length of x-axis",
          input_type: G_INPUT_TYPES.number,
        },
      },

      strip_width: {
        default: 1,
        docs: {
          desc: "Width of the strip in pixels.",
          input_type: G_INPUT_TYPES.number,
        },
      },
      buffer: {
        default: 50,
        docs: {
          desc: "Aditional length for axis",
          input_type: G_INPUT_TYPES.number,
        },
      },

      strip_width: {
        default: 1,
        docs: {
          desc: "Width of the strip in pixels.",
          input_type: G_INPUT_TYPES.number,
        },
      },
      buffer: {
        default: 50,
        docs: {
          desc: "Aditional length for axis",
          input_type: G_INPUT_TYPES.number,
        },
      },
    },
  },

  ring: {
    docs: {
      display_name: "Ring",
      icon: "&#9678;",
      description:
        "Ring plot displaying rings (large circles) on a horizontal axis. For a coordinate (x,y), x determines the horizontal translation of " +
        " the ring whose origin lies on the axis. Y determines the radius of the ring.",
    },

    attributes: {
      axis_color: {
        default: "BLACK",
        docs: {
          desc: "Changes color of the horizontal axis. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      fill_color: {
        default: "none",
        docs: {
          desc: "Changes the fill color of the ring. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      ring_thickness: {
        default: 1,
        docs: {
          desc: "Changes ring thickness/stroke width in pixels.",
          input_type: G_INPUT_TYPES.number,
        },
      },

      stroke_color: {
        default: "BLACK",
        docs: {
          desc: "Changes the stroke color of the ring. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },
    },
  },

  shapes: {
    docs: {
      display_name: "Shapes",
      icon: "&#9653;",
      description:
        "Displays a single shape, of type determined by strings in shapes attribute.",
    },

    attributes: {
      fill_color: {
        default: "BLUE",
        docs: {
          desc: "Changes the fill color of the shape. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      shapes: {
        default: "circle",
        valid_inputs: [
          "circle",
          "slice",
          "square",
          "rotSquare",
          "triangle",
          "rotTriangle",
        ],
        docs: {
          desc: "ARRAY containing two strings, each indicating shape type. E.g. ['circle', 'square'].",
          input_type: G_INPUT_TYPES.array,
        },
      },

      slice_rotation: {
        default: 0,
        docs: {
          desc: "Changes rotation ONLY if ones of the shapes specified is = 'slice'.",
          input_type: G_INPUT_TYPES.number,
        },
      },

      stroke_color: {
        default: "none",
        docs: {
          desc: "Changes the stroke color of the shape. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },
    },
  },

  parallel: {
    docs: {
      display_name: "Parallel Coordinates",
      icon: "&#2225;",
      description:
        "Strip plot displaying strips along a horizontal axis. For a coordinate (x,y), x determines horizontal translation. Y may" +
        " or may not determine strip height, depending on whether attribute fixed_strip_height is true.",
    },

    attributes: {
      axis_color: {
        default: "BLACK",
        docs: {
          desc: "Changes color of the horizontal axis. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      fill_color: {
        default: "BLACK",
        docs: {
          desc: "Changes the fill color of the lines. Takes in color name (e.g. 'RED') or HEX value.",
          input_type: G_INPUT_TYPES.string,
        },
      },

      axis_height: {
        default: 200,
        docs: {
          desc: "Height of the axes plot lines",
          input_type: G_INPUT_TYPES.number,
        },
      },

      axis_separation: {
        default: 200,
        docs: {
          desc: "Horizontal Separation of the axes",
          input_type: G_INPUT_TYPES.number,
        },
      },

      axis_width: {
        default: 1,
        docs: {
          desc: "Width of the axes in pixels.",
          input_type: G_INPUT_TYPES.number,
        },
      },

      axis_buffer: {
        default: 50,
        docs: {
          desc: "Aditional length for axis",
          input_type: G_INPUT_TYPES.number,
        },
      },

      inverted: {
        default: false,
        docs: {
          desc: "Whether the y-axis should be inverted or not",
          input_type: G_INPUT_TYPES.boolean,
        },
      },

      line_width: {
        default: 1,
        docs: {
          desc: "Width of the lines in pixels.",
          input_type: G_INPUT_TYPES.number,
        },
      },
    },
  },
  mixed: {
    docs: {
      display_name: "Mixed",
      icon: "&#127199;",
      description:
        "Mixed graph type where graph a and graph b can be of different types and have their own attributes.",
    },
  },
};

export const GRAPH_FEATURES = {
  mixed_data: {
      docs: {
          display_name: "Mixed Data",
          icon: "&#8759;",
          description:
              "Properties for mixing graph data.",
      },
      attributes: {
          mix_type: {
              default: "none",
              valid_inputs: ["none", "attribute", "targeted", "attribute_array"],
              docs: {
                desc:
                  "Evenly manipulate subsets of the dataset according to a graphical attribute. Uses the mix_data attribute to store " +
                  "tell what properties are to be mixed by. If the Mix data attributes are arrays " +
                  "of size n1, n2,...,nm, the total number of sub groups is n1*n2*...*nm, with each subgroup being a combination of given properties. <br>" +
                  "none: Default graph behavior <br>" +
                  "attribute: Normal Mix by Attribute behavior described above. <bre>" +
                  "targeted: First attribute value can be given a specific number of points adding the 'num_target' property to the mix data assoc array <br> " +
                  "attribute_array: Customly divides the subgroups into specific attribute mixes. Eg: [{point_size: 2, point_color: red}, {point_size: 1, point_color: blue}] <br>",
                input_type: G_INPUT_TYPES.string,
              },
            },
            mix_data: {
              default: null,
              docs: {
                desc:
                  "Assoc array or array object that stores the attribute data to mix by. " +
                  "For example: mix_data: {point_size: [1, 2]} divides the dataset into 2 " +
                  "evenly divided subgroups (random sample, no replacement), of point size 1 and point size 2. More than one attribute can " +
                  "be used. Eg: point_size:[1,2], point_color:[red,blue,black], etc... " +
                  "<b>MUST be a graphical attribute already supported by scatter plots. " +
                  "The number of subgroups must be a factor of the number of points in the dataset, so that the dataset " +
                  "can be divided evenly. (The default number of points in the dataset is 100.)</b>",
                input_type: G_INPUT_TYPES.assoc_array,
              },
          }
      }
  },
  visual_masking: {
      docs: {
          display_name: "Visual Masking",
          icon: "&#8759;",
          description:
              "Properties for creating a visual mask over the graph",
      },
      attributes:{
        visual_masking_type: {
            default: "none",
            valid_inputs: ["none", "border", "borderless"],
            docs: {
              desc: "Changes type of visual mask. Determine whether it has a border",
              input_type: G_INPUT_TYPES.string,
            },
          },
        visual_masking_pos: {
          default: "none",
          valid_inputs: ["none", "middle", "sides", "fence"],
          docs: {
            desc: "Changes position of visual mask. Determine whether it is located at the middle or sides",
            input_type: G_INPUT_TYPES.string,
          },
        },
        visual_masking_ratio: {
          default: 0.33,
          docs: {
            desc: "Changes size of visual mask. Determine how much of the plot will be masked",
            input_type: G_INPUT_TYPES.number,
          },
        },
      }
  },
  distractor_graph: {
    docs: {
      display_name: "Distractor Graph",
      icon: "&#8759;",
      description: "Properties for distractor graphs.",
    },
    attributes: {
      distractor_attributes: {
        default: null,
        docs: {
          desc: "Attributes for the distractor graph in distractor conditons. These attributes must be valid Graph Attributes.",
          input_type: G_INPUT_TYPES.assoc_array
        }
      },
    }
  }
}