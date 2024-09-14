import { useList } from "@refinedev/core";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

import { AgentCard } from "../components";

const Agents = () => {
	useEffect(() => {
		document.title = "Agents";
	}, []);

	const { data, isLoading, isError } = useList({
		resource: "users",
	});

	const allAgents = data?.data ?? [];

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<Box>
			<Typography fontSize={25} fontWeight={700} color="#F9F7F7">
				Agents List
			</Typography>

			<Box
				mt="20px"
				sx={{
					display: "flex",
					flexWrap: "wrap",
					backgroundColor: "#272727",
				}}
			>
				{allAgents.map((agent) => (
					<AgentCard
						key={agent._id}
						id={agent._id}
						name={agent.name}
						email={agent.email}
						avatar={agent.avatar}
						noOfProperties={agent.allProperties.length}
					/>
				))}
			</Box>
		</Box>
	);
};

export default Agents;
