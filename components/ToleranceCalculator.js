import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ToleranceCalculator = () => {
  const [hole, setHole] = useState("");
  const [holeDimensionalTolerancePlus, setHoleDimensionalTolerancePlus] = useState("");
  const [holeDimensionalToleranceMinus, setHoleDimensionalToleranceMinus] = useState("");
  const [shaft, setShaft] = useState("");
  const [shaftDimensionalTolerancePlus, setShaftDimensionalTolerancePlus] = useState("");
  const [shaftDimensionalToleranceMinus, setShaftDimensionalToleranceMinus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (isValidNumber(hole) && isValidNumber(holeDimensionalTolerancePlus) && isValidNumber(holeDimensionalToleranceMinus) && isValidNumber(shaft) && isValidNumber(shaftDimensionalTolerancePlus) && isValidNumber(shaftDimensionalToleranceMinus)) {
      setSubmitted(true);
    } else {
      alert("Please enter valid numbers");
    }
  };

  const handleReset = () => {
    setHole("");
    setHoleDimensionalTolerancePlus("");
    setHoleDimensionalToleranceMinus("");
    setShaft("");
    setShaftDimensionalTolerancePlus("");
    setShaftDimensionalToleranceMinus("");
    setSubmitted(false);
  };

  const isValidNumber = (str) => {
    const reg = /^\d*\.?\d*$/;
    return reg.test(str);
  };

  const calculateInterferenceAndGap = () => {
    const minHole = parseFloat(hole) - parseFloat(holeDimensionalToleranceMinus);
    const maxHole = parseFloat(hole) + parseFloat(holeDimensionalTolerancePlus);
    const minShaft = parseFloat(shaft) - parseFloat(shaftDimensionalToleranceMinus);
    const maxShaft = parseFloat(shaft) + parseFloat(shaftDimensionalTolerancePlus);

    return {
      interferenceValue: maxShaft - minHole,
      gapValue: maxHole - minShaft,
    };
  };

  const { interferenceValue, gapValue } = calculateInterferenceAndGap();

  const CustomLabel = (props) => {
    const { x, y, value } = props;
    const numberValue = Number(value);
    return (
      <text x={x} y={y} dy={-4} fill="#8884d8" fontSize={14} fontWeight="bold" textAnchor="middle">
        {numberValue.toFixed(2)}
      </text>
    );
  };
  

  return (
    <div>
      {/* Input Fields */}
      <div>
            
      <Grid container spacing={2}>
  <Grid item xs={6}>
    <Typography variant="h6">Hole</Typography>
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
      <TextField type="text" label="Nominal" value={hole} onChange={(e) => isValidNumber(e.target.value) && setHole(e.target.value)} />
      <TextField type="text" label="Tolerance (+)" value={holeDimensionalTolerancePlus} onChange={(e) => isValidNumber(e.target.value) && setHoleDimensionalTolerancePlus(e.target.value)} />
      <TextField type="text" label="Tolerance (-)" value={holeDimensionalToleranceMinus} onChange={(e) => isValidNumber(e.target.value) && setHoleDimensionalToleranceMinus(e.target.value)} />
    </Box>
  </Grid>

  <Grid item xs={6}>
    <Typography variant="h6">Shaft</Typography>
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
      <TextField type="text" label="Nominal" value={shaft} onChange={(e) => isValidNumber(e.target.value) && setShaft(e.target.value)} />
      <TextField type="text" label="Tolerance (+)" value={shaftDimensionalTolerancePlus} onChange={(e) => isValidNumber(e.target.value) && setShaftDimensionalTolerancePlus(e.target.value)} />
      <TextField type="text" label="Tolerance (-)" value={shaftDimensionalToleranceMinus} onChange={(e) => isValidNumber(e.target.value) && setShaftDimensionalToleranceMinus(e.target.value)} />
    </Box>
  </Grid>
</Grid>

      </div>

      
            {/* Chart */}
            <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            layout="vertical"
            data={[
              { name: 'Hole Min', value: hole - holeDimensionalToleranceMinus },
              { name: 'Hole Max', value: hole + holeDimensionalTolerancePlus },
              { name: 'Shaft Min', value: shaft - shaftDimensionalToleranceMinus },
              { name: 'Shaft Max', value: shaft + shaftDimensionalTolerancePlus },
            ]}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" barSize={20} fill="#413ea0" label={<CustomLabel />} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>


      <Button variant="contained" onClick={handleSubmit} style={{ marginRight: '10px' }}>
        Submit
      </Button>

      {/* Reset Button */}
      
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>

      {submitted && (
        <>
          
      {/* Interference and Gap */}
      <Paper>
        <h3>Interference: {interferenceValue.toFixed(2)}</h3>
        <h3>Gap: {gapValue.toFixed(2)}</h3>
      </Paper>
            
        </>
      )}

      
    </div>
  );
};

export default ToleranceCalculator;

