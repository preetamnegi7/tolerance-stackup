import React from 'react';
import { Box, TextField, Grid } from '@mui/material';

const DimensionInput = ({ dimensions, setDimensions }) => {
  const handleNominalChange = (event, index) => {
    const newDimensions = dimensions.slice();
    newDimensions[index].nominal = parseFloat(event.target.value);
    setDimensions(newDimensions);
  };

  const handleToleranceMinusChange = (event, index) => {
    const newDimensions = dimensions.slice();
    newDimensions[index].toleranceMinus = parseFloat(event.target.value);
    setDimensions(newDimensions);
  };

  const handleTolerancePlusChange = (event, index) => {
    const newDimensions = dimensions.slice();
    newDimensions[index].tolerancePlus = parseFloat(event.target.value);
    setDimensions(newDimensions);
  };

  return (
    <Box>
      {dimensions.map((dimension, index) => (
        <Grid container spacing={2} key={dimension.id} style={{ marginTop: index !== 0 ? '16px' : 0 }}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label={`Dimension ${dimension.id} Nominal`}
              value={dimension.nominal}
              onChange={(event) => handleNominalChange(event, index)}
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label={`Dimension ${dimension.id} Tolerance -`}
              value={dimension.toleranceMinus}
              onChange={(event) => handleToleranceMinusChange(event, index)}
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label={`Dimension ${dimension.id} Tolerance +`}
              value={dimension.tolerancePlus}
              onChange={(event) => handleTolerancePlusChange(event, index)}
              type="number"
              variant="outlined"
            />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default DimensionInput;
