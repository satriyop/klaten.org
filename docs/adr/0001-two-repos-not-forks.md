# Two repos, not a fork per Club, not a monorepo yet

The Hub (static, Cloudflare Pages) and the Club OS (Node + Postgres on aidev) stay in separate repos. New Clubs are new rows and Hostnames of the Club OS, never new repositories. A monorepo was rejected because the two deploys have different cadences; revisit only if the Hub must read live Clubs instead of Listings.
