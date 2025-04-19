import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "https://irrigation-system-be.onrender.com";
// const SOCKET_URL = "http://localhost:4001";

function RealtimeData() {
  const [temperature, setTemperature] = useState("N/A");
  const [humidity, setHumidity] = useState("N/A");
  const [soilMoisture, setSoilMoisture] = useState("N/A");
  const [moistureThresholdHigh, setMoistureThresholdHigh] = useState("N/A");
  const [moistureThresholdLow, setMoistureThresholdLow] = useState("N/A");
  const [pumpMode, setPumpMode] = useState("N/A");
  const [pumpState, setPumpState] = useState("N/A");
  const [relayToPump, setRelayToPump] = useState("N/A");

  const getDisplayValue = (value, type) => {
    if (value === "N/A") return "N/A";

    switch (type) {
      case "pumpMode":
        return value === "1" ? "Auto" : "Manual";
      case "pumpState":
        return value === "0" ? "Good condition" : "Bad condition";
      case "relayToPump":
        return value === "1" ? "On" : "Off";
      default:
        return value;
    }
  };

  useEffect(() => {
    const socket = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 20000,
    });

    socket.on("connect", () => console.log("Connected to WebSocket!"));
    socket.on("temperature", (data) => {
      console.log("Nhận dữ liệu nhiệt độ:", data);
      setTemperature(data.value);
    });
    socket.on("humidity", (data) => {
      console.log("Nhận dữ liệu độ ẩm:", data);
      setHumidity(data.value);
    });
    socket.on("soil-moisture", (data) => {
      console.log("Nhận dữ liệu độ ẩm đất:", data);
      setSoilMoisture(data.value);
    });
    socket.on("moisture-threshold-high", (data) => {
      console.log("Nhận dữ liệu ngưỡng độ ẩm cao:", data);
      setMoistureThresholdHigh(data.value);
    });
    socket.on("moisture-threshold-low", (data) => {
      console.log("Nhận dữ liệu ngưỡng độ ẩm thấp:", data);
      setMoistureThresholdLow(data.value);
    });
    socket.on("pump-mode", (data) => {
      console.log("Nhận dữ liệu chế độ bơm:", data);
      setPumpMode(data.value);
    });
    socket.on("pump-state", (data) => {
      console.log("Nhận dữ liệu trạng thái bơm:", data);
      setPumpState(data.value);
    });
    socket.on("relay-to-pump", (data) => {
      console.log("Nhận dữ liệu rơ le tới bơm:", data);
      setRelayToPump(data.value);
    });

    socket.on("disconnect", () => console.log("Disconnected from WebSocket!"));

    return () => socket.disconnect();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <p className="mb-4 text-center text-2xl font-semibold text-gray-700 uppercase">
        Realtime data test
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Temperature" value={temperature} unit="°C" />
        <Card title="Humidity" value={humidity} unit="%" />
        <Card title="Soil Moisture" value={soilMoisture} unit="%" />
        <Card
          title="Moisture Threshold High"
          value={moistureThresholdHigh}
          unit="%"
        />
        <Card
          title="Moisture Threshold Low"
          value={moistureThresholdLow}
          unit="%"
        />
        <Card title="Pump Mode" value={getDisplayValue(pumpMode, "pumpMode")} />
        <Card
          title="Pump State"
          value={getDisplayValue(pumpState, "pumpState")}
        />
        <Card
          title="Relay To Pump"
          value={getDisplayValue(relayToPump, "relayToPump")}
        />
      </div>
    </div>
  );
}

function Card({ title, value, unit }) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-6 text-center">
      <div className="rounded-t-lg bg-green-600 p-2 font-medium text-gray-100">
        {title}
      </div>
      <div className="p-4">
        <p className="text-2xl font-medium text-gray-700">
          {value} {unit}
        </p>
      </div>
    </div>
  );
}

export default RealtimeData;
