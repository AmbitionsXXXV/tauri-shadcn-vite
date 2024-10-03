import { useConfig } from "@/hooks/useConfig"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
	defaultTheme?: string
}

export function ThemeWrapper({
	defaultTheme,
	children,
	className,
}: ThemeWrapperProps) {
	const [config] = useConfig()
	console.log(config)

	useEffect(() => {}, [config])

	return (
		<div
			className={cn(
				`theme-${defaultTheme || config.theme}`,
				"w-full",
				className,
			)}
			style={
				{
					"--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	)
}
