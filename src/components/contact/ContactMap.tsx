"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { companyContact } from "@/lib/data/company";

export function ContactMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
  });

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
        center={companyContact.mapCenter}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "290px" }}
        options={{ disableDefaultUI: true, zoomControl: true }}
      >
        <MarkerF
          position={companyContact.mapCenter}
          title={companyContact.office}
        />
      </GoogleMap>
    </div>
  );
}
