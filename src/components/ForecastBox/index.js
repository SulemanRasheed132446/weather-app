import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { scaleLinear, scaleTime } from "@vx/scale";
import { Group } from "@vx/group";
import { curveBasis, curveBasisClosed } from '@vx/curve';

import { AxisLeft, AxisBottom } from "@vx/axis";
import { LinePath, AreaClosed } from "@vx/shape";
const width = 600;
const height = 500;
const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 };
const yMax = height - defaultMargin.top - defaultMargin.bottom;
const xMax = width - defaultMargin.left - defaultMargin.right;
const ForecastBox = ({ forecastData, loading }) => {
  const getMaxMinDate = (dateList) => {
    dateList.sort();
    return [dateList[0], dateList[dateList.length - 1]];
  };
  const tempScale = scaleLinear({
    domain: [0, 100],
    range: [yMax, 0],
  });
  const dateScale = scaleTime({
    domain: getMaxMinDate(forecastData.map(({ date }) => date)),
    range: [0, xMax],
  });
  const dateFn = (d) => d.date;
  const tempMinFn = (d) => d.min;
  const tempMaxFn = (d) => d.max;

  return (
    <div>
      <h2 className="title secondary">
        Weather <span>Forecast</span>
      </h2>
      <CSSTransition
        timeout={300}
        unmountOnExit
        classNames="weather"
        in={forecastData.length ? !loading : false}
      >
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={"white"}
            rx={14}
          
          />
            <Group left={defaultMargin.left} top={defaultMargin.top}>
              <AxisBottom
                top={yMax}
                stroke="blue"
                scale={dateScale}
                numTicks={5}
              />
              <AxisLeft scale={tempScale} />
              <LinePath
              curve={curveBasis}
                data={forecastData}
                x={(d) => dateScale(dateFn(d))}
                y={(d) => tempScale(tempMinFn(d))}
                stroke="#222"
                strokeWidth={1.5}
                strokeOpacity={0.8}
              />
              <LinePath
              curve={curveBasisClosed}
              data={forecastData}
              x={(d) => dateScale(dateFn(d))}
              y={(d) => tempScale(tempMaxFn(d))}
              stroke="#222"
              strokeWidth={1.5}
              strokeOpacity={0.8}
            />
            <AreaClosed
                    yScale={tempScale}
                    data={forecastData}
                    x={(d) => dateScale(dateFn(d))}
                    y0={(d) => tempScale(tempMinFn(d))}
                    y1={(d) => tempScale(tempMaxFn(d))}
                    color="#6AA9FF"
            />
            </Group>
        </svg>
      </CSSTransition>
    </div>
  );
};
const mapStateToProps = ({ forecastData, loading }) => ({
  forecastData,
  loading,
});
export default connect(mapStateToProps, null)(ForecastBox);
