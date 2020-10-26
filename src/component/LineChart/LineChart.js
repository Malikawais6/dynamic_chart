import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./chart.css";
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const options = {
  chart: {
    type: "spline",
  },
  title: {
    text: "",
  },
  subtitle: {
    text: "User base projection per month",
  },
  xAxis: {
    tickInterval: 1,
    reversed: false,
    title: {
      enabled: false,
      //   text: "Altitude",
    },
    labels: {
      //   format: "{value} k",
    },
    // accessibility: {
    //   rangeDescription: "Range: 0 to 80 km.",
    // },
    maxPadding: 0.05,
    showLastLabel: true,
  },
  yAxis: {
    title: {
      text: "Temperature",
      enabled: false,
    },
    labels: {
      format: "{value} k",
    },
    accessibility: {
      rangeDescription: "Range: -90°C to 20°C.",
    },
    lineWidth: 2,
  },
  legend: {
    enabled: true,
  },
  tooltip: {
    headerFormat: "<b>{series.name}</b><br/>",
    pointFormat: "{point.x}: {point.y}k",
  },
  plotOptions: {
    spline: {
      marker: {
        enable: false,
      },
    },
  },

  series: [
    {
      name: "DAU",
      marker: {
        enabled: false,
      },

      data: [],
    },
    {
      name: "MAU",
      marker: {
        enabled: false,
      },
      color: "#f7a35c",
      data: [],
    },
  ],
};

const LineChart = () => {
  const [data, setData] = useState({ data0: [], data1: [] });

  const handleInputChange = (event, index) => {
    const name = Number(event.target.name);
    const value = event.target.value === "" ? 0 : Number(event.target.value);

    setData((st) => ({
      ...st,
      [`data${index}`]: [...data[`data${index}`], [name * 3, value]],
    }));
  };

  return (
    <div className="chart-container">
      <div className="input-fields">
        <div>
          <span>
            <strong>Install estimate</strong>
          </span>
          <span>Q1</span>
          <span>Q2</span>
          <span>Q3</span>
          <span>Q4</span>
          <span>Q5</span>
          <span>Q6</span>
          <span>Q7</span>
          <span>Q8</span>
          <span>Q9</span>
          <span>Q10</span>
          <span>Q11</span>
          <span>Q12</span>
        </div>
        <div>
          <span>App cross promotion</span>
          {arr.map((input, index) => {
            return (
              <input
                type="text"
                defaultValue={0}
                onBlur={(e) => handleInputChange(e, 0)}
                name={index}
              />
            );
          })}
        </div>
        <div>
          <span>Online cross promotion</span>
          {/* <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="0"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="1"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="2"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="3"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="4"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="5"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="6"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="7"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="8"
          />
          <input
            type="text"
            defaultValue={0}
            onBlur={(e) => handleInputChange(e, 1)}
            name="9"
          />
          <input
            type="text"
            onBlur={(e) => handleInputChange(e, 1)}
            name="10"
          />
          <input
            type="text"
            onBlur={(e) => handleInputChange(e, 1)}
            name="11"
          /> */}
          {arr.map((input, index) => {
            return (
              <input
                type="text"
                defaultValue={0}
                onBlur={(e) => handleInputChange(e, 1)}
                name={index}
              />
            );
          })}
        </div>
        {/* <div>
          <span>Store features</span>
          <input type="text" name="r3q1" />
          <input type="text" name="r3q2" />
          <input type="text" name="r3q3" />
          <input type="text" name="r3q4" />
          <input type="text" name="r3q5" />
          <input type="text" name="r3q6" />
          <input type="text" name="r3q7" />
          <input type="text" name="r3q8" />
          <input type="text" name="r3q9" />
          <input type="text" name="r3q10" />
          <input type="text" name="r3q11" />
          <input type="text" name="r3q12" />
        </div>
        <div>
          <span>IP promotion</span>
          <input type="text" name="r4q1" />
          <input type="text" name="r4q2" />
          <input type="text" name="r4q3" />
          <input type="text" name="r4q4" />
          <input type="text" name="r4q5" />
          <input type="text" name="r4q6" />
          <input type="text" name="r4q7" />
          <input type="text" name="r4q8" />
          <input type="text" name="r4q9" />
          <input type="text" name="r4q10" />
          <input type="text" name="r4q11" />
          <input type="text" name="r4q12" />
        </div>
        <div>
          <span>Other promotion / UA</span>
          <input type="text" name="r5q1" />
          <input type="text" name="r5q2" />
          <input type="text" name="r5q3" />
          <input type="text" name="r5q4" />
          <input type="text" name="r5q5" />
          <input type="text" name="r5q6" />
          <input type="text" name="r5q7" />
          <input type="text" name="r5q8" />
          <input type="text" name="r5q9" />
          <input type="text" name="r5q10" />
          <input type="text" name="r5q11" />
          <input type="text" name="r5q12" />
        </div>
        <div>
          <span>Paid UA </span>
          <input type="text" name="r6q1" />
          <input type="text" name="r6q2" />
          <input type="text" name="r6q3" />
          <input type="text" name="r6q4" />
          <input type="text" name="r6q5" />
          <input type="text" name="r6q6" />
          <input type="text" name="r6q7" />
          <input type="text" name="r6q8" />
          <input type="text" name="r6q9" />
          <input type="text" name="r6q10" />
          <input type="text" name="r6q11" />
          <input type="text" name="r6q12" />
        </div> */}
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          ...options,
          series: options.series.map((series, index) => ({
            ...series,
            data: data[`data${index}`],
          })),
        }}
        // oneToOne={true}
        // allowChartUpdate={true}
        // updateArgs={[true, true, true]}
      />
    </div>
  );
};
export default LineChart;
