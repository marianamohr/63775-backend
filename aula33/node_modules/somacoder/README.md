
# soma

`soma` is a simple JavaScript function that sums any number of numeric arguments. It handles various edge cases, such as no input, non-numeric values, and negative numbers.

## Installation

Install the package via npm:

```bash
npm install somaCoder
```

## Usage

After installation, you can use the `soma` function in your project:

```js
const { soma } = require('somaCoder');

console.log(soma(1, 2, 3)); // Output: 6
```


### Example

```js
// Summing multiple numbers
soma(1, 2, 3); // returns 6

// No arguments
soma(); // returns 0

// Non-numeric argument
soma(1, "2", 3); // returns null

// Handling negative numbers
soma(-1, -2, -3); // returns -6
```

## Running Tests

This package comes with a test suite powered by Jest. To run the tests, follow these steps:

1. Clone the repository from GitHub:
   ```bash
   git clone git@github.com:marianamohr/somaCoder.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd somaCoder
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the tests:
   ```bash
   npm run test
   ```

The tests include scenarios for:
- Correct summing of numeric arguments.
- Handling of non-numeric arguments.
- Proper behavior when no arguments are passed.
- Summing of negative numbers.
