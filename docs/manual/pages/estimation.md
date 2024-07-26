# >> Estimation

- **Task**: Discrimination
- **Method**: Estimation w/ Bisection

## Specifications

* This task presents 2 shapes side by side. One shape is the reference shape, while the other is the modifiable shape, in which the user can increase or decrease the size of the shape (by pressing the M or Z keys). The goal is that the user will adjust the size of the modifiable shape so that it is as equal as possible to the reference shape's area. 
* Subconditions:
  * 3 types of shapes - circle, square, or triangle
    * So there are 3 x 3 = 9 different permutations of paired shapes (e.g. circle-circle, circle-square, circle-triangle etc.) - duplicates (3) = 6 permutations
  * 3 sizes that the reference shape can start on - 2cm, 4cm or 6 cm
  * 2 ways the modifiable shape can "start" on e.g. they can be either _smaller_ or _larger_ in size than the reference shape
    * For 2cm reference shape, low = 1.2, high = 3
    * For 4cm reference shape, low = 3.1, high = 5.3
    * For 6cm reference shape, low = 5.0, high = 6.5
  * **Total number of subconditions** = 6 [permutation of pairs] x 3 [possible reference sizes] = 18 subconditions
* Randomize the order of the 18 subconditions.
* On a given subcondition:
  * The reference and modifiable shape positions can be either left or right (randomized). So before a subcondition starts, there will be text like "Adjust the shape on the _left/right_ so that its size equals that of the other shape."
  * For a given subcondition, there are 4 trials. In each trial, the user basically has to make the modifiable shape the same as the reference shape. On a given trial:
     * For trials 1 and 3, the modifiable shape's size will start on the low value as specified above (e.g. if 2cm is the reference shape, then modifiable shape's size is 1.2)
     * For trials 2 and 4, the modifiable shape's size will start on the high value as specified above.
     * The y position of the shapes relative to each other should be slightly jittered (e.g. if have a circle and square, the circle is not completely aligned with the square, so could be a few pixels higher or lower etc.) - the degree of jitter can be randomized.
     * The user can press the z [make shape bigger] or m [make shape smaller] keys.
        * The step size of the adjustment will be randomized (so not constant).
     * They can adjust for an unlimited amount of times.
     * Once satisfied, they hit space bar, which then records the size of their modified shape.
     * This happens 3 more times (for the same subcondition).
  * After the 4 trials for a given subcondition, experiment then moves to the next subcondition.

  ## Summer 2019 Updates

  We implemented a series of new estimation conditions to do with measuring area ratios. Tina's pdf spec is [here](/VCLWebFramework/manual/files/Estimation-Interference-Spec.pdf).

  - List of new conditions:
    - Square, Circle Interference
    - Circle Interference
    - Multi Square Interference
    - Multi Shape Interference
    - Multi Fan Interference
    - Absolute Area Ratio
    - Absolute Area Ratio Bisection (Variant A)
    - Absolute Area Ratio Bisection (Variant B)
    - Multi Fan Interference (Part B)
    - Multi Square Cutout Interference
    - Absolute Area Ratio Flicker
    - Absolute Area Ratio Bisection (Variant A) Flicker
    - Multi Fan Interference (Part B) Flicker
    - Multi Square Cutout Interference Flicker 
  - ** All the flicker conditions are identical to the original condition of the same name, except there is 1000 ms on and 1000 off duration on the ref shapes.

  ### Code Updates

  - There are 4 different kinds of configurations:
    - **Single-single** : one shape on ref side and one on mod side (e.g. anything done before the interference conditions)
    - **Multi-multi** : 2 shapes on ref side and 2 shapes on mod side. On mod side, ONE shape is the one getting modified (e.g. Multi Square Interference, Multi Fan Interference etc.)
       - Attributes `mod_side_alignment` and `ref_side_alignment` define the types of alignment on mod/ref side, as sometimes alignment is not the same for both.
       - Attributes `mod_side_shapes` and `ref_side_shapes` need to be defined to tell framework what kinds of shapes are on each side.
       - Attributes `mod_ratio` and `ref_ratio` need to be defined so the framework knows what area ratio needs to be maintained on each side.
    - **Bisection** : the modi shape is in the center, straddled by 2 ref shapes on left and right. Acts similarly to stevens (e.g. Absolute Area Ratio Bisection)
       - Attribute `ref_size` now takes in array of TWO numbers (since there are 2 ref shapes)
    - **Interference** : one shape on ref side and one on mod side - but the shape on the mod side is a compound shape (e.g. Circle, Square Interference) (AKA a triangle is embedded inside a circle, and the whole thing scales with user input)
  - All the graphical code previously in model level AKA `estimation.js` now lives inside the graphing component as a custom script (`estimation_plot.js`).
  - All computations for shape properties like size, x_pos, y_pos etc. is done at model level due to complexity.
  - New shapes are the fan and cutout-square shapes, otherwise everything else uses Zoe's D3 code.
  - Flicker capability is added on reference shapes - can control duration of how long shapes show, and how long shapes don't show. This essentially then loops e.g. if `duration_on` = 1000ms and `duration_off` = 1500ms, flicker will be: show shapes for 1000ms, then off for 1500ms, then on for 1000ms etc. 
  - Initially all the subconditions were programmatically generated as per Zoe's original code. It was becoming tricky to extend because new conditions did not necessarily generate subconditions in the same way, so to make it easier for Tina to customize her values, I refactored  `estimation_data.js` to be similar to `jnd_data.js` where every subcondition attribute is defined (so no longer generated programmatically).

