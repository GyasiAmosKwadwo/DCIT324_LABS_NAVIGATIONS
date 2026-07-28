import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

export default function Profile() {
  const params = useLocalSearchParams();
  const [name, setName] = useState(params.name?.toString() || 'Amos Kwadwo');
  const [bio, setBio] = useState(params.bio?.toString() || 'Computer Science Student');
  const [programme, setProgramme] = useState(params.programme?.toString() || 'BSc Computer Science');

  useEffect(() => {
    if (params.name) setName(params.name.toString());
    if (params.bio) setBio(params.bio.toString());
    if (params.programme) setProgramme(params.programme.toString());
  }, [params]);

  const handleEditProfile = () => {
    router.push({
      pathname: '/edit-profile',
      params: { name, bio, programme }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Index Number</Text>
        <Text style={styles.value}>22245133</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Programme</Text>
        <Text style={styles.value}>{programme}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Level</Text>
        <Text style={styles.value}>200</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Bio</Text>
        <Text style={styles.value}>{bio}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.buttonText}>Edit Profile</Text>
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
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#666',
  },
  value: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
