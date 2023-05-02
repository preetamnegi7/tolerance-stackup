import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  Container,
} from '@mui/material';
import DimensionInput from '../components/MultiDimensionalStackup/DimensionInput';
import MultiDimensionalStackupChart from '../components/MultiDimensionalStackup/MultiDimensionalStackupChart';

const MultiDimensionalStackup = () => {
  const [dimensions, setDimensions] = useState([{ id: 1, nominal: 0, toleranceMinus: 0, tolerancePlus: 0 }]);
  const [desiredFinalNominal, setDesiredFinalNominal] = useState(0);
  const [desiredFinalToleranceMinus, setDesiredFinalToleranceMinus] = useState(0);
  const [desiredFinalTolerancePlus, setDesiredFinalTolerancePlus] = useState(0);
  const [result, setResult] = useState(null);



  const calculateToleranceStackup = () => {
    const nominalSum = dimensions.reduce((acc, cur) => acc + cur.nominal, 0);
    const tolerancePlusSum = dimensions.reduce((acc, cur) => acc + cur.tolerancePlus, 0);
    const toleranceMinusSum = dimensions.reduce((acc, cur) => acc + cur.toleranceMinus, 0);

    return {
      nominalSum,
      tolerancePlusSum,
      toleranceMinusSum,
    };
  };

  const calculateResult = (toleranceStackup, desiredFinalNominal, desiredFinalToleranceMinus, desiredFinalTolerancePlus) => {

    const maxDesiredFinalNominal = desiredFinalNominal + desiredFinalTolerancePlus;
    const minDesiredFinalNominal = desiredFinalNominal - desiredFinalToleranceMinus;





    const sumOfMinValues = dimensions.reduce((sum, dimension) => sum + (dimension.nominal - dimension.toleranceMinus), 0);
    const sumOfMaxValues = dimensions.reduce((sum, dimension) => sum + (dimension.nominal + dimension.tolerancePlus), 0);

    const gap = maxDesiredFinalNominal - sumOfMinValues;
    const interference = sumOfMaxValues - minDesiredFinalNominal;

    const gapRounded = parseFloat(gap.toFixed(2));
    const interferenceRounded = parseFloat(interference.toFixed(2));



    const nominalDifference = desiredFinalNominal - toleranceStackup.nominalSum;
    const nominalMessage = nominalDifference === 0
      ? 'No change needed in nominal dimensions.'
      : `Adjust nominal dimensions by ${nominalDifference > 0 ? '+' : ''}${nominalDifference}`;

    const tolerancePlusDifference = desiredFinalTolerancePlus - toleranceStackup.tolerancePlusSum;
    const tolerancePlusMessage = tolerancePlusDifference === 0
      ? 'No change needed in positive tolerances.'
      : `Adjust positive tolerances by ${tolerancePlusDifference > 0 ? '+' : ''}${tolerancePlusDifference}`;

    const toleranceMinusDifference = desiredFinalToleranceMinus - toleranceStackup.toleranceMinusSum;
    const toleranceMinusMessage = toleranceMinusDifference === 0
      ? 'No change needed in negative tolerances.'
      : `Adjust negative tolerances by ${toleranceMinusDifference > 0 ? '+' : ''}${toleranceMinusDifference}`;

    return {
      gapRounded,
      interferenceRounded,
      guidance: {
        nominalMessage,
        tolerancePlusMessage,
        toleranceMinusMessage,
      },
    };
  };


  const generateGuidance = (toleranceStackup, desiredFinalNominal, desiredFinalToleranceMinus, desiredFinalTolerancePlus) => {
    const requiredNominalChange = desiredFinalNominal - toleranceStackup.nominalSum;
    const requiredToleranceMinusChange = desiredFinalToleranceMinus - toleranceStackup.toleranceMinusSum;
    const requiredTolerancePlusChange = desiredFinalTolerancePlus - toleranceStackup.tolerancePlusSum;

    const nominalMessage = requiredNominalChange >= 0
      ? `Increase the nominal value by ${requiredNominalChange} to achieve the desired nominal value.`
      : `Decrease the nominal value by ${-requiredNominalChange} to achieve the desired nominal value.`;

    const toleranceMinusMessage = requiredToleranceMinusChange >= 0
      ? `Increase the tolerance - value by ${requiredToleranceMinusChange} to achieve the desired tolerance - value.`
      : `Decrease the tolerance - value by ${-requiredToleranceMinusChange} to achieve the desired tolerance - value.`;

    const tolerancePlusMessage = requiredTolerancePlusChange >= 0
      ? `Increase the tolerance + value by ${requiredTolerancePlusChange} to achieve the desired tolerance + value.`
      : `Decrease the tolerance + value by ${-requiredTolerancePlusChange} to achieve the desired tolerance + value.`;

    return {
      nominalMessage,
      toleranceMinusMessage,
      tolerancePlusMessage,
    };
  };



  const handleSubmit = () => {
    const toleranceStackup = calculateToleranceStackup();
    const newResult = calculateResult(toleranceStackup, desiredFinalNominal, desiredFinalToleranceMinus, desiredFinalTolerancePlus);
    setResult(newResult);
  };



  const addDimension = () => {
    setDimensions([
      ...dimensions,
      { id: dimensions.length + 1, nominal: 0, tolerance: 0 },
    ]);
  };

  const removeDimension = () => {
    if (dimensions.length > 1) {
      setDimensions(dimensions.slice(0, dimensions.length - 1));
    }
  };

  const resetDimensions = () => {
    setDimensions([{ id: 1, nominal: 0, tolerance: 0 }]);
  };



  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, padding: '16px' }}>
        <Typography variant="h4" sx={{ marginBottom: '16px' }}>
          Multi-Dimensional Tolerance Stack-up
        </Typography>
        <br/>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={addDimension}>
              Add Dimension
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={removeDimension}>
              Remove Dimension
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={resetDimensions}>
              Reset
            </Button>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <DimensionInput dimensions={dimensions} setDimensions={setDimensions} />
        <MultiDimensionalStackupChart dimensions={dimensions} />

        {/* Add desired final tolerance input fields and submit button */}
        <Grid container spacing={2} style={{ marginTop: '16px' }}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Desired Final Nominal"
              value={desiredFinalNominal}
              onChange={(event) => setDesiredFinalNominal(parseFloat(event.target.value))}
              type="number"
              variant="outlined"
              sx={{ marginBottom: '8px' }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Desired Final Tolerance -"
              value={desiredFinalToleranceMinus}
              onChange={(event) => setDesiredFinalToleranceMinus(parseFloat(event.target.value))}
              type="number"
              variant="outlined"
              sx={{ marginBottom: '8px' }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Desired Final Tolerance +"
              value={desiredFinalTolerancePlus}
              onChange={(event) => setDesiredFinalTolerancePlus(parseFloat(event.target.value))}
              type="number"
              variant="outlined"
              sx={{ marginBottom: '8px' }}
            />
          </Grid>
          
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>

        {/* Display result */}
        {result && (
          <Box>
            <Typography variant="h6">Result:</Typography>
            <Typography>Gap: {result.gapRounded}</Typography>
            <Typography>Interference: {result.interferenceRounded}</Typography>
            <Typography variant="h6">Guidance:</Typography>
            <Typography>{result.guidance.nominalMessage}</Typography>
            <Typography>{result.guidance.tolerancePlusMessage}</Typography>
            <Typography>{result.guidance.toleranceMinusMessage}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default MultiDimensionalStackup;