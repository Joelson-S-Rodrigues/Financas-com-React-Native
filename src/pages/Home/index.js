import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


import Header from '../../components/Header' 
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


const list = [
    {
    id: 1,
    label: 'Boleto Enel ',
    value: '700,00',
    date: '04/06/2022',
    type: 0 // despesas
},

{
    id: 2,
    label: 'Pix recebido de Larissa Imperio ',
    value: '400,00',
    date: '06/07/2022',
    type: 1 //receita / entrada 
},

{
    id: 3,
    label: 'Salário',
    value: '3.000,00',
    date: '11/07/2022',
    type: 1 //receita / entrada 
},
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header  name="Joelson Rodrigues" />
    
    <Balance saldo="7.196,17" gastos="-1.274,37" />
      <Actions />
      <Text style={styles.title}>últimas movimentações </Text>
      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={ (item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem= {({item}) => <Moviments data={item}/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgba(25, 122, 144, 0.3)',
  
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,

  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
