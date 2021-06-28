import React, { useMemo } from "react";
import { connect } from "react-redux";
import { scaleLinear, scaleTime } from "@vx/scale";
import { ParentSize } from "@vx/responsive";
import { Group } from "@vx/group";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { LinePath } from "@vx/shape";
import { AreaClosed} from '@vx/shape';
const margin = { top: 60, left: 60, right: 60, bottom: 60 };
const Chart = ({ width, height, forecastData }) => {
  const yMax = useMemo(() => height - margin.top - margin.bottom, [height]);
  const xMax = useMemo(() => width - margin.left - margin.right, [width]);
  const tempMaxFn = ({ max }) => max;
  const tempMinFn = ({ min }) => min;
  const dateFn = ({ date }) => date;
  const getMaxTemp = (tempList) => {
    tempList.sort();
    return tempList[tempList.length - 1] + 5;
  };
  const getMinTemp = (tempList) => {
    tempList.sort();

    return tempList[0] - 5;
  };
  const getMaxMinDate = (dateList) => {
    dateList.sort();
    return [dateList[0], dateList[dateList.length - 1]];
  };
  const tempScale = scaleLinear({
    domain: [
      getMinTemp(forecastData.map(({ min }) => min)),
      getMaxTemp(forecastData.map(({ max }) => max)),
    ],
    range: [yMax, 0],
  });
  console.log([
    getMinTemp(forecastData.map(({ min }) => min)),
    getMaxTemp(forecastData.map(({ max }) => max)),
  ]);
  const dateScale = scaleTime({
    domain: getMaxMinDate(forecastData.map(({ date }) => date)),
    range: [0, xMax],
  });

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={"#91d2f3"}
        rx={14}
      />
      <Group left={margin.left} top={margin.top}>
        <AxisLeft scale={tempScale} numTicks={5} label="Temperature" />
        <AxisBottom label="Date" top={yMax} scale={dateScale} numTicks={5} />
        <LinePath
          data={forecastData}
          x={(d) => dateScale(dateFn(d))}
          y={(d) => tempScale(tempMaxFn(d))}
          stroke="#222"
          strokeWidth={1.5}
          strokeOpacity={0.8}
          strokeDasharray="1,2"
        />
        <LinePath
          data={forecastData}
          x={(d) => dateScale(dateFn(d))}
          y={(d) => tempScale(tempMinFn(d))}
          stroke="#222"
          strokeWidth={1.5}
          strokeOpacity={0.8}
          strokeDasharray="1,2"
        />
        <AreaClosed
            data={forecastData}
            x={d => dateScale(dateFn(d))}
            y0={d => tempScale(tempMinFn(d))}
            y1={d => tempScale(tempMaxFn(d))}
            yScale={tempScale}
            fill="#110d3ce8"
            strokeWidth={1}
            
          />
      </Group>
    </svg>
  );
};
const ForecastBox = ({ loading, forecastData }) => {
  if (loading) {
    return null;
  }
  return (
    <div className="flex-col ">
      <h1 className="title">
        <span>Weather</span> Forecast
      </h1>
      <div className="flex-row justify-center ">
        <div style={{ height: "50vh", width: "70%" }}>
          <ParentSize>
            {(parent) => <Chart {...parent} forecastData={forecastData} />}
          </ParentSize>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ loading, forecastData }) => ({
  loading,
  forecastData,
});
export default connect(mapStateToProps)(ForecastBox);
