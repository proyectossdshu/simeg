import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = (props) => {
  const { categories, series, title = "" } = props;

  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      chart: {
        type: "column",
      },
      title: {
        text: title,
      },
      xAxis: {
        categories: categories,
      },
      yAxis: [
        {
          min: 0,
          title: {
            text: title.right,
          },
        },
        {
          title: {
            text: title.left,
          },
          opposite: true,
        },
      ],
      credits: {
        enabled: false,
      },
      legend: {
        shadow: false,
      },
      tooltip: {
        shared: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
          grouping: false,
          shadow: false,
          dataLabels: {
            enabled: true,
            style: { fontSize: "8px" },
          },
        },
      },
      series: series,
    });

    // eslint-disable-next-line
  }, [categories, series]);

  return (
    data !== null && (
      <>
        <HighchartsReact highcharts={Highcharts} options={data} type="column" />
      </>
    )
  );
};

export default Chart;
