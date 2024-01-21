import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';

type Props = {};

export function BaseLayout({}: Props) {
  return (
    <Container>
      <CssBaseline />
      <Box height="100vh">
        <Outlet />
      </Box>
    </Container>
  );
}
