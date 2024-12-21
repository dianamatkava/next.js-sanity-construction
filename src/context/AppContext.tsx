"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type AppContextType = {
  sharedState: any;
  setSharedState: React.Dispatch<React.SetStateAction<any>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
  initialData: any;
}

export function AppProvider({ children, initialData }: AppProviderProps) {
  const [sharedState, setSharedState] = useState(initialData);

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
