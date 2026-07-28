import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="home"
        options={{ title: 'Home', tabBarLabel: 'Home' }}
      />
      <Tabs.Screen
        name="courses"
        options={{ title: 'Courses', tabBarLabel: 'Courses' }}
      />
      <Tabs.Screen
        name="timetable"
        options={{ title: 'Timetable', tabBarLabel: 'Timetable' }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: 'Profile', tabBarLabel: 'Profile' }}
      />
    </Tabs>
  );
}
