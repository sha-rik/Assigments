Problem Statement
You are building a small interactive webpage with three buttons that activate one after another. Each button click triggers the next one to become active, creating a clear, step-by-step sequence of user interaction controlled using Promises.

Your Task
Create a webpage that behaves as follows:

The page shows three buttons: Button 1, Button 2, and Button 3.
When the page loads:
Button 1 is enabled.
Button 2 and Button 3 are disabled.
When the player clicks Button 1:
Button 1 becomes disabled.
Button 2 becomes enabled.
When the player clicks Button 2:
Button 2 becomes disabled.
Button 3 becomes enabled.
When the player clicks Button 3:
Button 3 becomes disabled.
A message appears below saying “All steps completed! Thank you.”
Use Promises to control this flow — each button click should resolve a Promise that enables the next button.
Add a short 1-second delay before each next button becomes enabled using setTimeout() inside each Promise.