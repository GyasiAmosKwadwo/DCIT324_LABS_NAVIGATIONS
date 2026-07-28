import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Feed() {
  const events = [
    { id: 1, title: 'Campus Career Fair', date: '2024-08-15', description: 'Meet top employers and explore internship opportunities at the annual career fair.' },
    { id: 2, title: 'Student Government Elections', date: '2024-08-20', description: 'Cast your vote for the new student government representatives.' },
    { id: 3, title: 'Orientation Week', date: '2024-08-25', description: 'Welcome new students with a week of activities and campus tours.' },
    { id: 4, title: 'Tech Hackathon', date: '2024-09-01', description: '24-hour coding competition with amazing prizes and networking opportunities.' },
    { id: 5, title: 'Sports Day', date: '2024-09-10', description: 'Annual inter-departmental sports competition featuring football, basketball, and athletics.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Feed</Text>
      <ScrollView style={styles.scrollView}>
        {events.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() => router.push(`/(drawer)/(tabs)/home/${item.id}`)}
          >
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemDate: {
    fontSize: 14,
    color: '#666',
  },
});
