import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Box, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField } from '@mui/material';

type Props = {};

export function LoginPage({}: Props) {
  return (
    // <Container maxWidth="lg">
    // <CssBaseline />
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100%"
    >
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Войти
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Забыли пароль?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Нет аккаунта?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    // </Container>
  );
}
