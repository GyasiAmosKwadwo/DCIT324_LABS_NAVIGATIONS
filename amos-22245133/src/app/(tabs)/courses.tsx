import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Courses() {
  const courses = [
    { code: 'DCIT 201', title: 'Programming I', credits: 3 },
    { code: 'DCIT 202', title: 'Data Structures', credits: 3 },
    { code: 'DCIT 203', title: 'Database Systems', credits: 3 },
    { code: 'DCIT 204', title: 'Web Development', credits: 3 },
    { code: 'DCIT 205', title: 'Computer Networks', credits: 3 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Courses</Text>
      <ScrollView style={styles.scrollView}>
        {courses.map((item) => (
          <View key={item.code} style={styles.item}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.credits}>{item.credits} Credit Hours</Text>
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
  code: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  credits: {
    fontSize: 14,
    color: '#666',
  },
});
