import React, { useState } from 'react';
import {
  Button,
  TextField,
  Tabs,
  Tab,
  IconButton,
  CircularProgress,
  Box,
  Typography,
  Container,
  Divider,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Google as GoogleIcon } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result); // Set the image URL
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (activeTab === 'signup') {
        const userData = { email, username, profileImage };
        localStorage.setItem('user', JSON.stringify(userData));
        toast.success('Account created successfully', {
          className: 'custom-toast-success',
        });
        setActiveTab('login');
      } else {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email) {
          toast.success('Login successful', {
            className: 'custom-toast-success',
          });
          navigate('/profile');
        } else {
          toast.error('Invalid credentials', {
            className: 'custom-toast-error',
          });
        }
      }
    }, 1000); // Simulate an async operation
  };

  const handleGoogleSignIn = () => {
    navigate('/google-login');
  };

  return (
    <div className="login-container">
      <Container maxWidth="xs" className="login-form-container">
        <Box textAlign="center" mt={5} mb={3}>
          <img
            src="https://the90dc.com/assets/images/90dc_title_white_200.png"
            alt="Community Logo"
            className="logo"
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2 }}>
            Welcome to Our Community
          </Typography>
        </Box>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          centered
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Sign Up" value="signup" />
          <Tab label="Login" value="login" />
        </Tabs>
        <Box mt={3}>
          <form onSubmit={handleSubmit}>
            {activeTab === 'signup' && (
              <>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="image-upload-input"
                  required
                />
                {profileImage && (
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="profile-image-preview"
                  />
                )}
              </>
            )}
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ mt: 2, py: 1.5, fontSize: '1rem' }}
            >
              {loading ? <CircularProgress size={24} /> : activeTab === 'signup' ? 'Sign Up' : 'Login'}
            </Button>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ py: 1.5, fontSize: '1rem' }}
              onClick={handleGoogleSignIn}
            >
              {activeTab === 'signup' ? 'Sign Up with Google' : 'Login with Google'}
            </Button>
          </form>
          <Box mt={3} textAlign="center">
            {activeTab === 'signup' ? (
              <Typography variant="body2">
                Already have an account?{' '}
                <Button color="primary" onClick={() => setActiveTab('login')}>
                  Login
                </Button>
              </Typography>
            ) : (
              <Typography variant="body2">
                Don't have an account?{' '}
                <Button color="primary" onClick={() => setActiveTab('signup')}>
                  Sign Up
                </Button>
              </Typography>
            )}
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default SignUp;
