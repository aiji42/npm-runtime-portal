import {
  SiBun,
  SiCloudflare,
  SiDeno,
  SiNodedotjs,
  SiVercel,
} from "react-icons/si";
import { GoBrowser } from "react-icons/go";

export const runtimes = [
  {
    key: "node",
    name: "Node.js",
    Icon: SiNodedotjs,
  },
  {
    key: "browser",
    name: "Browser",
    Icon: GoBrowser,
  },
  {
    key: "workerd",
    name: "Cloudflare Workers",
    Icon: SiCloudflare,
  },
  {
    key: "edge-light",
    name: "Vercel Edge Functions",
    Icon: SiVercel,
  },
  {
    key: "deno",
    name: "Deno",
    Icon: SiDeno,
  },
  {
    key: "bun",
    name: "Bun",
    Icon: SiBun,
  },
] as const;
