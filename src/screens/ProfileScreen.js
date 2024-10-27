import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthenticated } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { styles } from '../styles';

const ProfileScreen = ({ navigation }) => {
  const [userFirstName, setUserFirstName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUserData = async () => {
      const storedFirstName = await AsyncStorage.getItem('userFirstName');
      if (storedFirstName) {
        setUserFirstName(storedFirstName);
      }
    };
    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('AuthCheck');
      dispatch(setAuthenticated(false));
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  return (
    <View style={styles.ProfileContainer}>
      {userFirstName ? <Text style={styles.username}>Hello, {userFirstName}!</Text> : null}
      <Button title="Logout" onPress={handleLogout} color="#21D393" />
    </View>
  );
};


export default ProfileScreen;
