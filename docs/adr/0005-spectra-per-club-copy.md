# Spectra is on for every swim Club; catalog is copied per Club

Spectra is national, so every Club whose sport is swimming integrates from day one — not a BMSC exclusive. The current `meets.club_id` model stays: one nightly fetch, upsert a copy onto each swim Club. A shared catalog plus “kita ikut” overlay is the better nationwide shape and is deferred until copies or rate limits hurt. Non-swim Clubs never get Spectra.
