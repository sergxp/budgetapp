declare global {
  interface Number {
    toCurrency(): String;
  }
}
Number.prototype.toCurrency = function () {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Number(this));
};
export {};
