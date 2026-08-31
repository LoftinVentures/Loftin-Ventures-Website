import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JAY L²",
    short_name: "JAY L²",
    description: "Lose the weight. Keep the strength.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a09",
    theme_color: "#0a0a09",
  };
}
