import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthenticated } from '../redux/slice/authSlice';

const AuthCheckScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = await AsyncStorage.getItem('userToken');
      dispatch(setAuthenticated(!!token));
    };

    checkAuthStatus();
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Login');
    }
  }, [isAuthenticated, navigation]);

  return null;
};

export default AuthCheckScreen;
