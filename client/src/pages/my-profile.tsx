import { useGetIdentity, useOne } from "@refinedev/core";
import { useEffect } from "react";

import { Profile } from "../components";

const MyProfile = () => {
	useEffect(() => {
		document.title = "My Profile";
	}, []);

	const { data: user } = useGetIdentity();
	const { data, isLoading, isError } = useOne({
		resource: "users",
		id: user?.userid,
	});

	const myProfile = data?.data ?? [];

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;

	return (
		<Profile
			type="My"
			name={myProfile.name}
			email={myProfile.email}
			avatar={myProfile.avatar}
			properties={myProfile.allProperties}
		/>
	);
};

export default MyProfile;
