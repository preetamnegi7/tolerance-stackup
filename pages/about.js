import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => {
  return (
    <>
      <Head>
        <title>About - Tolerance Stack Up Calculator</title>
        <meta
          name="description"
          content="Learn more about the Tolerance Stack Up Calculator and its creator, Pritam Singh Negi."
        />
      </Head>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>About Tolerance Stack Up Calculator</Typography>
        <Typography variant="body1" paragraph>
          The Tolerance Stack Up Calculator is a tool designed to help engineers and designers calculate the worst-case tolerance stack up for shafts and holes. The calculator takes into account dimensional tolerances, interference, and gaps to provide accurate results. It also offers visualizations for easy interpretation of the results.
        </Typography>
        <Typography variant="h3" gutterBottom>About Pritam Singh Negi</Typography>
        <Typography variant="body1" paragraph>
          Pritam Singh Negi is an engineer with extensive experience in mechanical design and tolerance analysis. He created the Tolerance Stack Up Calculator to assist engineers and designers in their work and to make the process of calculating tolerances more efficient and accurate.
        </Typography>
        <Typography variant="body1" paragraph>
          Pritam is committed to providing useful tools and resources to the engineering community and continuously strives to improve the Tolerance Stack Up Calculator based on user feedback and industry needs.
        </Typography>
      </Container>
    </>
  );
};

export default About;
