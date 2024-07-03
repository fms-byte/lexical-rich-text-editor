"use client";
import * as React from 'react';
import { createContext, useContext, useState } from 'react';

interface HtmlContextProps {
  htmlString: string;
  setHtmlString: (html: string) => void;
}

const HtmlContext = createContext<HtmlContextProps | undefined>(undefined);

export const useHtmlContext = () => {
  const context = useContext(HtmlContext);
  if (!context) {
    throw new Error('useHtmlContext must be used within a HtmlProvider');
  }
  return context;
};

export const HtmlProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [htmlString, setHtmlString] = useState<string>('');

  return React.createElement(
    HtmlContext.Provider,
    { value: { htmlString, setHtmlString } },
    children
  );
};