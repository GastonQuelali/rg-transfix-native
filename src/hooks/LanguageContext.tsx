import React, { FC, SetStateAction, Dispatch, useContext, useState, ReactNode } from 'react';

interface ILanguageContext {
  currentLanguage: string | null;
  setCurrentLanguage: Dispatch<SetStateAction<string | null>>;
}

const initialValue = {
  currentLanguage: null,
  setCurrentLanguage: () => {
    // eslint-disable-next-line no-console
    console.warn('Context is not yet Initialized');
  },
};

const LanguageContext = React.createContext<ILanguageContext>(initialValue);

interface ILanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<ILanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useCurrentLanguage = () => useContext(LanguageContext);

export const useCurrentLanguage1 = () => {
  const { currentLanguage } = useContext(LanguageContext);

  return {
    currentLanguage
  };
};
