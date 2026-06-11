"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef } from "react";
import type { Offer } from "@/app/lib/mock-data";

const PIN_HTML = `<div style="width:14px;height:14px;background:#ff6b1a;border-radius:50%;border:2.5px solid white;box-shadow:0 1px 5px rgba(0,0,0,0.35)"></div>`;

const pinIcon = L.divIcon({
  html: PIN_HTML,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -12],
  className: "",
});

export function MapView({ offers }: { offers: Offer[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [46.5, 11.3],
      zoom: 9,
      zoomControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    layerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    layer.clearLayers();

    offers.forEach((offer) => {
      const popup = L.popup({ closeButton: false, className: "nowa-popup" }).setContent(
        `<div style="min-width:160px;padding:2px 0">
          <p style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#78716c;margin:0 0 4px">${offer.partner}</p>
          <p style="font-size:14px;font-weight:700;color:#1c1917;margin:0 0 6px;line-height:1.3">${offer.title}</p>
          <p style="font-size:13px;color:#57534e;margin:0 0 8px">${offer.price} EUR</p>
          <a href="/offers/${offer.id}" style="font-size:11px;font-weight:700;color:#ff6b1a;text-decoration:none;letter-spacing:.06em;text-transform:uppercase">Ansehen →</a>
        </div>`,
      );

      L.marker([offer.lat, offer.lng], { icon: pinIcon })
        .bindPopup(popup)
        .addTo(layer);
    });
  }, [offers]);

  return (
    <div
      className="w-full overflow-hidden border border-stone-200"
      ref={containerRef}
      style={{ height: 560 }}
    />
  );
}
