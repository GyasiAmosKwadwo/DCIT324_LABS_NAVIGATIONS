import { Drawer } from 'expo-router';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Dashboard', drawerLabel: 'Dashboard' }}
      />
      <Drawer.Screen
        name="announcements"
        options={{ title: 'Announcements', drawerLabel: 'Announcements' }}
      />
      <Drawer.Screen
        name="about"
        options={{ title: 'About', drawerLabel: 'About' }}
      />
      <Drawer.Screen
        name="help"
        options={{ title: 'Help & Support', drawerLabel: 'Help & Support' }}
      />
    </Drawer>
  );
}
