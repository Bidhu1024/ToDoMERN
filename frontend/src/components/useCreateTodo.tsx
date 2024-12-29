import { useState } from "react";
import API from "../axios";

export interface Todo {
  title: string;
  description?: string;
  completed?: boolean;
}

interface UseCreateTodoReturn {
  createTodo: (todo: Todo) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useCreateTodo = (): UseCreateTodoReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createTodo = async (todo: Todo): Promise<void> => {
    setLoading(true);
    setError(null); // Reset error state before making a request

    try {
      await API.post("/todos", todo);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { createTodo, loading, error };
};
