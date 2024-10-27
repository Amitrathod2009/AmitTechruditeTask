import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  listContainer: {
    paddingHorizontal: 15,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  eventImage: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateLocationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  dateRange: {
    color: '#32CD32',
    fontSize: 14,
    flex: 1,
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginLeft: 10,
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  tagActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 5,
    marginTop: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
  },
  noEventsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEventsText: {
    fontSize: 18,
    color: '#888',
  },
  favoritesLink: {
    color: '#32CD32',
    textAlign: 'center',
    margin: 20,
    fontSize: 16,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#FFF',
  },
  input: {
    marginBottom: 15,
  },
  forgotText: {
    textAlign: 'right',
    color: '#808080',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#21D393',
    marginBottom: 20,
  },
  signUpText: {

    marginBottom: 10,
  },
  signUpLink: {
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#808080',
  },
  orText: {
    color: '#808080',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  socialIcon: {
    marginHorizontal: 10,
    backgroundColor: '#FFF',
  },
  socialIconImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  guestContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  guestText: {
    color: '#808080',
  },
  ProfileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  username: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  searchText:{
    textAlign:'center',
  },

});
