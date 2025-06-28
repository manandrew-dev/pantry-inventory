import { FlatList, Text, View } from 'react-native';

const DATA = [
    { id: '1', name: 'Milk', expiryDate: '2025-07-15' },
    { id: '2', name: 'Eggs', expiryDate: '2025-07-16' },
];

const Home = () => {
  return (
    <View>
        <FlatList
          data={DATA}
            renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          />
    </View>
  );
};

export default Home;