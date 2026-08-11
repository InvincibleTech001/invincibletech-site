import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: site.keywords,
};