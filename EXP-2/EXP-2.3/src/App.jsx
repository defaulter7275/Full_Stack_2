import React from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Container, Grid, 
  Card, CardContent, CardMedia, Box, TextField, IconButton,
  ThemeProvider, createTheme, CssBaseline
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#6366f1' }, // Modern Indigo
    secondary: { main: '#ec4899' }, // Vibrant Pink
    background: { default: 'transparent' }
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700 }
  },
});

function App() {
  const cards = [
    { title: 'Smart Logic', desc: 'Powerful state management with React hooks.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800' },
    { title: 'Modern UI', desc: 'Google Material Design 3 standards applied.', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800' },
    { title: 'Clean Code', desc: 'Organized, scalable, and modular components.', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800' }
  ];

  const handleNav = (page) => alert(`Moving to ${page} section...`);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="vibrant-bg">
        <AppBar position="sticky" className="glass-nav" elevation={0}>
          <Toolbar className="container">
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 900, letterSpacing: 1 }}>
              MUI STUDIO <span style={{color: '#6366f1'}}>PRO</span>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button sx={{color: '#333', mr: 2}} onClick={() => handleNav('Home')}>Home</Button>
              <Button sx={{color: '#333', mr: 2}} onClick={() => handleNav('Features')}>Features</Button>
              <Button variant="contained" className="pill-btn" onClick={() => alert('Welcome Back!')}>Login</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <Box className="hero-v2 animate-fade">
            <Typography variant="h2" className="gradient-text">
              Material Design <br/> Reimagined
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2, mb: 4, maxWidth: 600, mx: 'auto' }}>
              Experiment 3: Combining Google's Material components with high-end aesthetic layouts for a superior user experience.
            </Typography>
            <Button variant="contained" size="large" className="pill-btn big" onClick={() => alert('Starting Journey...')}>
              Explore Projects
            </Button>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {cards.map((card, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Card className="glass-card card-hover">
                  <CardMedia component="img" height="200" image={card.img} />
                  <CardContent sx={{ p: 3 }}>
                    <Typography gutterBottom variant="h5">{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {card.desc}
                    </Typography>
                    <Button variant="outlined" fullWidth onClick={() => alert(`Details for ${card.title}`)}>
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box className="glass-card contact-form animate-fade">
            <Typography variant="h4" textAlign="center" fontWeight={800} mb={4}>Get in Touch</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Full Name" /></Grid>
              <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address" /></Grid>
              <Grid item xs={12}><TextField fullWidth multiline rows={4} label="How can we help?" /></Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" size="large" className="pill-btn" onClick={() => alert('Message Sent!')}>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <footer className="simple-footer">
          <Typography variant="body2" color="text.secondary">
            © 2024 MUI Studio Lab • Design with Purpose
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;