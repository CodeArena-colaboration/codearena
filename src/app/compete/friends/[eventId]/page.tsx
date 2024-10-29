import React from "react";

const eventId = ({ params }: { params: { eventId: string } }) => {
  return <div> {params.eventId} </div>;
};

export default eventId;
