export function getOptions(textTitle: string) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        text: `Измерения в ${textTitle}ах`,
        display: true,
      },
      datalabels: {
        display: false,
      },
    },
  };
}
