import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "../utils/constants";

export const SensorContext = createContext();

export function SensorProvider({ children }) {
  const [sensorData, setSensorData] = useState({
    temperature: "N/A",
    humidity: "N/A",
    soilMoisture: "N/A",
    moistureThresholdHigh: "N/A",
    moistureThresholdLow: "N/A",
    pumpMode: "N/A",
    pumpState: "N/A",
    relayToPump: "N/A",
  });

  useEffect(() => {
    const socket = io(BASE_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 20000,
    });
    socket.on("connect", () => console.log("Connected to WebSocket!"));

    socket.on("temperature", (data) => {
      setSensorData((prev) => ({ ...prev, temperature: data.value }));
    });

    socket.on("humidity", (data) => {
      setSensorData((prev) => ({ ...prev, humidity: data.value }));
    });

    socket.on("soil-moisture", (data) => {
      setSensorData((prev) => ({ ...prev, soilMoisture: data.value }));
    });

    // socket.on("moisture-threshold-high", (data) => {
    //   setSensorData((prev) => ({ ...prev, moistureThresholdHigh: data.value }));
    // });

    // socket.on("moisture-threshold-low", (data) => {
    //   setSensorData((prev) => ({ ...prev, moistureThresholdLow: data.value }));
    // });

    socket.on("pump-mode", (data) => {
      setSensorData((prev) => ({ ...prev, pumpMode: data.value }));
    });

    socket.on("pump-state", (data) => {
      setSensorData((prev) => ({ ...prev, pumpState: data.value }));
    });

    socket.on("relay-to-pump", (data) => {
      setSensorData((prev) => ({ ...prev, relayToPump: data.value }));
    });

    socket.on("disconnect", () => console.log("Disconnected from WebSocket!"));

    return () => socket.disconnect();
  }, []);

  return (
    <SensorContext.Provider value={{ sensorData }}>
      {children}
    </SensorContext.Provider>
  );
}
