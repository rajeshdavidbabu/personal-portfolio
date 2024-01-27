import { Theme, useTheme } from "~/utils/theme-provider";
import ThemeToggleIcon from "./ThemeToggleIcon";

const themes = [Theme.LIGHT, Theme.DARK];

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  // Function to handle theme change

  function handleChange(
    selectedTheme: Theme | ((prevState: Theme | null) => Theme | null) | null
  ) {
    setTheme(selectedTheme);
  }

  const labelClass = "relative flex cursor-pointer items-center justify-center";

  return (
    <div className="theme-toggle ml-2.5 inline-flex h-full items-center gap-[0.6em] rounded-[99em] px-[0.67em] py-[0.33em] pt-2">
      {themes.map((t) => (
        <label
          key={t}
          className={`${labelClass} ${
            theme === t
              ? "border-b-2 border-text-primary text-text-primary opacity-100 dark:border-d-text-primary dark:text-d-text-primary"
              : ""
          }`}
          onClick={() => handleChange(t)}
        >
          <div className="group">
            <ThemeToggleIcon theme={t} checked={theme === t} />
            <input
              type="radio"
              name="theme-toggle"
              className="absolute inset-0 z-[-1] opacity-0"
              checked={theme === t}
              value={t}
              title={`Use ${t} theme`}
              aria-label={`Use ${t} theme`}
              onChange={() => handleChange(t)}
            />
            {/* Hover Effect */}
            {/* Black overlay for hover effect */}
            <div className="absolute inset-0 rounded-[99em] bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
          </div>
        </label>
      ))}
    </div>
  );
};

export default ThemeToggle;
