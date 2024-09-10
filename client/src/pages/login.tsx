import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CredentialResponse } from "../interfaces/google";

import { ThemedTitleV2 } from "../components/layout/title";
import { logo } from "../assets";

const Login: React.FC = () => {
	useEffect(() => {
		document.title = "Login";
	}, []);

	const GOOGLE_CLIENT_ID =
		"1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com";

	const { mutate: login } = useLogin<CredentialResponse>();

	const GoogleButton = (): JSX.Element => {
		const divRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			if (typeof window === "undefined" || !window.google || !divRef.current) {
				return;
			}

			try {
				window.google.accounts.id.initialize({
					ux_mode: "popup",
					client_id:
						import.meta.env.VITE_APP_GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID,
					callback: async (res: CredentialResponse) => {
						if (res.credential) {
							login(res);
						}
					},
				});
				window.google.accounts.id.renderButton(divRef.current, {
					size: "medium",
					type: "standard",
				});
			} catch (error) {
				console.log(error);
			}
		}, []);

		return <div ref={divRef} />;
	};

	return (
		<Container
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				display="flex"
				gap="36px"
				justifyContent="center"
				flexDirection="column"
			>
				<ThemedTitleV2
					collapsed={false}
					wrapperStyles={{
						justifyContent: "center",
					}}
					text="eNKay"
					icon={logo}
				/>

				<GoogleButton />

				<Typography align="center" color={"text.primary"} fontSize="12px">
					Powered by
					<img
						style={{ margin: "-5px 5px" }}
						alt="Google"
						src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Google_Authenticator_for_Android_icon.svg"
						width="20px"
						height="20px"
					/>
					Google
				</Typography>
			</Box>
		</Container>
	);
};

export default Login;
