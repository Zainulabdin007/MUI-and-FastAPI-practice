import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, TextField, Button, Stack, Snackbar, Alert, Card, CardContent, Tabs, Tab } from '@mui/material';

function App() {
  const [message, setmessage] = useState('');
  const [snackbar, setsnackbar] = useState(false);
  const [age, setage] = useState('');
  const [tabindex, settabindex] = useState(0);
  const [weight, setweight] = useState('');
  const [afterconversion, setafterconversion] = useState(0);
useEffect(()=> { document.title="MUI Practice"}, [])
  return (
    <>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setsnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setsnackbar(false)}>
          {`hello ${message || 'guest'}, age ${age || 'unknown'}, ${weight || 'nothing entered'}`}
        </Alert>
      </Snackbar>

      <AppBar position='static'>
        <Toolbar>
          <Typography>
            Zainulabdin Bughio's website
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        <Tabs value={tabindex} onChange={(e, newval) => settabindex(newval)}>
          <Tab label="home" />
          <Tab label="profile" />
          <Tab label="Settings" />
          <Tab label="weight converter" />
        </Tabs>

        {tabindex === 0 && (
          <Stack spacing={2}>
            <Typography variant="h4">welcome to my MUI site</Typography>
            <TextField
              label="enter your name"
              variant="outlined"
              fullWidth
              value={message}
              onChange={e => setmessage(e.target.value)}
            />
            <TextField
              label="enter your age"
              variant="outlined"
              fullWidth
              value={age}
              onChange={e => setage(e.target.value)}
            />
            <Button
              sx={{ p: 4 }}
              variant="contained"
              color='primary'
              onClick={() => {
                setsnackbar(true);
                document.title = `welcome ${message || 'guest'}`;
              }}
            >
              submit
            </Button>
            <Card>
              <CardContent>
                <Typography variant='h6'>user summary</Typography>
                <Typography>Name : {message || "no name entered"}</Typography>
                <Typography>Age : {age || "no age entered"}</Typography>
              </CardContent>
            </Card>
          </Stack>
        )}

        {tabindex === 1 && (
          <Typography variant="h6">this is where the profile will go</Typography>
        )}

        {tabindex === 2 && (
          <Typography>this is where the settings will go</Typography>
        )}

        {tabindex === 3 && (
          <Stack spacing={2}>
            <Typography variant="h6">weight converter</Typography>
            <TextField
              value={weight}
              fullWidth
              label="enter the weight"
              variant="outlined"
              onChange={e => setweight(e.target.value)}
            />
            <Button
              color='primary'
              variant="contained"
              onClick={async () => {
                if (!weight) {
                  alert("Please enter a weight");
                  return;
                }
                try {
                  const response = await fetch("http://127.0.0.1:8000/convert-to-lbs", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ weight: parseFloat(weight) }),
                  });
                  if (!response.ok) throw new Error("API error");
                  const data = await response.json();
                  setafterconversion(data.pounds);
                  alert(`the weight ${weight} kg in pounds is ${data.pounds} lbs`);
                } catch (error) {
                  alert("Conversion to lbs failed: " + error.message);
                }
              }}
            >
              Convert to lbs
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                if (!weight) {
                  alert("Please enter a weight");
                  return;
                }
                try {
                  const response = await fetch("http://127.0.0.1:8000/convert-to-kg", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ weight: parseFloat(weight) }),
                  });
                  if (!response.ok) throw new Error("API error");
                  const data = await response.json();
                  setafterconversion(data.kilograms);
                  alert(`the weight ${weight} lbs converted is ${data.kilograms} kg`);
                } catch (error) {
                  alert("Conversion to kg failed: " + error.message);
                }
              }}
            >
              Convert to kg
            </Button>
          </Stack>
        )}
      </Box>
    </>
  );
}

export default App;
