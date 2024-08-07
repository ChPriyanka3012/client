import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(prev => !prev);
  };

  return (
    <NotificationContext.Provider value={{ showContent, toggleContent }}>
      {children}
    </NotificationContext.Provider>
  );
};
