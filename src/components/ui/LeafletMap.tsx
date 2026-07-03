"use client";

import dynamic from "next/dynamic";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), {
  ssr: false,
});
const CircleMarker = dynamic(
  () => import("react-leaflet").then((m) => m.CircleMarker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

type LeafletMapProps = {
  center: { lat: number; lng: number };
  zoom?: number;
  heightClassName?: string;
  markerLabel: string;
};

export function LeafletMap({
  center,
  zoom = 15,
  heightClassName = "h-[340px]",
  markerLabel,
}: LeafletMapProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-border ring-1 ring-border/50 ${heightClassName}`}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CircleMarker
          center={[center.lat, center.lng]}
          radius={8}
          pathOptions={{
            color: "#0f1724",
            weight: 2,
            fillColor: "#1d4ed8",
            fillOpacity: 0.9,
          }}
        >
          <Popup>{markerLabel}</Popup>
        </CircleMarker>
      </MapContainer>
    </div>
  );
}
