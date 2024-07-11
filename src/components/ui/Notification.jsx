import { RiNotification4Fill } from "react-icons/ri";
import styled from "styled-components";
const StyledNotification = styled.section`
/* margin-left: auto; */
`
function Notification() {
	return (
		<StyledNotification>
			<button>
				<RiNotification4Fill className="text-white"/>
      </button>
      <section>

      </section>
		</StyledNotification>
	);
}

export default Notification;
