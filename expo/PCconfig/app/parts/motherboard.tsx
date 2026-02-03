import { View, Text, StyleSheet, Image } from 'react-native'; 
import { Stack, Link } from 'expo-router'; 

export default function PartDetail() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Motherboard" }} />
      
      <Text style={styles.title}>Motherboard</Text>   
      <Text style={styles.description}>
        A placa-mãe (motherboard) serve como a base central de um computador, conectando e permitindo a comunicação entre todos os componentes de hardware, como processador (CPU), memória RAM, placa de vídeo e armazenamento. Ela distribui energia, gerencia o fluxo de dados e fornece portas (USB, áudio, vídeo) para periféricos. 

      </Text>

      <Image source={{ uri: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/939374/xlarge/Placa-M-e-Msi-Pro-B850m-p-Wifi-Amd-Am5-Matx-Wf-blt-Ddr5-Pro-B850m-p-Wifi_1763147317.png' }} style={styles.image} />

      <Link href="https://www.guerradigital.com.br/produtos/msi-pro-b850m-p-wifi-ddr5-am5-chipset-b850-m-atx-911-7e71-001/?variant=1328371837&pf=mc&srsltid=AfmBOoo5LKh463ec55qIpNIsTpMGOpUC3HEj0TmrG17xLyF9nuseg9uXRkw" style={styles.link}>MSI PRO B850M-P WIFI, DDR5, AM5, Chipset B850 M-ATX (911-7E71-001)</Link>

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