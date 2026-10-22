import { eq } from "drizzle-orm";
import { HWW_FLOWS } from "@/components/how-we-work/hww-data";
import { db, hasDatabaseUrl } from "@/lib/db";
import { siteContent } from "@/lib/db/schema";
import { SITE_CONTENT_SEED } from "@/scripts/site-content-seed-data";

const CONTENT_FALLBACKS: Record<string, unknown> = {
  ...SITE_CONTENT_SEED,
  "how-we-work:flows": HWW_FLOWS,
};

function getFallbackContent<T>(key: string): T | null {
  const value = CONTENT_FALLBACKS[key];
  return value === undefined ? null : (value as T);
}

export async function getSiteContent<T>(key: string): Promise<T | null> {
  if (!hasDatabaseUrl()) {
    return getFallbackContent<T>(key);
  }

  try {
    const [row] = await db
      .select()
      .from(siteContent)
      .where(eq(siteContent.key, key))
      .limit(1);

    if (!row) {
      return getFallbackContent<T>(key);
    }

    return row.content as T;
  } catch {
    return getFallbackContent<T>(key);
  }
}

export async function requireSiteContent<T>(key: string): Promise<T> {
  const content = await getSiteContent<T>(key);
  if (!content) {
    throw new Error(`Missing site content for key: ${key}`);
  }
  return content;
}
