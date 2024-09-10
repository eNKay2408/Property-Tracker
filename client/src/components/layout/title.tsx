import React from "react";
import {
	useRouterContext,
	useLink,
	useRouterType,
	useRefineOptions,
} from "@refinedev/core";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";

export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
	collapsed,
	wrapperStyles,
	icon: iconFromProps,
	text: textFromProps,
}) => {
	const { title: { icon: defaultIcon, text: defaultText } = {} } =
		useRefineOptions();
	const icon =
		typeof iconFromProps === "undefined" ? defaultIcon : iconFromProps;
	const text =
		typeof textFromProps === "undefined" ? defaultText : textFromProps;
	const routerType = useRouterType();
	const Link = useLink();
	const { Link: LegacyLink } = useRouterContext();

	const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

	return (
		<MuiLink
			to="/"
			component={ActiveLink}
			underline="none"
			sx={{
				display: "flex",
				alignItems: "center",
				gap: "12px",
				...wrapperStyles,
			}}
		>
			{/* <SvgIcon height="24px" width="24px" color="primary">
				{icon}
			</SvgIcon> */}

			<img src={icon?.toString() ?? ""} alt="logo" width="30px" height="30px" />

			{!collapsed && (
				<Typography
					fontWeight={700}
					color="text.primary"
					fontSize="24px"
					textOverflow="ellipsis"
					overflow="hidden"
				>
					{text}
				</Typography>
			)}
		</MuiLink>
	);
};
