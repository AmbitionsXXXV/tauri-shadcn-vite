import { ThemesProvider } from "@/components/providers"
import { ThemeWrapper } from "@/components/theme-wrapper"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./global.css"
import "./themes.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ThemesProvider
		attribute="class"
		defaultTheme="system"
		enableSystem
		disableTransitionOnChange
	>
		<ThemeWrapper>
			<App />
		</ThemeWrapper>
	</ThemesProvider>,
)
