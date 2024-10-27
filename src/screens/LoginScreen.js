import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput, Button, Divider, IconButton } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthenticated } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { styles } from '../styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://3.7.81.243/projects/plie-api/public/api/login', {
        email,
        password,
      });
      console.log('response ===>', response);
      if (response.data.success) {

        await AsyncStorage.setItem('userToken', response.data.data.token);
        console.log('LOGIN TOKEN===>', response.data.data.token);


        await AsyncStorage.setItem('userFirstName', response.data.data.user.usr_fname);

        navigation.navigate('AuthCheck');
        dispatch(setAuthenticated(true));
      } else {
        Alert.alert('Error', 'Incorrect username or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Incorrect username or password');
    }
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Pliē</Text>
        <IconButton icon="image" size={50} />
      </View>

      <View style={{ backgroundColor: 'white', paddingHorizontal: 20, paddingTop: 20 }}
      >
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            mode="outlined"
            left={<TextInput.Icon name="email" />}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            mode="outlined"
            secureTextEntry={!showPassword}
            left={<TextInput.Icon name="lock" />}
            right={
              <TextInput.Icon
                onPress={() => setShowPassword(!showPassword)}
                icon={showPassword ? 'eye-off' : 'eye'}
              />
            }
          />

          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
          <Button mode="contained" style={styles.signInButton} onPress={handleLogin}>
            Sign In
          </Button>

        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
          <Text style={styles.signUpText}>
            Not a member? <Text style={styles.signUpLink}>Sign Up Here</Text>
          </Text>
        </View>

        <View style={styles.dividerContainer}>
          <Divider style={styles.dividerLine} />
          <Text style={styles.orText}>or Sign In with:</Text>
          <Divider style={styles.dividerLine} />
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../../src/assets/images/google.png')} style={styles.socialIconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../../src/assets/images/apple.png')} style={styles.socialIconImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../../src/assets/images/facebook.png')} style={styles.socialIconImage} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.guestContainer}>
          <Text style={styles.guestText}>Enter as Guest</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}

