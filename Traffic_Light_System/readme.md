Challenge 2: Traffic Light System
Problem Statement
You are building a simple traffic light simulation using Promise chaining. One light changes after another, showing how Promises can control tasks that happen in order over time.

Your Task
Create a webpage that behaves as follows:

The page displays one circle in the center of the screen, representing the traffic light.
A Start button appears below the light. The sequence begins only when the player clicks Start. The Start button should be disabled once clicked.
A timer is displayed below the light, showing how many seconds are left for the current color.
The color of the light changes in this order:
Green for 6 seconds
Yellow for 2 seconds
Red for 6 seconds
After all three lights finish, show the text “Cycle complete.” below the light. Also, re-enable the start button.
Use Promise chaining to control the timing of color changes. Do not use nested setTimeout() calls.
Each color change should be handled by a function that returns a Promise and resolves after the required delay.