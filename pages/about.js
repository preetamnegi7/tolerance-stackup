import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1, padding: '16px' }}>
        <Typography variant="h4" sx={{ marginBottom: '16px' }}>
          About Tolerance Stack-up Calculator
        </Typography>
        
        <Typography variant="body1" paragraph>
          The Tolerance Stack-up Calculator is a powerful tool designed to help engineers and designers perform accurate calculations in multi-dimensional tolerance stack-up analysis. This calculator offers two types of functionality:
        </Typography>
        <Typography variant="body1">
          1. <strong>Linear Stack-up:</strong> Analyzes the combined effect of part tolerances in a linear assembly.
        </Typography>
        <Typography variant="body1" paragraph>
          2. <strong>Multi-Dimensional Stack-up:</strong> Computes the total tolerance stack-up for assemblies with multiple dimensions and varied tolerances, providing guidance on how to adjust nominal dimensions and tolerances to achieve the desired final specifications.
        </Typography>
        <Typography variant="body1" paragraph>
          With the Tolerance Stack-up Calculator, engineers can easily identify potential issues in their designs and make necessary adjustments to ensure optimal performance and manufacturability.
        </Typography>

        <Typography variant="h5" sx={{ marginTop: '16px', marginBottom: '16px' }}>
          About Developer
        </Typography>

        <Typography variant="body1" paragraph>
          Dedicated and results-driven Mechanical Engineer with a proven track record in product design and development, specializing in automotive products, components, and machinery. Demonstrates exceptional project and program management skills, with a strong emphasis on data-driven modeling and artificial intelligence (AI), including machine learning (ML) applications.
        </Typography>
        <Typography variant="body1" paragraph>
          Outside the realm of engineering, I am a passionate content creator, leveraging my expertise as a blogger, YouTuber, and web developer. Proficient in Content Management Systems (CMS), the MERN stack, and Next.js, I enjoy staying ahead of the curve and continuously expanding my skill set.
        </Typography>
        <Typography variant="body1" paragraph>
          Engage with me for innovative engineering solutions, AI-powered strategies, or imaginative digital content.
        </Typography>
        
      </Box>
    </Container>
  );
};

export default About;
