import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {
  Alert,
  Box,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from '@mui/material';
import { useLazyLoginQuery } from 'entities/auth';
import { useState } from 'react';

type Props = {};

export function LoginPage({}: Props) {
  const [login, { isError }] = useLazyLoginQuery();
  const [userName, setUserName] = useState('12');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ password, userName });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100%"
      sx={{ p: 2 }}
    >
      <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="userName"
          label="Логин"
          name="userName"
          autoComplete="username"
          autoFocus
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(event.target.value);
          }}
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
          }}
        />
        <Box height='40px'>
          {isError && <Alert severity="error">Неверный логин или пароль</Alert>}
        </Box>
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
  );
}
