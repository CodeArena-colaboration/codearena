import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import EventAction from "./EventAction";
import { RocketIcon } from "@radix-ui/react-icons";

interface Event {
  name: string;
  id: string;
  event_id: string;
  start_date: string;
  start_time: {
    hours: string;
    minutes: string;
  };
  topics: string[]; // Assuming 'topics' is an array of strings
  difficulty: number; // Assuming 'difficulty' is an integer
}

interface EventListProps {
  events: Event[];
  refreshList: Function;
}

function EventList({ events, refreshList }: EventListProps) {
  // Function to get the difficulty label
  const getDifficultyLabel = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return "Easy";
      case 2:
        return "Medium";
      case 3:
        return "Hard";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      {events?.length > 0 ? (
        <section className="flex flex-col gap-4 max-w-[780px] m-auto">
          {events.map((event) => (
            <Card
              key={event.id}
              className="w-full flex justify-between p-4 shadow-none"
            >
              <div>
                <h3 className="text-xl">{event.name}</h3>
                <div className="text-sm">
                  <span className="font-medium">Topics: </span>
                  {event.topics?.length > 0 ? (
                    event.topics.map((topic, index) => (
                      <span key={index} className="ml-1">
                        {topic}
                        {index < event.topics.length - 1 && ","}
                      </span>
                    ))
                  ) : (
                    <span>No topics available</span>
                  )}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Difficulty: </span>
                  {getDifficultyLabel(event.difficulty)}
                </div>
                <Label className="text-sm font-bold text-green-900">
                  Contest on {event.start_date} at {event.start_time.hours}:
                  {event.start_time.minutes}
                </Label>
              </div>
              <div className="flex flex-row">
                <EventAction event={event} refreshList={refreshList} />
              </div>
            </Card>
          ))}
        </section>
      ) : (
        <div className="max-w-[780px] m-auto text-center">
          <div className="min-h-[320px] w-full text-center flex justify-center items-center">
            <div className="flex flex-col items-center">
              <RocketIcon className="w-14 h-14 text-slate-400 text-center" />
              <p className="text-slate-400 mt-3">Start your events here!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventList;
