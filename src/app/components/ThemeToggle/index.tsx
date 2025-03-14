import { useTheme } from "../ThemeContext";
import { Moon, Sun } from "lucide-react"; 

export default function ToggleTheme() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-300 bg-gray-200 dark:bg-gray-700">
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-900" />}
    </button>
  );
}
