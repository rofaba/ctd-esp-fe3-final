import { useContextGlobal } from './utils/ContextGlobal';

const ThemeToggleButton = () => {
  const { theme, dispatch } = useContextGlobal(); 

  return (
    <button className="btn-theme" onClick={() => dispatch({ type: "change_theme" })}>
      {theme.theme === 'light' ? '🌙' : '☀️'} 
    </button>
  );
};

export default ThemeToggleButton;
