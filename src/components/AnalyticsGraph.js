import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryLabel,
  LineSegment,
} from 'victory-native';

const style = {
  xAxis: {
    axis: { stroke: '#4E9685', strokeWidth: 3, width: 100 },
    ticks: { stroke: 'transparent' },
    grid: { stroke: '#5EA890', strokeDasharray: '3,3' },
  }
}
const AnalyticsGraph = (props) => {
  const { ticks } = props;
  let { data } = props;
  const [loader, setLoader] = useState(false);

  if (data.length === 1) {
    // fix bug in charts when only one value needs to be shown
    data = [...data, { x: 1, y: data[0].y }];
  }

  // hack chart drawing to be done in background
  useEffect(() => {
    (async () => {
      setLoader(true);
    })();
  }, []);

  return (
    <View>
      {data && loader ? (
        <VictoryChart
          // domainPadding={{ x: [5, 5], y: [0, 0] }}
          padding={{
            left: 25, right: 60, bottom: 40, top: 20,
          }}
          height={props.height}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            dependentAxis
            crossAxis={false}
            orientation="left"
            domain={{ y: [0, 100] }}

            style={{
              axis: { stroke: 'transparent' },
              tickLabels: { stroke: 'white', fontWeight: 'bold' },
              ticks: { stroke: 'transparent' },
              grid: { stroke: '#5EA890', strokeDasharray: '3,3' },
            }}
            tickLabelComponent={
              <VictoryLabel dy={0} dx={10} style={{ fill: 'white', fontSize: 12 }} />
            }
          />

          <VictoryAxis
            orientation="bottom"

            fixLabelOverlap={true}
            tickCount={7}
            style={style.xAxis}
            axisComponent={<LineSegment x2={310} />}
            tickLabelComponent={(
              <VictoryLabel
                dy={10}
                text={datum => [data[datum - 1].x.split(' ')[0], data[datum - 1].x.split(' ')[1]]}
                style={{ fill: 'white', fontSize: 12 }}
              />
)}
          />

          <VictoryLine
            style={{ data: { stroke: 'white' } }}
            data={data}
            interpolation="monotoneX"
          />
        </VictoryChart>
      ) : (
        <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator animating />
        </View>

      )}
    </View>
  );
};

export default AnalyticsGraph;
