# Code Review Process

Below is the process the lab's developers use when reviewing new coded features and conditions to ensure correct functionality and coding standards

## Primary Code Reviewers

Below are the people listed as code reviewers for major/critical new features and conditions. Their task is to ensure the code written fits the lab's coding standards and does not introduce new bugs into the framework

- **Madison**
- **Kevin**
- **Kyle**

## Peer Code Reviewers

For simpler features and conditions that are not time-sensitive and critical to the functionality of the lab. Peer developers will be done in pairs consisting of a senior and junior lab developer.

### Senior Peers

Those who have implemented one or more new conditions or features within the framework

### Junior Peers

Those who have just started out in the lab

## Stakeholders

Stakeholders are the lab members who requested the new feature/condition. Once the developer is done coding the requested feature/condition, they should confirm with the stakeholder that the code fits their requirements before requesting a code review.

Possible stakeholders are listed below
- **Prof. Ronald Rensink**
- **Madison**
- **Jessica**
- **Any researcher at the lab**

## Code Review Format

### Environment
- For non-critical features/conditions, code reviews can be conducted through Google Hangouts and screen shares due to differing schedules 
- For critical features relevant to current research, in-person code reviews are recommended

### Before the Review

Developers must be able to test the new feature/condition and ensure it's working to stakeholder requirements

#### For Conditions
- Are all subcondition variable combinations tested?
- Does the data properly save to the csv?
- Are all attributes needed by researchers printed out?
- Did the developer run the esdoc bin update command?

#### For Features/Changes to Back-End Code

- Does the feature actually work without bugs?
- Were there compromises that were made?
- Is the workflow of the application disrupted in some way?
- Does it do what we want it to do?

#### The Stakeholder Review

Developers should meet with the stakeholder online/in-person and show the new condition/feature in action.
Once the stakeholder gives the approval, the developer can make a pull request and request a code review.

### The Code Review Itself

The code review is a meeting between a code-reviewer and a developer. The developer shows the feature in action and the code reviewer and developer look at the actual code to ensure quality.

#### For the Reviewer:
- Are variables/functions properly named/documented?
- Is there code being repeated? Lots of if cases or functions that seem to do the same thing with only minor differences?
- Are functions too long? If so, make them into helper functions
- Does the new features actually work?
- Potential edge cases?

If additional fixes are needed, the code reviewer **must document the requested changes on the created pull request.**

Once developer makes additional changes, they must schedule another code review (This one can be shorter or done with image sharing).

Once the code review is complete, the issue can be closed and the pull request merged in.

## Practices to Enforce

To ensure consistency and ease of reference for future lab members, it's important to make sure code and documentation follows the same format.

### Logistical Practices

#### Github Issues
This will be primary place to document and assign wanted features/conditions/bugs/experiment types etc
ALL requirements, feedback, complications, related issues must be documented in Github Issues

#### Branch naming
MUST HAVE CONSISTENT NAMING: `<issue name>_<developer>`

#### Branch merging
- This requires a pipeline to know which features are ready in the same time frame.
- Group issues together by completion date (Github milestones)
- Constant git pulls. If features take more than a week to implement, **must remind them to git pull or rebase from master to update their working copy** so they don’t try to merge in outdated code.


### Coding Practices

#### Quick code
- Reduce nested for-loops if possible
- Ensure performance doesn't take a hit

#### Readable code
- If a function is too bloated move parts into separate helper functions
- If code is repeated across different cases with minimal differences, try combining them into one function

#### Self-documenting Code
- Variables and functions properly named (no *var x = 0;*)
- Comments if needed
##### All new functions need a description in the preamble
- Describe what the function does
- Describe arguments taken in
- Describe in what format the function outputs
- Example input/output if necessary

#### Documented Mark-Down Files
- Refer to wiki for how-to
- For new experiments or properties
- E.g. since we have new dot types (outlines) these properties need to be documented.







