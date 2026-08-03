type LiveStatus = { isLive: true; videoId: string; title: string } | { isLive: false };

/**
 * Checks whether the church's YouTube channel is currently live, using the
 * YouTube Data API (see GCIC-WEBSITE-BUILD-PROMPT.md §8.2). Requires
 * YOUTUBE_API_KEY + YOUTUBE_CHANNEL_ID in the environment — without them (or
 * on any fetch failure), this always resolves to { isLive: false } so the
 * page falls back to the "next service" state rather than showing a broken
 * player.
 */
export async function getLiveStatus(): Promise<LiveStatus> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return { isLive: false };
  }

  try {
    const url = new URL("https://www.googleapis.com/youtube/v3/search");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("channelId", channelId);
    url.searchParams.set("eventType", "live");
    url.searchParams.set("type", "video");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) return { isLive: false };

    const data = await res.json();
    const item = data.items?.[0];
    if (!item) return { isLive: false };

    return { isLive: true, videoId: item.id.videoId, title: item.snippet.title };
  } catch {
    return { isLive: false };
  }
}
