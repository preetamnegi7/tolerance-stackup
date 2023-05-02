import React from 'react';
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Text,
} from 'recharts';

const CustomLabel = (props) => {
  const { x, y, width, value } = props;
  const xOffset = x + width / 2;
  const yOffset = y - 4;

  return (
    <Text x={xOffset} y={yOffset} textAnchor="middle" fontSize="12" fontWeight="bold">
      {value.toFixed(2)}
    </Text>
  );
};

const MultiDimensionalStackupChart = ({ dimensions }) => {
  const data = dimensions.map((dim, index) => ({
    name: `Dimension ${index + 1}`,
    minValue: dim.nominal - dim.toleranceMinus,
    maxValue: dim.nominal + dim.tolerancePlus,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Bar dataKey="minValue" barSize={20} fill="#413ea0" label={<CustomLabel />} />
        <Bar dataKey="maxValue" barSize={20} fill="#1e88e5" label={<CustomLabel />} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default MultiDimensionalStackupChart;
