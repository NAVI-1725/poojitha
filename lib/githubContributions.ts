export async function getContributions() {
  try {
    const res = await fetch("/api/contributions"); // or GitHub API URL if direct
    if (!res.ok) throw new Error("Failed to fetch contributions");
    const data = await res.json();
    console.log("GitHub Contributions:", data); // ✅ See this in browser dev console
    return data;
  } catch (err) {
    console.error("Error fetching GitHub contributions:", err);
    return []; // fallback
  }
}
