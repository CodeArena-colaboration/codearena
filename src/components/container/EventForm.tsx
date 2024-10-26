import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/utils";
import { Clock } from "lucide-react";
import { TimePickerInput } from "@/components/ui/time-picker-input";

interface EventFormProps {
  refreshEvents: () => void;
  closeSheet: () => void;
}

function EventForm({ closeSheet, refreshEvents }: EventFormProps) {
  const [startDate, setStartDate] = React.useState<Date>();
  const [name, setName] = React.useState("");
  const [inProgress, setInprogress] = React.useState(false);
  const [interests, setInterests] = React.useState<string[]>([]);
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const [date, setDate] = React.useState<Date>();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const availableInterests = [
    "All topics",
    "Array",
    "Linked List",
    "Stack & Queue",
    "Tree",
    "Graph",
    "Dynamic Programming",
    "Tries",
  ];

  const [difficulty, setDifficulty] = React.useState<number | null>(null);
  const handleDifficulty = (value: string) => {
    setDifficulty(parseInt(value));
  };

  const handleInterestSelect = (interest: string) => {
    setInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest)
        : [...prevInterests, interest]
    );
    setDropdownOpen(false);
  };

  const validateForm = () => {
    if (!name || !startDate || !difficulty || interests.length === 0) {
      alert("Please fill out all fields.");
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (!validateForm()) return;

    setInprogress(true);
    const startTime = {
      hours: hourRef.current?.value || "00",
      minutes: minuteRef.current?.value || "00",
    };

    const payload = {
      name,
      start_date: startDate?.toISOString(),
      start_time: startTime,
      topics: interests,
      difficulty: difficulty,
    };

    // console.log("Data to be inserted:", payload);

    const { error } = await supabase.from("events").insert(payload);

    if (!error) {
      setInprogress(false);
      refreshEvents();
    } else {
      console.error("Error inserting data:", error);
      setInprogress(false);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mt-6">
        <Label className="mb-2 block">Room Name</Label>
        <Input
          type="text"
          placeholder="Tech discussion 2024"
          value={name || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
        />
      </div>

      <div className="mt-4">
        <Label className="mb-2 block">Start Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !startDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time picker */}
      <div className="mt-4">
        <Label className="mb-4 block">Start Time</Label>
        <div className="flex items-end gap-2">
          <div className="grid gap-1 text-center">
            <Label htmlFor="hours" className="text-xs">
              Hours
            </Label>
            <TimePickerInput
              picker="hours"
              date={date}
              setDate={setDate}
              ref={hourRef}
              onRightFocus={() => minuteRef.current?.focus()}
              required
            />
          </div>
          <div className="grid gap-1 text-center">
            <Label htmlFor="minutes" className="text-xs">
              Minutes
            </Label>
            <TimePickerInput
              picker="minutes"
              date={date}
              setDate={setDate}
              ref={minuteRef}
              onLeftFocus={() => hourRef.current?.focus()}
              required
            />
          </div>
          <div className="flex h-10 items-center">
            <Clock className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Field of Interests dropdown */}
      <div className="mt-4">
        <Label>Field of Interests</Label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full p-2 border h-12 rounded-2xl bg-gray-200 text-left"
          >
            {interests.length > 0
              ? `${interests.length} selected`
              : "Select interests"}
          </button>
          {dropdownOpen && (
            <div className="top-full left-0 mt-1 w-full border border-slate-500 rounded-2xl bg-white shadow-lg z-10 h-52 overflow-y-scroll">
              {availableInterests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestSelect(interest)}
                  className={`block w-full text-left p-2 ${
                    interests.includes(interest) ? "bg-blue-100" : ""
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          )}
          <div className="mt-2 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="inline-block bg-transparent text-base font-normal text-black border-2 rounded-3xl px-2 py-1"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Difficulty */}
      <div className="mt-4">
        <div className="mb-2">
          <Label>Difficulty</Label>
        </div>

        <Select onValueChange={handleDifficulty} required>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Easy</SelectItem>
            <SelectItem value="2">Medium</SelectItem>
            <SelectItem value="3">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <Button onClick={onSubmit} disabled={inProgress} type="submit">
          {inProgress ? "Saving..." : "Save"}
        </Button>
        <Button
          onClick={closeSheet}
          variant="link"
          className="ml-4"
          type="button"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default EventForm;
