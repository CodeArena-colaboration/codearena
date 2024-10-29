"use client";
import React, { useCallback, useEffect, useState } from "react";
import AdminLayout from "@/components/layouts/competeLayout";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import EventForm from "@/components/container/EventForm";
import EventList from "@/components/container/EventList";
import { supabase } from "@/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

interface Event {
  name: string;
  id: string;
  event_id: string;
  created_at: string;
  start_date: string;
  start_time: {
    hours: string;
    minutes: string;
  };
  topics: string[]; // Make topics optional
  difficulty: number; // Assuming this is the new property for difficulty
}

function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSheet = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const refreshEvents = () => {
    toggleSheet();
    fetchEvents();
  };

  const fetchEvents = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("events")
      .select(
        "name, id, event_id, created_at, start_date, start_time,topics,difficulty"
      );

    if (data && data.length > 0) {
      setEvents(data as Event[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <AdminLayout title="Friends Page">
      <div className="flex justify-end max-w-[780px] m-auto mt-4 ">
        <div className="">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Button onClick={toggleSheet} variant="default">
                New Room
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-scroll">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold">
                  Create new contest?
                </SheetTitle>
                <SheetDescription className="text-left">
                  <EventForm
                    refreshEvents={refreshEvents}
                    closeSheet={toggleSheet}
                  />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="mt-4">
        {loading ? (
          <div className="max-w-[780px] m-auto">
            <Card className="shadow-none p-5">
              <Skeleton className="h-3 w-[250px]" />
              <Skeleton className="h-2 mt-2 w-[150px]" />
            </Card>
          </div>
        ) : (
          <EventList events={events} refreshList={fetchEvents} />
        )}
      </div>
    </AdminLayout>
  );
}

export default AdminEvents;
