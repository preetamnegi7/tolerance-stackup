import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ToleranceCalculator = () => {
  const [hole, setHole] = useState(0);
  const [holeDimensionalTolerancePlus, setHoleDimensionalTolerancePlus] = useState(0);
  const [holeDimensionalToleranceMinus, setHoleDimensionalToleranceMinus] = useState(0);
  const [shaft, setShaft] = useState(0);
  const [shaftDimensionalTolerancePlus, setShaftDimensionalTolerancePlus] = useState(0);
  const [shaftDimensionalToleranceMinus, setShaftDimensionalToleranceMinus] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };
  const handleReset = () => {
    setHole(0);
    setHoleDimensionalTolerancePlus(0);
    setHoleDimensionalToleranceMinus(0);
    setShaft(0);
    setShaftDimensionalTolerancePlus(0);
    setShaftDimensionalToleranceMinus(0);
    setSubmitted(false);
  };

  const calculateInterferenceAndGap = () => {
    const minHole = hole - holeDimensionalToleranceMinus;
    const maxHole = hole + holeDimensionalTolerancePlus;
    const minShaft = shaft - shaftDimensionalToleranceMinus;
    const maxShaft = shaft + shaftDimensionalTolerancePlus;

    return {
      interferenceValue: maxShaft - minHole,
      gapValue: maxHole - minShaft,
    };
  };

  const { interferenceValue, gapValue } = calculateInterferenceAndGap();

  const CustomLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text x={x} y={y} dy={-4} fill="#8884d8" fontSize={14} fontWeight="bold" textAnchor="middle">
        {value.toFixed(2)}
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
            <TextField label="Nominal" value={hole} onChange={(e) => setHole(parseFloat(e.target.value) || 0)} />
            <TextField label="Tolerance (+)" value={holeDimensionalTolerancePlus} onChange={(e) => setHoleDimensionalTolerancePlus(parseFloat(e.target.value) || 0)} />
            <TextField label="Tolerance (-)" value={holeDimensionalToleranceMinus} onChange={(e) => setHoleDimensionalToleranceMinus(parseFloat(e.target.value) || 0)} />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6">Shaft</Typography>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}>
            <TextField label="Nominal" value={shaft} onChange={(e) => setShaft(parseFloat(e.target.value) || 0)} />
            <TextField label="Tolerance (+)" value={shaftDimensionalTolerancePlus} onChange={(e) => setShaftDimensionalTolerancePlus(parseFloat(e.target.value) || 0)} />
            <TextField label="Tolerance (-)" value={shaftDimensionalToleranceMinus} onChange={(e) => setShaftDimensionalToleranceMinus(parseFloat(e.target.value) || 0)} />
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

