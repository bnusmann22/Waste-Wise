import { useState } from "react";
import { RiNotification4Fill } from "react-icons/ri";
import styled from "styled-components";
import Heading from "./Heading";

const Section = styled.section`
	background-color: #0b1215;
	border-radius: 0.8em;
	padding: 1em;
	min-height: 10em;
	position: absolute;
	top: 6em;
	right: 0;
	color: #fff;

	@media (min-width: 992px) {
		top: 8em;
		min-width: 320px;
	}
`;
function Notification() {
	const [showNotifications, setShowNotifications] = useState(false);
	function handleToggleNotification() {
		setShowNotifications(!showNotifications);
	}
	return (
		<section>
			<button onClick={handleToggleNotification}>
				<RiNotification4Fill className="text-[#58FF2F]" />
			</button>

			{showNotifications && (
				<Section>
					<Heading>NOTIFICATION</Heading>
				</Section>
			)}
		</section>
	);
}

export default Notification;
