window.findKeyRatio = function findKeyRatio(element, ratioName) {
  const spanWithText = element.querySelector(".text-medium > span:first-child");

  if (spanWithText && spanWithText.textContent.trim() === ratioName) {
    const valueElement = element.querySelector(".text-bold");
    if (valueElement) {
      return {
        ratioName: ratioName,
        ratioValue: valueElement.textContent.trim(),
      };
    }
  }
  return null;
};

window.findKeyRatioIndustryAvg = function findKeyRatioIndustryAvg(
  element,
  ratioName
) {
  const spanWithText = element.querySelector(".text-medium > span:first-child");

  if (spanWithText && spanWithText.textContent.trim() === ratioName) {
    const valueElements = Array.from(element.querySelectorAll(".insetx-8"));
    const valueElement = valueElements.find((el) =>
      el.textContent.includes("Industry")
    );
    if (valueElement) {
      const match = valueElement.textContent
        .trim()
        .match(/Industry Avg:\s*([\d.]+[\%]?)/);
      if (match) {
        return {
          ratioName: ratioName + " Industry Avg",
          ratioValue: match[1],
        };
      }
    }
  }
  return null;
};

window.keyRatiosElements = document.querySelectorAll(
  "td.keyRatios__table__value"
);

window.ratiosToFind = [
  { name: "EPS Excl. Extraord. Items", method: "findKeyRatio" },
  { name: "P/E Excl. Ex. Items", method: "findKeyRatio" },
  { name: "Beta", method: "findKeyRatio" },
  { name: "Revenue Per Share", method: "findKeyRatio" },
  { name: "P/E Excl. Ex. Items", method: "findKeyRatioIndustryAvg" },
  {
    name: "Diluted EPS Excluding ExtraOrd Items Growth Rate 3Y",
    method: "findKeyRatioIndustryAvg",
  },
];

window.keyRatiosElements.forEach((element) => {
  ratiosToFind.forEach(({ name, method }) => {
    const result =
      method === "findKeyRatio"
        ? window.findKeyRatio(element, name)
        : window.findKeyRatioIndustryAvg(element, name);

    if (result) {
      console.log(result.ratioName, result.ratioValue);
    }
  });
});
