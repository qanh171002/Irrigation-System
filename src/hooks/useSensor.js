import { useContext } from "react";
import { SensorContext } from "../contexts/SensorContext";

export function useSensor() {
  const context = useContext(SensorContext);
  if (!context) {
    throw new Error("useSensor must be used within a SensorProvider");
  }
  return context;
}
