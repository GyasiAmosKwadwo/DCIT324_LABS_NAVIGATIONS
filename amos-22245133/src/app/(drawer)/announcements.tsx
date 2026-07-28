import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Announcements() {
  const announcements = [
    { id: 1, title: 'Exam Schedule Released', date: '2024-07-15', content: 'Final exams will begin on August 1st. Check your portal for details.' },
    { id: 2, title: 'Library Hours Extended', date: '2024-07-14', content: 'Main library will now be open until 10 PM on weekdays.' },
    { id: 3, title: 'Registration Deadline', date: '2024-07-13', content: 'Last day to register for fall semester courses is July 20th.' },
    { id: 4, title: 'Campus Maintenance', date: '2024-07-12', content: 'Building A will undergo maintenance this weekend.' },
    { id: 5, title: 'Student Union Elections', date: '2024-07-11', content: 'Nominations for student union positions are now open.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      <ScrollView style={styles.scrollView}>
        {announcements.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
            <Text style={styles.itemContent}>{item.content}</Text>
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
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemContent: {
    fontSize: 14,
    lineHeight: 20,
  },
});
