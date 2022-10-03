import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
//   return(    
//     <View style={styles.container}>
//       <Text><h1>Olá Mundo!!!</h1></Text>
//       <Text><h1>Estudando programação</h1></Text>
//       <StatusBar style="auto" />
//     </View>//     
//   );
// }

// forma que o professor gosta de escrever o código
// export default class App extends React.Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text><h1>Estudando programação</h1></Text>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
// }

// alterando o código padrao, para o do projeto
export default class App extends React.Component {
  render() {
    return (
      <containerPrincipal>
        <View >
          <seccaoRead>
            <h1>Estudando programação</h1>
            <p>Devosc,
              Confira o <a href="https://www.google.com.br/">Google</a>.</p>
          </seccaoRead>
        </View>
        estou arrasando kkkkkkkkkkkkkkkkk
        <View >
          <seccaoBody>
            <Text><h2>What is Lorem Ipsum?</h2></Text>
            <Text><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Text>
          </seccaoBody>
          <seccaoBody>
            <Text><h2>Entrem em contato:</h2></Text>
            <Text>
              <ul>
                <li><a href="https://www.facebook.com/osvaldo.junior.555" target="_blank">Face:</a></li>
                <li><a href="https://www.youtube.com/channel/UCjcWD_zbspc8qWFn00Si4PA" target="_blank">Youtube:</a></li>
                <li><a href="https://github.com/devOsvaldo2020" target="_blank">Github:</a></li>
                <li><a href="https://www.linkedin.com/in/juniorosc/" target="_blank">Linkedin:</a></li>
                <li><a href="https://discord.com/channels/980850227013627954/991064481008324608" target="_blank">Discord-servidor-Devosc:</a></li>
              </ul>
            </Text>
          </seccaoBody>
        </View>

      </containerPrincipal>
    );
  }
}



// estilo abaixo código original
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

