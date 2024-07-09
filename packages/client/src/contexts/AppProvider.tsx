import * as React from "react";

type AppState = {
  isAuthenticated: boolean;
};

type AppContextProps = {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
};

type AppProviderProps = {
  children: React.ReactNode;
};

const AppContext = React.createContext<AppContextProps | undefined>(undefined);

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = React.useState<AppState>({
    isAuthenticated: true,
  });
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextProps => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
