export const getGridSpanClasses = (index: number, total: number) => {
  const base = "col-span-1 sm:col-span-1 xl:col-span-2";
  const remainder = total % 3;
  const last = total - 1;

  if (remainder === 1 && index === last) return "col-span-1 sm:col-span-2 xl:col-span-6";

  if (remainder === 2 && (index === last || index === last - 1))
    return "col-span-1 sm:col-span-1 xl:col-span-3";

  return base;
};

export default getGridSpanClasses;