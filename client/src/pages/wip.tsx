import { useEffect } from "react";

const Wip = ({ title }: { title: string }) => {
	useEffect(() => {
		document.title = `${title}`;
	}, [title]);

	return (
		<>
			<h1>Work in Progress...</h1>
			<p>This feature is under construction. Please check back later.</p>
		</>
	);
};

export default Wip;
