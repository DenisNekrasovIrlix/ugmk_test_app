// Возвращает все месяцы года в текстовом формате
export function getMonths(slice: number, numberMonth?: number) {
  if (numberMonth && Number.isInteger(numberMonth)) {
    const month = new Date(0, numberMonth - 1).toLocaleString("ru", {
      month: "long",
    });
    const updateMonth = month[0].toUpperCase() + month.slice(1, 3);
    return updateMonth;
  }
  return [...(Array(12).keys() as unknown as Array<number>)].map((key) => {
    const month = new Date(0, key).toLocaleString("ru", {
      month: "long",
    });
    const updateMonth = adaptedMonth(month, slice);
    return updateMonth;
  });
}
// Возвращает адаптированный, по кол-ву символов, месяц
export function adaptedMonth(month: string, slice: number) {
  return month[0].toUpperCase() + month.slice(1, slice);
}
// Генерирует рандомный цвет
export function generateColor(opacity: string) {
  return `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${
    Math.random() * 100
  }, ${opacity})`;
}
// Генерирует массив с рандомными цветами
export function generateListColor(length: number, opacity: string) {
  let listColor = [];
  for (let i = 0; i < length; i++)
    listColor.push(
      `rgba(${Math.random() * 100}, ${Math.random() * 100}, ${
        Math.random() * 100
      }, ${opacity})`
    );
  return listColor;
}
