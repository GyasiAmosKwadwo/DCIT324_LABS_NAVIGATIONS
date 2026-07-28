import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Timetable() {
  const schedule = [
    { day: 'Monday', time: '09:00 - 10:30', course: 'DCIT 201', venue: 'LT 1' },
    { day: 'Monday', time: '11:00 - 12:30', course: 'DCIT 203', venue: 'Lab 2' },
    { day: 'Tuesday', time: '14:00 - 15:30', course: 'DCIT 202', venue: 'LT 3' },
    { day: 'Wednesday', time: '09:00 - 10:30', course: 'DCIT 204', venue: 'Lab 1' },
    { day: 'Thursday', time: '11:00 - 12:30', course: 'DCIT 205', venue: 'LT 2' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timetable</Text>
      <ScrollView style={styles.scrollView}>
        {schedule.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.venue}>{item.venue}</Text>
          </View>
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
  day: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  course: {
    fontSize: 16,
    marginBottom: 3,
  },
  venue: {
    fontSize: 14,
    color: '#666',
  },
});
