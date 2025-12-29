export default async function handler(req, res) {
      const { q } = req.query;
        try {
            const response = await fetch(
                  `https://freemusicarchive.org/api/get/tracks.json?api_key=YOUR_FMA_API_KEY&limit=10&track_title=${encodeURIComponent(q)}`
                      );
                          const data = await response.json();
                              res.status(200).json(data);
                                } catch {
                                    res.status(500).json({ error: "Failed to fetch FMA results" });
                                      }
                                      }
