import { TooltipProvider } from "@/components/ui/tooltip"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemesProvider({ children, ...props }: ThemeProviderProps) {
	return (
		<JotaiProvider>
			<NextThemesProvider {...props}>
				<TooltipProvider delayDuration={0}>{children}</TooltipProvider>
			</NextThemesProvider>
		</JotaiProvider>
	)
}
