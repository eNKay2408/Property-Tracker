import { EmailOutlined, LocationCity, Phone, Place } from "@mui/icons-material";
import { useGetIdentity } from "@refinedev/core";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { AgentCardProp, InfoBarProps } from "../../interfaces/agent";

const InfoBar = ({ icon, name }: InfoBarProps) => (
	<Stack
		flex={1}
		minWidth={{ xs: "100%", sm: "fit-content" }}
		gap={1.5}
		direction="row"
	>
		{icon}
		<Typography fontSize={14} color="#A9A9A9">
			{name}
		</Typography>
	</Stack>
);

const AgentCard = ({
	id,
	name,
	email,
	avatar,
	noOfProperties,
}: AgentCardProp) => {
	const { data: currentUser } = useGetIdentity();

	const generateLink = () => {
		if (currentUser.email === email) return "/my-profile";

		return `/agents/show/${id}`;
	};

	return (
		<Box
			component={Link}
			to={generateLink()}
			width="100%"
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				gap: "20px",
				padding: "30px",
				"&:hover": {
					boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
				},
				borderTop: "3px solid #808080",
			}}
		>
			<img
				src={avatar}
				alt="user"
				width={90}
				height={90}
				style={{ borderRadius: 8, objectFit: "cover" }}
			/>
			<Stack
				direction="column"
				justifyContent="space-between"
				flex={1}
				gap={{ xs: 4, sm: 2 }}
			>
				<Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
					<Typography fontSize={22} fontWeight={600} color="#F9F7F7">
						{name}
					</Typography>
					<Typography fontSize={14} color="#C0C0C0">
						Real-Estate Agent
					</Typography>
				</Stack>

				<Stack
					direction="row"
					flexWrap="wrap"
					justifyContent="space-between"
					alignItems="center"
					gap={2}
				>
					<InfoBar
						icon={<EmailOutlined sx={{ color: "#3FC1C9" }} />}
						name={email}
					/>
					<InfoBar
						icon={<Place sx={{ color: "#3FC1C9" }} />}
						name="Ho Chi Minh"
					/>
					<InfoBar
						icon={<Phone sx={{ color: "#3FC1C9" }} />}
						name="+84 987654321"
					/>
					<InfoBar
						icon={<LocationCity sx={{ color: "#3FC1C9" }} />}
						name={`${noOfProperties} Properties`}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default AgentCard;
