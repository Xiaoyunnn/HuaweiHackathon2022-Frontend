import { FlatList } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import ExploreCard from "../components/explore/exploreCard";
import ScheduleCard from "../components/schedule/scheduleCard";
import DateScheduleList from "../components/schedule/dateScheduleList";

export default function Schedule() {
  const sample = [
    {
      id: 1,
      date: "Tue 8 Mar 2022",
      slots: [
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
      ],
    },
    {
      id: 2,
      date: "Wed 9 Mar 2022",
      slots: [
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
      ],
    },
    {
      id: 3,
      date: "Wed 10 Mar 2022",
      slots: [
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
        {
          time: "1100 - 1200",
          location: "Merlion Park",
          note: "Meet at XXX MRT Exit B at 1045, call Mr Tan at 91234567",
        },
      ],
    },
  ];
  const renderItem = ({ item }) => <DateScheduleList schedule={item} />;
  return (
    <FlatList
      style={globalStyles.tripsContainer}
      data={sample}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}
