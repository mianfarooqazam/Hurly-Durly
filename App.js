// import AsyncStorage from "@react-native-async-storage/async-storage";
// //
// //Initializing the SDK
// Parse.setAsyncStorage(AsyncStorage);
// //Paste below the Back4App Application ID AND the JavaScript KEY
// Parse.initialize(
//   "GY5h3x36oin9EIf4LEroGhXCtOsFCOb6KbtMyBNp",
//   "iWUddxWJoYbE7MvujUs96oMbe5ORLYfKJUYlx8qB"
// );
// //Point to Back4App Parse API address
// Parse.serverURL = "https://parseapi.back4app.com/";
// import React, { useState } from "react";
// import {
//   Alert,Text,
//   View,
//   SafeAreaView,
//   Image,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import Parse from "parse/react-native";
// import {
//   List,
//   Title,
//   IconButton,
//   Text as PaperText,
//   Button as PaperButton,
//   TextInput as PaperTextInput,
// } from "react-native-paper";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// const TodoList = () => {
//   // State variables
//   const [readResults, setReadResults] = useState([]);
//   const [newTodoTitle, setNewTodoTitle] = useState("");

//   // Functions used by the screen components
//   const createTodo = async function () {
//     // This value comes from a state variable
//     const newTodoTitleValue = newTodoTitle;
//     // Creates a new Todo parse object instance
//     let Todo = new Parse.Object("Todo");
//     Todo.set("title", newTodoTitleValue);
//     Todo.set("done", false);
//     // After setting the todo values, save it on the server
//     try {
//       await Todo.save();
//       // Success
//       // Alert.alert("Success!", "Todo created!");
//       // Refresh todos list to show the new one (you will create this function later)
//       readTodos();
//       return true;
//     } catch (error) {
//       // Error can be caused by lack of Internet connection
//       Alert.alert("Error!", error.message);
//       return false;
//     }
//   };

//   const readTodos = async function () {
//     // Reading parse objects is done by using Parse.Query
//     const parseQuery = new Parse.Query("Todo");
//     try {
//       let todos = await parseQuery.find();
//       // Be aware that empty or invalid queries return as an empty array
//       // Set results to state variable
//       setReadResults(todos);
//       return true;
//     } catch (error) {
//       // Error can be caused by lack of Internet connection
//       Alert.alert("Error!", error.message);
//       return false;
//     }
//   };

//   const updateTodo = async function (todoId, done) {
//     // Create a new todo parse object instance and set todo id
//     let Todo = new Parse.Object("Todo");
//     Todo.set("objectId", todoId);
//     // Set new done value and save Parse Object changes
//     Todo.set("done", done);
//     try {
//       await Todo.save();
//       // Success
//       // Alert.alert("Success!", "Todo updated!");
//       // Refresh todos list
//       readTodos();
//       return true;
//     } catch (error) {
//       // Error can be caused by lack of Internet connection
//       Alert.alert("Error!", error.message);
//       return false;
//     }
//   };

//   const deleteTodo = async function (todoId) {
//     // Create a new todo parse object instance and set todo id
//     let Todo = new Parse.Object("Todo");
//     Todo.set("objectId", todoId);
//     // .destroy should be called to delete a parse object
//     try {
//       await Todo.destroy();
//       // Alert.alert("Success!", "Todo deleted!");
//       // Refresh todos list to remove this one
//       readTodos();
//       return true;
//     } catch (error) {
//       // Error can be caused by lack of Internet connection
//       Alert.alert("Be Patient sweetheart!!! Already deleted");
//       return false;
//     }
//   };

//   return (
//     <>
//       <StatusBar backgroundColor="#208AEC" />
//       <SafeAreaView style={Styles.container}>
//         <View style={Styles.wrapper}>
//           <View style={Styles.flex_between}>
//             <Title>Todo List</Title>
//             {/* Todo read (refresh) button */}
//             <IconButton
//               icon="refresh"
//               color={"#208AEC"}
//               size={24}
//               // onPress={() => readTodos()}
//               onPress= {()=>alert("hello")}
//             />
//           </View>
//           <View style={Styles.create_todo_container}>
//             {/* Todo create text input */}
//             <PaperTextInput
//               value={newTodoTitle}
//               onChangeText={(text) => setNewTodoTitle(text)}
//               label="New Todo"
//               mode="outlined"
//               style={Styles.create_todo_input}
//             />
//             {/* Todo create button */}
//             <PaperButton
//               onPress={() => createTodo()}
//               mode="contained"
//               icon="plus"
//               color={"#208AEC"}
//               style={Styles.create_todo_button}
//             >
//               {"Add"}
//             </PaperButton>
//           </View>
//           <ScrollView>
//             {/* Todo read results list */}
//             {readResults !== null &&
//               readResults !== undefined &&
//               readResults.map((todo) => (
//                 <List.Item
//                   key={todo.id}
//                   title={todo.get("title")}
//                   titleStyle={
//                     todo.get("done") === true
//                       ? Styles.todo_text_done
//                       : Styles.todo_text
//                   }
//                   style={Styles.todo_item}
//                   right={(props) => (
//                     <>
//                       {/* Todo update button */}
//                       {todo.get("done") !== true && (
//                         <TouchableOpacity
//                           onPress={() => updateTodo(todo.id, true)}
//                         >
//                           <List.Icon
//                             {...props}
//                             icon="check"
//                             color={"#4CAF50"}
//                           />
//                         </TouchableOpacity>
//                       )}
//                       {/* Todo delete button */}
//                       <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
//                         <List.Icon {...props} icon="close" color={"#ef5350"} />
//                       </TouchableOpacity>
//                     </>
//                   )}
//                 />
//               ))}
//               <TouchableOpacity onPress={()=>navigation.navigate("Index")}>
//               <Text>press</Text>
//               </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// // These define the screen component styles
// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFF",
//   },
//   wrapper: {
//     width: "90%",
//     alignSelf: "center",
//   },
//   header: {
//     alignItems: "center",
//     paddingTop: 10,
//     paddingBottom: 20,
//     backgroundColor: "#208AEC",
//   },
//   header_logo: {
//     width: 170,
//     height: 40,
//     marginBottom: 10,
//     resizeMode: "contain",
//   },
//   header_text_bold: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   header_text: {
//     marginTop: 3,
//     color: "#fff",
//     fontSize: 14,
//   },
//   flex_between: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   create_todo_container: {
//     flexDirection: "row",
//   },
//   create_todo_input: {
//     flex: 1,
//     height: 38,
//     marginBottom: 16,
//     backgroundColor: "#FFF",
//     fontSize: 14,
//   },
//   create_todo_button: {
//     marginTop: 6,
//     marginLeft: 15,
//     height: 40,
//   },
//   todo_item: {
//     borderBottomWidth: 1,
//     borderBottomColor: "rgba(0, 0, 0, 0.12)",
//   },
//   todo_text: {
//     fontSize: 15,
//   },
//   todo_text_done: {
//     color: "rgba(0, 0, 0, 0.3)",
//     fontSize: 15,
//     textDecorationLine: "line-through",
//   },
// });
// export default TodoList;

// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import LottieView from "lottie-react-native";

// import Index from './src/Index';

// const App = ({navigation}) => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Index></Index>
//     </View>
//     //<Index></Index>
//     // <View
//     //   style={{
//     //     flex: 1,
//     //     justifyContent: "center",
//     //     alignItems: "center",
//     //     backgroundColor: "white",
//     //   }}
//     // >
//     //   {/* <Text>Appssdfsd</Text> */}
//     //   <LottieView
//     //     source={require(".//assets/valiusplash.json")}
//     //     autoPlay
//     //     loop={false}
//     //     speed={0.5}
//     //     // onAnimationFinish={() => { navigation.navigate("Splash")}}

//     //   ></LottieView>
//     // </View>
//   );
// }

import { View,Text} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Index from "./src/TodoList";
import TodoList from "./src/TodoList";
import Splash from "./src/Splash";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import { View, Text } from 'react-native'
// import React from 'react'
// import LottieView from "lottie-react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Index from "./src/Index";
// import Splash from "./src/Splash";

// const App = () => {
//   return (
//     <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
//       <LottieView source={require("./assets/valiusplash.json")} autoPlay loop={true} speed={0.5}
//       onAnimationFinish={()=>{console.log("Animation Finished")}}
//       >
//       </LottieView>
//     </View>
//   )
// }

// export default App