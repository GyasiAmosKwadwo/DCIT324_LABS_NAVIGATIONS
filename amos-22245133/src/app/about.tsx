import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.description}>Campus Connect is your ultimate companion for navigating university life at UG.</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Developer:</Text>
        <Text style={styles.infoValue}>Amos Kwadwo</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Student ID:</Text>
        <Text style={styles.infoValue}>22245133</Text>
      </View>
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
  description: {
    fontSize: 16,
    marginBottom: 30,
    lineHeight: 24,
  },
  infoContainer: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
  },
});
