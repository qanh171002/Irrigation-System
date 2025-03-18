import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_URL = "https://irrigation-system-be.onrender.com";

function RealtimeData() {
  const [temperature, setTemperature] = useState("N/A");
  const [humidity, setHumidity] = useState("N/A");
  const [soilMoisture, setSoilMoisture] = useState("N/A");

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
    socket.on("soilMoisture", (data) => {
      console.log("Nhận dữ liệu độ ẩm đất:", data);
      setSoilMoisture(data.value);
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
