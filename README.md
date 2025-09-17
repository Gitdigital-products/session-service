# session-service
**session-service** manages user sessions.  ## Endpoints - `GET /health` — service status - `POST /session/start` — start a user session (sample) - `POST /session/end` — end a user session (sample) - `GET /session/:userId` — get active sessions for a user (sample)  ## Tracing This service reports telemetry to the tracing-service using the URL 
