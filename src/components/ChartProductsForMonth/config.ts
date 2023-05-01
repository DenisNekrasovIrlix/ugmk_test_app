export function getOptions(textTitle: string) {
  return {
    responsive: true,
    devicePixelRatio: 5,
    maintainAspectRatio: false,
    layout: {
      padding: 40,
    },
    plugins: {
      datalabels: {
        display: true,
        anchor: "end",
        align: "end",
      },
      title: {
        text: `Измерения в ${textTitle}ах`,
        display: true,
        padding: 30,
      },
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          padding: 25,
        },
      },
    },
  } as const;
}
