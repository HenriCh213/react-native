import { View, Text, StyleSheet, Image } from 'react-native'; 
import { Stack, Link } from 'expo-router'; 

export default function PartDetail() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "CPU" }} />
      
      <Text style={styles.title}>CPU_Cooler</Text>   
      <Text style={styles.description}>
        Um CPU cooler é um sistema de arrefecimento (refrigeração) essencial para computadores, projetado para dissipar o calor gerado pelo processador (CPU) e evitar o superaquecimento. Ele utiliza um dissipador de metal e uma ventoinha (fan) para mover ar frio, garantindo o bom desempenho, estabilidade e vida útil do PC. 

      </Text>

      <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTs96Wu4AXQs8W5iq7aRYWrbm2KKL-Ym3bVeEG72Zp3ea1JuO-hOdUeTZqRSO2hHHvjC3GFgtwXY-7rRdCCbQ_svpWewv-Cmbji14_7ljDnm-V7-j-NC-kq8y_GpAbJRl3ZdIHJV-u9rQ&usqp=CAc' }} style={styles.image} />

      <Link href="https://www.pichau.com.br/cooler-para-processador-deepcool-ag400-digital-argb-120mm-branco-r-ag400-whadmn-g-1?gad_source=1&gad_campaignid=20698567403&gbraid=0AAAAADvAK92PCEtkhhAU-i2xXvRVg3505&gclid=Cj0KCQiA4eHLBhCzARIsAJ2NZoJATOHsQrVTnVgv_s77LUUllnpKdmhxiUQQF_rtKlNrm20LB69X2n8aAi1OEALw_wcB" style={styles.link}>Cooler Para Processador Deepcool AG400 Digital ARGB, 120mm, Branco, R-AG400-WHADMN-G-1
</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 24 },
  image: { width: '100%', height: 400},
  link: { color: 'blue', marginTop: 20, textDecorationLine: 'underline'},
});