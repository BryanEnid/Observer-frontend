// // React Components
// import React, { useEffect, useState } from "react";

// // Components
// import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

// // Setup
// // import config from "./configs/env_mode";

// // Styling
// import styled from "styled-components/native";

// // Services
// import FakeDataService from "../../../services/FakeData";

// // Interfaces
// import { Profiles } from "./types";

// export default function App() {
//   // Profiles
//   const [profiles, setProfiles] = useState<Profiles[]>([]);

//   useEffect(() => {
//     (async () => {
//       const profiles = await FakeDataService.getRandomUsers(10);
//       setProfiles(profiles);
//     })();
//   }, []);

//   useEffect(() => console.log(profiles), [profiles]);

//   // JSX TEMPLATE (HTML)
//   return (
//     <Container>
//       {/* Profiles */}

//       <ProfileSelector>
//         <SafeAreaView>
//           {/* {profiles.map((profile) => (
//             <Text>{profile.name.first}</Text>
//           ))} */}
//         </SafeAreaView>
//       </ProfileSelector>
//     </Container>
//   );
// }

// const ProfileSelector = styled.View`
//   background-color: red;
//   height: 150px;
// `;

// // const Profile = styled.View``;

// const Container = styled.View`
//   /* flex: 1; */
//   /* justify-content: center;
//   align-items: center; */
// `;
