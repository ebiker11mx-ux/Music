// api/jamendo.js
export default async function handler(req, res) {
  const { q } = req.query;
    const CLIENT_ID = "YOUR_JAMENDO_CLIENT_ID"; // register free at developer.jamendo.com

      try {
          const response = await fetch(
                `https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=json&limit=10&search=${encodeURIComponent(q)}`
                    );
                        const data = await response.json();
                            res.status(200).json(data);
                              } catch {
                                  res.status(500).json({ error: "Failed to fetch Jamendo results" });
                                    }
                                    }