
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Convert inputs to numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // Check for non-numeric input
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error('Non-numeric input provided', new Error().stack);
    document.body.innerHTML = '<h1>Something critical went wrong. Please reload the page.</h1>';
    return;
  }

  // Check for division by zero
  if (dividerNum === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error('Division by zero', new Error().stack);
    return;
  }

  // Perform division
  const divisionResult = dividendNum / dividerNum;

  // Display result
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } else {
    result.innerText = Math.floor(divisionResult);
  }
});

