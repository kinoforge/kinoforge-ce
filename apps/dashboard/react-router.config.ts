import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // Hosts served behind an https proxy, e.g. "kino.example.com".
  allowedActionOrigins: process.env.DASHBOARD_HOSTS?.split(",").filter(Boolean),
} satisfies Config;
