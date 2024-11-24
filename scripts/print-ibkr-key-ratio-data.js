const keyRatiosElements = document.querySelectorAll(
  "td.keyRatios__table__value"
);

keyRatiosElements.forEach((element) => {
  const spanWithText = element.querySelector(".text-medium > span:first-child");

  // Check if the text content matches "P/E Normalized"
  if (spanWithText && spanWithText.textContent.trim() === "P/E Normalized") {
    // Find the span with the value (the bold text)
    const valueElement = element.querySelector(".text-bold");
    if (valueElement) {
      console.log("P/E Normalized Value:", valueElement.textContent.trim());
    }
  }
});
