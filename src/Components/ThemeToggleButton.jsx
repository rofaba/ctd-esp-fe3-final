// ThemeToggleButton.js
import React from 'react';
import { useContextGlobal } from './utils/ContextGlobal';

const ThemeToggleButton = () => {
  const { dispatch } = useContextGlobal();

  return (
    <button className="btn-theme" onClick={() => dispatch({ type: "change_theme" })}>
      Change theme
    </button>
  );
};

export default ThemeToggleButton;
