export const formatNumber = (value: number): string => {
  if (value < 1000) return value.toFixed(1);
  const units = ['K', 'M', 'B', 'T'];
  let v = value;
  let i = -1;
  while (v >= 1000 && i < units.length - 1) { v /= 1000; i++; }
  return `${v.toFixed(2)}${units[i]}`;
};
