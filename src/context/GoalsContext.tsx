
import React, { createContext, ReactNode, useState } from 'react';
import api from '../services/api';

export type Goal = {
  id: string;
  title: string;
  completed: boolean;
};

type GoalsContextType = {
  goals: Goal[];
  addGoal: (title: string) => void;
  toggleGoal: (id: string) => void;
  deleteGoal: (id: string) => void;
  getGoals: () => Promise<void>;
};

export const GoalsContext = createContext({} as GoalsContextType);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = async (title: string) => {
    const { data } = await api.post('/goals', {
      title,
      completed: false,
    });

    console.log("data", data)

    setGoals(prev => [...prev, data]); 
  };

  const getGoals = async () => {
    const { data } = await api.get('/goals');

    setGoals(data); 
  }

  const toggleGoal = (id: string) => {
    setGoals(prev =>
      prev.map(goal =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

 const deleteGoal = async (id: string) => {
  await api.delete(`/goals/${id}`);

  setGoals(prev => prev.filter(goal => goal.id !== id));
 };

  return (
    <GoalsContext.Provider value={{ goals, addGoal, toggleGoal, deleteGoal, getGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};
