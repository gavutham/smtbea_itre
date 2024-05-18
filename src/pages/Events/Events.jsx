import Chencon from "../../components/Chencon/Chencon";
import Webinar from "../../components/Webinar/Webinar";
import "./Events.scss";
import events from "../../utils/events";

const Events = () => {
  const eventList = events;
  eventList.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="events">
      <Webinar />
      <Chencon />
    </div>
  );
};

export default Events;
