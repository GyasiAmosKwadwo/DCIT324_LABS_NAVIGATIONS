import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function EventDetails() {
  const { id } = useLocalSearchParams();

  const events = {
    '1': { title: 'Campus Career Fair', date: '2024-08-15', description: 'Meet top employers and explore internship opportunities at the annual career fair.' },
    '2': { title: 'Student Government Elections', date: '2024-08-20', description: 'Cast your vote for the new student government representatives.' },
    '3': { title: 'Orientation Week', date: '2024-08-25', description: 'Welcome new students with a week of activities and campus tours.' },
    '4': { title: 'Tech Hackathon', date: '2024-09-01', description: '24-hour coding competition with amazing prizes and networking opportunities.' },
    '5': { title: 'Sports Day', date: '2024-09-10', description: 'Annual inter-departmental sports competition featuring football, basketball, and athletics.' },
  };

  const event = events[id as keyof typeof events];

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Event Not Found</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.description}>{event.description}</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
