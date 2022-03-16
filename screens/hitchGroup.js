import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import Loading from "./loading";
import DestinationCard from "../components/generatedItinerary/destinationCard";

export default function HitchGroup() {
  return <Loading description={"Finding like-minded buddies!"} />;
}
