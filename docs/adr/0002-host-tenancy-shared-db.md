# One Club OS process, shared Postgres, Hostname selects Club

Apta (and later Clubs) run in the same Node process and database as BMSC. Isolation is `club_id` plus Hostname. Separate databases and separate systemd units were rejected: one Google OAuth client, one User across Clubs, and three Clubs do not pay for N copies of auth. Cookie domain stays host-only, not `.klaten.org`.
