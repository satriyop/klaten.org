# klaten.org ecosystem

Hub for sport organisations in Kabupaten Klaten, and the Club OS that some of those organisations run. Indonesian UI; English terms below.

## Hub

**Hub**:
The public site at klaten.org. Directory, onboarding, sport pages. Not the Club OS.
_Avoid_: platform (ambiguous), portal, landing (implementation)

**Listing**:
A directory row on the Hub for a real-world organisation. May never run the Club OS. `integrated` is a hand-edit at cutover, not a live feed from Club OS.
_Avoid_: Club (that is a tenant), tenant, integrated club

**Atlet**:
A public, opt-in Hub profile for a person, grouped by Sport, with optional Instagram / TikTok / X / website. Curated like a Listing. Not a Club OS roster row.
_Avoid_: Swimmer (Club OS), member, player

**Sport**:
The discipline a Listing or Club belongs to (`renang`, `panahan`, `basket`, …). Required on a Club. Same ids as Hub Listings. Spectra runs only for `renang`.
_Avoid_: cabor as an English code term (UI may say cabor)

## Club OS

**Club**:
A tenant of the Club OS: one hostname, one roster, one set of hats. Created by the operator, not from the Hub. A Pusat Pelatihan (e.g. Perpani) is still a Club when it gets a Hostname. KONI/Pengkab is affiliation, not a tenant type.
_Avoid_: Listing, tenant (say Club), organisation, instance, Pengkab

**Club OS**:
The application that Clubs run (today: the BMSC codebase). One process, many Clubs, selected by hostname.
_Avoid_: BMSC (that is one Club), app, platform

**Hostname**:
The public origin of a Club (`bmsc.klaten.org`, `apta.klaten.org`). It selects the Club. It is the switcher.
_Avoid_: subdomain as the domain term (implementation detail of Hostname), custom domain (not in scope)

**User**:
A login (Google for adults). Not a hat. One User may hold hats on many Clubs.
_Avoid_: account, member, person

**Hat**:
A User’s role on **one** Club (`superadmin`, `club_admin`, `coach`, guardian, athlete login). Hats do not transfer across Hostnames.
_Avoid_: role (say Hat when you mean the per-Club assignment), permission

**Superadmin**:
A Hat on a Club: owner of **that** Club, including granting superadmin on that Club. The operator takes this Hat on every Club they provision. Not a cross-Club god mode.
_Avoid_: platform admin, platform operator as a product role

**Operator**:
The human who creates Clubs, DNS, and Hostnames out of band. Not a Hat. In the product they appear only as Superadmin of each Club they provision.
_Avoid_: platform admin, superadmin (that is the Hat)

## Swim

**Spectra**:
The national meet/athlete source. Every swim Club integrates with it from the day the Club exists. Archery and basket Clubs do not. Each swim Club owns its own copies of catalog Meets; sync conflicts, entries, and results stay on that Club. One fetch, fan-out — not one crawl per Club.
_Avoid_: Kiko, SwimPro as the domain term (Spectra is the name we use)

**Meet**:
A competition row owned by one Club. A national Spectra event becomes a Meet per swim Club, not one shared row.
_Avoid_: event as the English code term (UI may say Event), catalog (implementation)

**Swimmer**:
An athlete record on a **swim** Club. Code and swim UI stay `swimmer` / perenang until the first non-swim Club, when the generic roster word becomes athlete.
_Avoid_: athlete (not yet — that is the P4 generic), member, player

Kiko is not a term in this ecosystem. It was a personal data import into the BMSC Club and is not a Club OS integration.
