import { Avatar, Button, IconButton, Tooltip } from "@mui/material"
import { deepOrange, deepPurple } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
export const Mui:React.FC=()=>{
    return <>
    <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Avatar>H</Avatar>
<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
<Tooltip title="Delete">
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>
    </>
}