import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type GoalProps = {
  goal: {
    id: string;
    title: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
};

export function GoalItem({ goal, onToggle, onDelete }: GoalProps) {
 
  const handleDeletePress = () => {
  if (window.confirm(`Tem certeza que deseja excluir "${goal.title}"?`)) {
    onDelete();
  }
};

return (
  <View style={styles.container}>
    <TouchableOpacity onPress={onToggle} style={styles.goalContent}>
      <Ionicons
        name={goal.completed ? 'checkmark-circle' : 'ellipse-outline'}
        size={20}
        color={goal.completed ? '#4caf50' : '#ccc'}
        style={{ marginRight: 8, marginTop: 4}}
      />
      <Text style={[styles.text, goal.completed && styles.completed]}>
        {goal.title}
      </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleDeletePress} style={styles.deleteButton}>
      <Ionicons name="trash" size={24} color="#ce2d3a" />
    </TouchableOpacity>
  </View>
);
}

