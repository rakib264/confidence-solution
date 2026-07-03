"use client";

import { companyContact } from "@/lib/data/company";
import { LeafletMap } from "@/components/ui/LeafletMap";

export function ContactMap() {
  return (
    <LeafletMap
      center={companyContact.mapCenter}
      zoom={15}
      heightClassName="h-[290px]"
      markerLabel={companyContact.office}
    />
  );
}
