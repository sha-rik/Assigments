Problem Statement
You are building a simple message board that randomly displays a success or error message after a short delay when the user clicks a button. This simulates how real applications wait for an operation (like saving data) to complete and may either succeed or fail.

Your Task
Create a webpage that behaves as follows:

The page displays a button labeled Show Message.
A message area is shown below the button.
When the player clicks the button:
The button immediately disables, and the message area displays "Loading message...".
A Promise starts, which resolves or rejects after 2 seconds.
Whether it resolves or rejects is determined randomly using Math.random(). If Math.random() > 0.5, the Promise resolves; otherwise, it rejects.
If the Promise resolves, display "Message loaded successfully!" and set the text color to green.
If the Promise rejects, display "Something went wrong!" and set the text color to red.
The button re-enables after the Promise is resolved or rejected.
Use .then() and .catch() to handle both resolved and rejected outcomes.