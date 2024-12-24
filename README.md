# Silent Error: Division by Zero in JavaScript Function

This repository demonstrates a subtle error in JavaScript that can lead to unexpected results if not handled properly.

## Description:

The `myFunction` function is designed to divide two numbers. It seemingly handles cases where one or both inputs are zero. However, this is because it returns 0 on such conditions in the beginning. A better approach is to check for division by zero before performing the operation, and the solution shows how to perform such a check to ensure this bug is avoided.

## How to Reproduce:

1. Clone this repository.
2. Open `bug.js` to see the flawed function.
3. Run `bug.js` using a Node.js environment.
4. Observe the output: The function incorrectly handles the scenario in which the divisor is zero (the output will be 0).
5. Open `bugSolution.js` to see a corrected version of the function.

## Solution:

The solution (`bugSolution.js`) adds an explicit check to prevent division by zero.  This avoids the unexpected behavior of the original code, providing a more reliable and predictable function.
