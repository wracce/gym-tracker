import {IconButton } from '@mui/material';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate } from 'react-router-dom';

export function Backward() {
  const navigate = useNavigate();

  return (
    <IconButton
     
      onClick={() => {
        navigate(-1);
      }}
    >
      <ExitToAppOutlinedIcon fontSize="large"></ExitToAppOutlinedIcon>
    </IconButton>
  );
}
