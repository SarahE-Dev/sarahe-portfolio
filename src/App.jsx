import { useState } from 'react'
import myTheme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { AppBar, Avatar, Box, Button, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <ThemeProvider theme={myTheme}>
        <AppBar position='fixed'>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <IconButton edge='start' color='inherit' aria-label='menu'
            onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu />
            </IconButton>
            
              <div>
              
                <Button color='primary'>Projects</Button>
                
              </div>
            <IconButton edge='end' ><Avatar /></IconButton>
            
            </Toolbar>        </AppBar>
            <Drawer sx={{margin: 'auto'}} anchor='left' open={menuOpen} onClose={() => setMenuOpen(false)}>
              <List
                sx={{
                  width: 250,
                  backgroundColor: 'background.paper'
                }}
              >
                <Typography variant='h6' >
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
                </Typography>
</List>
                <Toolbar>
                  <Button onClick={() => setMenuOpen(false)}>Close</Button>
                </Toolbar>
          </Drawer>
          <Box sx={{height: '100vh', backgroundColor: 
          'background.default', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column  '
        }}>
          <Typography color='aqua' textAlign='center' variant='h1'>Welcome to my portfolio</Typography>
          </Box>
        
    </ThemeProvider>
  )
}

export default App
