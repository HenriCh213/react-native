import { View, Text, StyleSheet, Image } from 'react-native'; 
import { Stack, Link } from 'expo-router'; 

export default function PartDetail() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "RAM" }} />
      
      <Text style={styles.title}>RAM</Text>   
      <Text style={styles.description}>
        A memória RAM (Random Access Memory ou Memória de Acesso Aleatório) é um tipo de armazenamento temporário de alta velocidade usado por computadores, smartphones e outros dispositivos para manter dados de aplicativos e do sistema operacional em uso. Ela permite acesso rápido e aleatório a qualquer informação, sendo volátil, o que significa que perde todos os dados quando o aparelho é desligado. 

      </Text>

      <Image source={{ uri: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6FvLA6E6sSGm2h8hrIaAxfdzCBEhFsg42YMY7f9FVlLv2OCUFRzYgn8riCdd3vXFAQtfTSxmhW9vBJ42d_Fsia1npCUYTVZjf2MA5BHdsEhYRkkKsUi_k' }} style={styles.image} />

      <Link href="https://www.microgem.com.br/produto/memoria-kingston-fury-beast-16gb-ddr5-5600mhz-cl36-kf556c36bbe-16-74237?srsltid=AfmBOoofvEsZdit3l_41PZ1SrJUnAFlsckf0ormfa8isSKXpMdyOZVob" style={styles.link}>Memória Kingston Fury Beast 16gb Ddr5 5600mhz Cl36 Kf556c36bbe/16</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 24 },
  image: { width: '100%', height: 200},
  link: { color: 'blue', marginTop: 20, textDecorationLine: 'underline'},
});