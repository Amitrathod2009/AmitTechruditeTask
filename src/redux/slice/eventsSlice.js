import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  events: [],
  status: 'idle',
  error: null,
  favorites: [],
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    console.log('[fetchEvents]' ,token);
    const response = await axios.post('http://3.7.81.243/projects/plie-api/public/api/events-listing', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('fetchEvents RESPONSE ===>', response);
    return response.data.data.events;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  favorites: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const eventId = action.payload;
      if (state.favorites?.includes(eventId)) {
        state.favorites = state.favorites.filter(id => id !== eventId);
      } else {
        state.favorites.push(eventId);
      }
    },
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite, setFavorites } = eventsSlice.actions;

export default eventsSlice.reducer;
