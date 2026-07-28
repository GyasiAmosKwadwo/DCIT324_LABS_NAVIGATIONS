import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Help() {
  const faqs = [
    {
      id: 1,
      question: 'How do I register for courses?',
      answer: 'Go to the student portal, navigate to Registration, and select your courses for the semester.',
    },
    {
      id: 2,
      question: 'Where can I find my exam schedule?',
      answer: 'Your exam schedule is available on the student portal under the Examinations tab.',
    },
    {
      id: 3,
      question: 'How do I contact student support?',
      answer: 'You can reach student support via email at support@ug.edu.gh or visit the student affairs office.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <ScrollView style={styles.scrollView}>
        {faqs.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.answer}>{item.answer}</Text>
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
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});
