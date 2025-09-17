export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "session-service" });
  });

  // Session-specific endpoints
  app.post("/session/start", (req, res) => {
    const { userId } = req.body;
    res.json({ message: `Session started for user ${userId}`, sessionId: `sess-${Date.now()}` });
  });

  app.post("/session/end", (req, res) => {
    const { sessionId } = req.body;
    res.json({ message: `Session ${sessionId} ended` });
  });

  app.get("/session/:userId", (req, res) => {
    const { userId } = req.params;
    res.json({ userId, activeSessions: [{ sessionId: "sess-12345", startedAt: "2025-09-17T12:00:00Z" }] });
  });
}
