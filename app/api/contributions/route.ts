// app/api/contributions/route.ts
import { NextResponse } from "next/server";

type Day = { date: string; contributionCount: number; color: string };
type Week = { contributionDays: Day[] };

export async function GET() {
  const TOKEN = process.env.GITHUB_TOKEN;
  if (!TOKEN) {
    return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });
  }

  const query = `
    query {
      user(login: "NAVI-1725") {
        contributionsCollection(
          from: "2025-01-01T00:00:00Z",
          to:   "2025-12-31T23:59:59Z"
        ) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const ghRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!ghRes.ok) {
    const errorText = await ghRes.text();
    return NextResponse.json({ error: errorText }, { status: 502 });
  }

  const json = await ghRes.json();
  if (json.errors) {
    return NextResponse.json({ error: JSON.stringify(json.errors) }, { status: 500 });
  }

  const weeks: Week[] =
    json.data.user.contributionsCollection.contributionCalendar.weeks;

  const days: Day[] = weeks.flatMap((week) => week.contributionDays);

  return NextResponse.json({ days });
}
