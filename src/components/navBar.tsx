import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "../../node_modules/@mui/material/index"
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Link  from 'next/link'
export const NavBar = () =>{
    return (
        <AppBar position = 'static' style = {{backgroundColor: "#0F2C59"}}>
            <Toolbar>
                <IconButton size = 'large' edge = 'start' color = 'inherit' aria-label='logo'>
                    <PedalBikeIcon></PedalBikeIcon>
                </IconButton>
                <Typography variant='h6' component = 'div' sx={{flexGrow:1}}>
                <Link href='/' style={{ textDecoration: 'none', color : 'inherit' }}>BIKES</Link>
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color = 'inherit'></Button>
                    <Button color = 'inherit'><Link href='/parkings' style={{ textDecoration: 'none', color : 'inherit' }}>Parkings</Link></Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}