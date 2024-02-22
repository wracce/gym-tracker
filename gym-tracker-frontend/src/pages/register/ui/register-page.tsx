import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  Divider,
} from '@mui/material';
import { Backward } from 'widgets/backward';
import { useLazyRegisterQuery } from 'entities/auth';
import { User } from 'entities/auth/model/user';
import { Gender } from 'entities/auth/model/gender';

interface RegisterFormData {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
}

export function RegisterPage() {
  const [register] = useLazyRegisterQuery();
  const [formData, setFormData] = useState<User>({
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: Gender.Female,
  });

  const handleChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    register(formData);
    console.log('Form Data:', formData);
  };

  return (
    <>
      {/* <Box display='flex' flexDirection='row-reverse'>
        <Backward  />
      </Box> */}
      <Container component="main" maxWidth="xs">
        <div>
          <Typography pt="20px" component="h1" variant="h4">
            Регистрация
          </Typography>
          <form onSubmit={handleRegister}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Никнейм"
              value={formData.userName}
              onChange={(e) => handleChange('userName', e.target.value)}
            />
            <Divider />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
            />
            <Divider />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Имя"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Фамилия"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Дата рождения"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.birthDate}
              onChange={(e) => handleChange('birthDate', e.target.value)}
            />
            <FormControl component="fieldset" style={{ margin: '10px 0' }}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="Пол"
                value={formData.gender}
                onChange={(e) => handleChange('gender', e.target.value)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                <FormControlLabel value="female" control={<Radio />} label="Женский" />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="ТрансСибирская Магистраль"
                />
              </RadioGroup>
            </FormControl>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Register
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default RegisterPage;
