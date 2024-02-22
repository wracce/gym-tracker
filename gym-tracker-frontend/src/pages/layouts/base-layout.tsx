import { Outlet } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';

type Props = {};

export function BaseLayout({}: Props) {
  return (
    <>
      <CssBaseline />
      <Box height="100vh">
        <Outlet />
      </Box>
    </>
  );
}
