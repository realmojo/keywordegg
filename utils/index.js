export const formatNumberWithCommas = (number) => {
  return new Intl.NumberFormat().format(number);
};
