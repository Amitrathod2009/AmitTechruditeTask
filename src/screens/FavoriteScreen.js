import React from 'react';
import { View, Text,FlatList, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slice/eventsSlice';
import { styles } from '../styles';

const EventCard = ({ event, onToggleFavorite, isFavorited }) => (
  <View style={styles.card}>
    <Image source={{ uri: event.event_profile_img }} style={styles.eventImage} />
    <View style={styles.cardContent}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{event.event_name}</Text>

      </View>
      <View style={styles.dateLocationContainer}>
        <Text style={styles.dateRange}>{event.readable_from_date}</Text>
        <Text style={styles.location}>{event.city}, {event.country}</Text>
      </View>
      <Text style={styles.price}>Free</Text>
      <View style={styles.tagActionContainer}>
        <View style={styles.tagContainer}>
          {event.keywords.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
        <Feather style={{ marginHorizontal: 10 }} name="share" size={20} color="#888" />
        <AntDesign
          name={isFavorited ? 'heart' : 'hearto'}
          size={20}
          color={isFavorited ? '#32CD32' : '#888'}
          onPress={onToggleFavorite}
        />

      </View>

    </View>
  </View>
);

const FavoritesScreen = () => {
  console.log('[]');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.events.favorites);
  const events = useSelector((state) => state.events.events);
  console.log('[favorites]',favorites);


  return (
    <View style={styles.container}>
      <Divider style={styles.divider} />
      {favorites.length > 0 ? (
        <FlatList
          data={events.filter(event => favorites.includes(event.event_date_id))}
          renderItem={({ item }) => (
            <EventCard
              event={item}
              onToggleFavorite={() => {
                dispatch(toggleFavorite(item.event_date_id));
              }}
              isFavorited={favorites.includes(item.event_date_id)}
            />
          )}
          keyExtractor={(item) => item.event_date_id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.noEventsContainer}>
          <Text style={styles.noEventsText}>No favorite events yet.</Text>
        </View>
      )}
    </View>
  );
};



export default FavoritesScreen;
