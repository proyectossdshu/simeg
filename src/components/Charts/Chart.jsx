import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = (props) => {
  const { categories, series, title } = props;

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
      credits: {
        enabled: false,
      },
      tooltip: {
        shared: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
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
