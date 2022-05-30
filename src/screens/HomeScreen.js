import React from 'react'
import{Box, Paper, Typography, Stack} from '@mui/material'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import Header from '../components/Header'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HomeScreen = () => {


  const {text} = useTypewriter({
    words: ['SUDEEP PAUDEL', 'REACT DEVELOPER', 'WEB DESIGNER'],
    speed: 100,
    cursor: '_',
    loop: true,
    color: 'red',

    
  })

  return (
    <> 

    
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        flex: '1 1 auto',
        width: '100%',
        height: '100vh',
        
      },
    }}
  >

    

   
      
        <Typography variant="h2" component="h2" textAlign="center" >
         Hello i`am {text}
         <Cursor/>
        </Typography>
        
      
        
    
    <Box sx={{display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        flex: '1 1 auto',
          position: 'absolute',
          bottom: '0',
         height:'5rem',
        margin: 'auto',
        width: '100%',
        
        
      },}}>
      <ArrowDownwardIcon fontSize='large'/>
    </Box>
    
  </Box>

  </>
  )
}

export default HomeScreen