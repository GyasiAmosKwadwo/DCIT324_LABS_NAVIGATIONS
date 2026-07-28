import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabsLayout from './(drawer)/(tabs)/_layout';
import Announcements from './(drawer)/announcements';
import About from './(drawer)/about';
import Help from './(drawer)/help';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="Dashboard"
          component={TabsLayout}
          options={{ drawerLabel: 'Dashboard' }}
        />
        <Drawer.Screen
          name="Announcements"
          component={Announcements}
          options={{ drawerLabel: 'Announcements' }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{ drawerLabel: 'About' }}
        />
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{ drawerLabel: 'Help & Support' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
