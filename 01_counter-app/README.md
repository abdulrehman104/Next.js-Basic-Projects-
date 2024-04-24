<h1 align="center">Counter App</h1>

## 1. Component Creation:
- I created a component using an arrow function, which will contain all the program's functionalities.

## 2. State Variable:
- Inside the component, I created a state variable using the `useState` hook.

## 3. Event Handlers:
- **handleInc:** This function uses `setCount` to increment the counter's value by 1 whenever the "Increment +" button is clicked.
- **handleDec:** This function uses `setCount` to decrement the counter's value by 1, but only if the current value is greater than 0, preventing negative values. It also uses conditional rendering, working only when the counter's value is not 0 or below.
- **handleReset:** This function uses `useState` to reset the counter to 0 when the "Reset" button is clicked.

**4. JSX Return:**
- In the return statement, I've written JSX, using elements like `div`, `h1`, `p`, and `button` to structure the UI.

**4. Event Handlers (Reiterating for clarity):**
- The code defines three event handlers: `handleInc`, `handleDec`, and `handleReset`. These are called in response to user button interactions:
- **handleInc:** Increments the counter upon "Increment +" clicks.
- **handleDec:** Decrements the counter only if the value is above 0, preventing negatives.
- **handleReset:** Resets the counter to its initial value of 0.

**5. Tailwind CSS Styling:**
- I've used Tailwind CSS to style the counter's appearance.
