"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

export function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: "contact-map",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  });
  const center = { lat: 24.7136, lng: 46.6753 };

  if (!isLoaded) {
    return (
      <div className="grid h-72 place-items-center rounded-xl border border-border bg-muted text-sm text-muted-foreground">
        Map loading...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{ width: "100%", height: "290px" }}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}
