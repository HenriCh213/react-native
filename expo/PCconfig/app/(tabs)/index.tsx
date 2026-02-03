import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const pcParts = [
  { name: 'CPU', route: '/parts/cpu' },
  { name: 'GPU', route: '/parts/gpu' },
  { name: 'RAM', route: '/parts/ram' },
  { name: 'Motherboard', route: '/parts/motherboard' },
  { name: 'SSD', route: '/parts/ssd' },
  { name: 'Fonte', route: '/parts/fonte' },
  { name: 'Gabinete', route: '/parts/gabinete' },
  { name: 'CPU_Cooler', route: '/parts/cpu_cooler' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>PCconfig</Text>
      <View style={styles.grid}>
        {pcParts.map((part) => (
          <Link key={part.name} href={part.route} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.cardText}>{part.name}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  header: { fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  card: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: { color: 'white', fontWeight: 'bold', fontSize: 18},
});