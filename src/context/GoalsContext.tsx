
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
  toggleGoal: (id: string, status: boolean) => void;
  deleteGoal: (id: string) => void;
  getGoals: () => Promise<void>;
};

export const GoalsContext = createContext({} as GoalsContextType);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoal = async (title: string) => {
    try {
      const { data } = await api.post('/goals', {
            title,
            completed: false,
      });

      setGoals(prev => [...prev, data]); 

      }catch(error){
        console.error("Erro ao cadastrar meta:", error);
      }
  };

  const getGoals = async () => {
    try {
      const { data } = await api.get('/goals');

      setGoals(data);  
      
      }catch(error){
       console.error("Erro ao buscar metas:", error);
     }
  };

 const toggleGoal = async (id: string, status: boolean) => {
  try {
    const { data: updatedGoal } = await api.patch(`/goals/${id}`, {
      completed: !status,
    });

    setGoals(prev =>
      prev.map(goal =>
        goal.id === id ? { ...goal, ...updatedGoal } : goal
      )
    );
  } catch (error) {
    console.error("Erro ao atualizar a meta:", error);
  }
};

 const deleteGoal = async (id: string) => {
  try {
    await api.delete(`/goals/${id}`);

    setGoals(prev => prev.filter(goal => goal.id !== id));
  } catch (error) {
    console.error("Erro ao deletar meta:", error);
  }
};

  return (
    <GoalsContext.Provider value={{ goals, addGoal, toggleGoal, deleteGoal, getGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};
