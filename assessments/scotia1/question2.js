// Velocity - Software Engineer Internship/Co-Op - Summer 2025 (Not global banking)
// https://app.codility.com/c/feedback/G3CXKA-PHM/

const axios = require("axios");
const BASE_URL = require("./baseUrl.js");

const currencyConverter = async (currency, amount) => {
  // Check if currency is empty
  if (typeof currency !== "string" || currency.trim() === "") {
    throw new Error("Currency is empty");
  }

  // Check if amount is not a number or lt/eq to 0
  if (!isFinite(amount) || isNaN(amount) || typeof amount !== "number" || amount <= 0) {
    throw new Error("Invalid amount");
  }

  try {
    // Fetch data from API
    const url = `${BASE_URL}?currency=${currency}`;
    const response = await axios.get(url);
    const data = response.data.data;

    const currencies = [];
    let strongestCurrency = null;
    let weakestCurrency = null;

    Object.keys(data).forEach((key, i) => {
      const mulipliedAmount = data[key] * amount;
      const currencyObject = {
        currency: key,
        amount: Math.round(mulipliedAmount),
      };

      // Push to currencies array
      currencies.push(currencyObject);

      // Set strongest currency
      if (strongestCurrency === null || mulipliedAmount < strongestCurrency.amount) {
        strongestCurrency = currencyObject;
      }

      // Set weakest currency
      if (weakestCurrency === null || mulipliedAmount > weakestCurrency.amount) {
        weakestCurrency = currencyObject;
      }
    });

    // Sort from strongest to weakest currency
    currencies.sort((a, b) => b.amount - a.amount);

    // Return data
    return {
      currencies,
      strongestCurrency,
      weakestCurrency,
    };
  } catch (error) {
    throw new Error(error.data.message);
  }
};

module.exports = currencyConverter;
