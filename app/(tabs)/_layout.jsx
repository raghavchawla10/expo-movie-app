import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs 
      screenOptions={{
        
        tabBarStyle: {
          backgroundColor: "pink", // ✅ transparent
          position: "absolute",           // float above content
          bottom: 50,                      // stick to bottom
          padding:0 ,
          margin:30,
          borderRadius:50,
          borderTopWidth: 0,              // ✅ remove top border line
          // elevation: 0,                   // ✅ remove shadow on Android
          // height:
        },
        tabBarLabelStyle: {
          fontSize: 18,
          // color: "black"
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "white",
        tabBarIcon: () => null,           // no icons
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="searchPage"
        options={{ headerShown: false, title: "Search" }}
      />
      <Tabs.Screen
        name="movieDetail"
        options={{ headerShown: false  , display:"none"}}
        tabBa

      />
    </Tabs>
  );
}
