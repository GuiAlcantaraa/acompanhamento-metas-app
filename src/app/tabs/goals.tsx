import { GoalItem } from "@/src/components/goalItem";
import { ProgressBar } from "@/src/components/progressBar";
import { GoalsContext } from "@/src/context/GoalsContext";
import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";

export default function Goals () {
  const { goals, addGoal, toggleGoal, getGoals, deleteGoal } = useContext(GoalsContext);
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = () => {
    if (newGoal.trim()) {

      addGoal(newGoal);
      setNewGoal('');
    }
  };

  const handleDeleteGoal = (id: string) => {
    deleteGoal(id)
  };

  useEffect(() => {
    getGoals();
  }, []);

  const completed = goals.filter(g => g.completed).length;
  const progress = goals.length ? (completed / goals.length) * 100 : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎯 Suas Metas</Text>

      <TextInput
        placeholder="Digite uma nova meta"
        value={newGoal}
        onChangeText={setNewGoal}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddGoal}>
        <Text style={styles.addButtonText}>+ Adicionar</Text>
      </TouchableOpacity>

      <ProgressBar progress={progress} />

      <FlatList
        data={goals}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.listEmpty}>Nenhuma meta adicionada.</Text>
        }
        ListHeaderComponent={
          <Text style={styles.listHeader}>Metas ({goals.length})</Text>
        }
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <GoalItem 
            goal={item} 
            onToggle={() => toggleGoal(item.id, item.completed)} 
            onDelete={() => handleDeleteGoal(item.id)} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f7fa' },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cde0eb',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#5bd1d7',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  listEmpty: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#aaa',
  },
  listHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
});