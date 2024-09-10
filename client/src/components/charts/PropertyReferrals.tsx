import { Box, Stack, Typography } from "@mui/material";

import { propertyReferralsInfo } from "../../constants";

interface ProgressBarProps {
	title: string;
	percentage: number;
	color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
	<Box width="100%">
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Typography fontSize={16} fontWeight={500} color="#F5F5F5">
				{title}
			</Typography>
			<Typography fontSize={16} fontWeight={500} color="#F5F5F5">
				{percentage}%
			</Typography>
		</Stack>

		<Box mt={2} width="100%" height="8px" borderRadius={1} bgcolor="#71797E">
			<Box
				width={`${percentage}%`}
				bgcolor={color}
				height="100%"
				borderRadius={1}
			/>
		</Box>
	</Box>
);

const PropertyReferrals = () => {
	return (
		<Box
			p={4}
			bgcolor="#272727"
			id="chart"
			display="flex"
			flexDirection="column"
			borderRadius="15px"
			flex={0.5}
		>
			<Typography fontSize={18} fontWeight={600} color="#F9F7F7">
				Property Referrals
			</Typography>

			<Stack my="20px" direction="column" gap={4}>
				{propertyReferralsInfo.map((bar) => (
					<ProgressBar key={bar.title} {...bar} />
				))}
			</Stack>
		</Box>
	);
};

export default PropertyReferrals;
