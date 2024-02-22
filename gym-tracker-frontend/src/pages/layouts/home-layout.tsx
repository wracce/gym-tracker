import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  CssBaseline,
} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TodayIcon from '@mui/icons-material/Today';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

type Props = {};

export function HomeLayout({}: Props) {
  const location = useLocation();

  const NavigationBar = (
    <BottomNavigation value={location.pathname}>
      <BottomNavigationAction
        component={Link}
        to="/home/exercises"
        label="Упражнения"
        value="/home/exercises"
        icon={<FitnessCenterIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/home/workouts"
        label="Программы"
        value="/home/workouts"
        icon={<AssignmentIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/home/journal"
        label="Журнал"
        value="/home/journal"
        icon={<TodayIcon />}
      />
            <BottomNavigationAction
        component={Link}
        to="/home/profile"
        label="Профиль"
        value="/home/profile"
        icon={<AccountBoxIcon />}
      />
    </BottomNavigation>
  );

  return (
    <Container>
      <CssBaseline />
      <Box height="calc(100vh - 72px)">
        <Outlet />
      </Box>
      <Box height="72px">{NavigationBar}</Box>
    </Container>
  );
}
