import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Feed', headerShown: false }}
      />
      <Stack.Screen
        name="[id]"
        options={{ title: 'Event Details' }}
      />
    </Stack>
  );
}
