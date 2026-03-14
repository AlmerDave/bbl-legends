# BBL (Basketball Badminton Legends) - Complete Project Specification

## Project Overview

**BBL** is a PWA (Progressive Web App) for managing basketball and badminton game queues among friends. The app enables players to:
- Create and join lobbies
- Queue for matches using Mobile Legends-style matchmaking
- Track competitive rank through a star-based system
- Vote on match results after physical gameplay

**Design Aesthetic:** Mobile Legends / MOBA gaming interface  
**Orientation:** Landscape only (authentic gaming experience)  
**Target Users:** Friend groups playing at physical courts  
**Platform:** PWA (works on mobile devices)

---

## Core Concepts

### Lobby System
- **One lobby = One team (or partial team)**
- Lobbies are identified by 5-character alphanumeric codes (e.g., "Xy7aB")
- Players join lobbies via shared codes
- Max lobby size: 2 players (badminton), 5 players (basketball)
- Lobbies can be merged as **teammates** during matchmaking

### Matchmaking Logic (Critical!)
- System matches lobbies with the **same format selection** (1v1, 2v2, 3v3, etc.)
- **Lobbies are merged as TEAMMATES, not opponents**
- Example: Lobby A (3 players) + Lobby B (2 players) = Team A (5 players)
- Team A fights Team B (another combination of lobbies)
- After match, merged lobbies **separate** and return to original state

### Sports & Formats
**Badminton:**
- Singles: 1v1 (2 players total)
- Doubles: 2v2 (4 players total)

**Basketball:**
- 1v1 (2 players)
- 2v2 (4 players)
- 3v3 (6 players)
- 4v4 (8 players)
- 5v5 (10 players)

---

## Complete Feature List

### ✅ INCLUDED FEATURES

#### 1. Sport & Location Selection
- Choose Basketball or Badminton
- Select location from dropdown (admin-configured in Firebase)
- Locations are sport-specific (basketball locations ≠ badminton locations)

#### 2. Lobby Management
- **Create Lobby:**
  - Auto-generates 5-char code
  - Host selects sport and location
  - Max players: 2 (badminton), 5 (basketball)
- **Join Lobby:**
  - Enter 5-char code
  - See real-time player list
  - Players can leave anytime before queue

#### 3. Smart Format Selection
- **Auto-Detection (No Popup):**
  - Badminton: 2 players → Auto "2v2"
  - Basketball: 2/4/6/8/10 players → Auto 1v1/2v2/3v3/4v4/5v5
- **Manual Selection (Popup):**
  - Badminton: 1 player → Choose "1v1 or 2v2"
  - Basketball: 1/3/5/7/9 players → Choose format from available options
- **Selection Timing:** After clicking "Find Match" (not when creating lobby)

#### 4. Matchmaking System
**Queue Logic:**
1. Host clicks "Find Match"
2. System checks player count → Shows format popup (if needed)
3. Host selects format
4. Matchmaking searches for:
   - Other lobbies with same format selection
   - Merges lobbies to complete team sizes
   - Example: 3-player lobby (5v5) + 2-player lobby (5v5) = Team A (5)
5. System finds opposing team (another combination of lobbies)
6. Both teams see "Match Found! Accept?" popup

**Accept/Decline Flow:**
- All players have 15 seconds to accept
- ALL must accept for match to proceed
- If anyone declines → Both teams return to queue
- Declining players don't get penalties (just re-queue)

#### 5. Court Assignment
**After all players accept:**
- System auto-assigns available court (based on admin-configured courts)
- Full-screen display shows:
  - Location name (e.g., "TH3RD Basketball Court")
  - Court number (e.g., "Court #2")
  - Both teams with player names, star counts, rank badges
  - Player status: `[🎮 In-Game]` indicator
  - Button: "Start Playing Now" (informational/optional)

**Court Assignment Logic:**
- Admin configures courts per location in Firebase
- Example: TH3RD Court has 2 basketball courts (Court 1, Court 2)
- System assigns first available court
- Players don't choose court (auto-assigned)

#### 6. Physical Gameplay
- App does **not** track physical game
- Players physically go to assigned court and play
- No timer, no in-app game tracking
- Players manage themselves

#### 7. Vote System
**After physical game ends:**
1. Players return to app
2. Vote screen appears
3. Each player votes: "My Team Won" or "Enemy Team Won"
4. **Real-time vote display** (all players see who voted what)
5. **5-minute timeout:**
   - After 5 minutes, non-voters auto-penalized (-2 stars)
   - Match proceeds with majority vote

**Vote Result Logic:**
- **Majority Wins:**
  - Example: 6 votes Team A, 4 votes Team B → Team A wins
  - Winners: +1 star each
  - Losers: -1 star each
- **Deadlock (Equal Votes):**
  - Example: 5 votes Team A, 5 votes Team B
  - Match **voided**, no stars awarded to anyone
  - Public vote display shows who caused deadlock
- **Non-Voters:**
  - After 5-min timeout: -2 stars
  - Match result determined by other votes (majority)

**Vote Transparency:**
- All players see everyone's vote in real-time
- Example display:
  ```
  Player 1: ✅ My Team
  Player 2: ✅ My Team
  Player 3: ✅ Enemy Team
  Player 4: ⏳ In-Game (hasn't voted)
  ```

#### 8. Post-Match Flow
1. Results screen displays (5 seconds)
2. Star counts updated
3. Vote breakdown shown
4. **Players auto-return to ORIGINAL lobbies**
5. Merged lobbies **separate**:
   - Example: Team A was Lobby A (3) + Lobby B (2)
   - After match: Lobby A intact (3 players), Lobby B intact (2 players)
6. Each lobby can immediately click "Find Match" again

#### 9. Rank System
**Linear Star Progression (0-100+):**

| Rank Tier | Stars | Badge |
|-----------|-------|-------|
| Warrior | 0-10 | ⚔️ Bronze shield |
| Elite | 11-20 | 🛡️ Silver shield |
| Master | 21-35 | 🏅 Gold medal |
| Grandmaster | 36-50 | 💎 Diamond |
| Epic | 51-65 | 👑 Purple crown |
| Legend | 66-80 | 🌟 Gold star |
| Mythic | 81-90 | 🔥 Red flame |
| Mythical Honor | 91-95 | ✨ Blue aura |
| Mythical Glory | 96-100 | 🌌 Galaxy effect |
| Mythical Immortal | 101+ | 🏆 Golden trophy |

**Progression Rules:**
- Win: +1 star
- Loss: -1 star
- Cannot drop below 0 stars
- No rank protection (simplified for friends)
- No divisions within ranks (linear)

#### 10. Authentication
- **Name-based only** (no passwords)
- First-time users: Enter name → Saved to Firebase
- Returning users: Auto-recognized (stored locally)
- Simple, frictionless for friend groups

#### 11. Admin Configuration (Firebase Only)
**Admin has NO UI screens** - all configuration via Firebase directly

**Location Configuration:**
```json
{
  "locations": {
    "basketball": {
      "th3rd_court": {
        "name": "TH3RD Basketball Court",
        "total_courts": 2,
        "active_courts": [1, 2]
      }
    },
    "badminton": {
      "dragonsmash": {
        "name": "DragonSmash Badminton",
        "total_courts": 3,
        "active_courts": [1, 2, 3]
      }
    }
  }
}
```

Admin can:
- Add/remove locations
- Set number of courts per location
- Enable/disable specific courts
- All changes done manually in Firebase console

---

### ❌ EXCLUDED FEATURES

These were discussed but **explicitly excluded** from MVP:

1. ❌ **Ready System** - No "ready check" in lobby (removed)
2. ❌ **60-Second Countdown** - No timer before game starts (removed)
3. ❌ **Spectator Mode** - No watching live games
4. ❌ **Real-Time Court Tracking UI** - Users don't see court availability
5. ❌ **Wait Time Estimates** - No queue time predictions
6. ❌ **Multi-Location Support** - MVP is single-location focused (can expand later)
7. ❌ **"Games Played" Stat** - Only track stars/wins/losses (not total games)
8. ❌ **Dishonest Voting Penalties** - Just void matches, no punishment
9. ❌ **Rank Divisions** - No "Epic I, Epic II, Epic III" (simplified)
10. ❌ **Rank Protection Cards** - No protection from demotion
11. ❌ **QR Codes** - Only alphanumeric lobby codes
12. ❌ **Admin UI** - Configuration via Firebase only

---

## Technical Architecture

### Tech Stack
- **Frontend:** PWA (React/Vue/Svelte recommended)
- **Backend:** Firebase (Realtime Database or Firestore)
- **Authentication:** Firebase Auth (Anonymous or Simple)
- **Hosting:** Firebase Hosting or Vercel
- **Orientation:** Landscape-locked (CSS + JavaScript)

### Firebase Data Structure

```json
{
  "locations": {
    "basketball": {
      "th3rd_court": {
        "name": "TH3RD Basketball Court",
        "total_courts": 2,
        "active_courts": [1, 2]
      }
    },
    "badminton": {
      "dragonsmash": {
        "name": "DragonSmash Badminton",
        "total_courts": 3,
        "active_courts": [1, 2, 3]
      }
    }
  },
  
  "lobbies": {
    "Xy7aB": {
      "code": "Xy7aB",
      "host": "player1_id",
      "sport": "basketball",
      "location": "th3rd_court",
      "selected_format": "5v5",
      "status": "queued",
      "players": {
        "player1_id": { "name": "Player1", "stars": 45, "rank": "Grandmaster" },
        "player2_id": { "name": "Player2", "stars": 32, "rank": "Master" },
        "player3_id": { "name": "Player3", "stars": 28, "rank": "Master" }
      },
      "created_at": 1234567890
    }
  },
  
  "matches": {
    "match_id_123": {
      "sport": "basketball",
      "format": "5v5",
      "location": "th3rd_court",
      "court_number": 2,
      "team_a": {
        "lobbies": ["Xy7aB", "Zk9mN"],
        "players": ["player1_id", "player2_id", "player3_id", "player4_id", "player5_id"]
      },
      "team_b": {
        "lobbies": ["AbCd5"],
        "players": ["player6_id", "player7_id", "player8_id", "player9_id", "player10_id"]
      },
      "status": "in_progress",
      "started_at": 1234567900,
      "votes": {
        "player1_id": "team_a",
        "player2_id": "team_a",
        "player3_id": "team_a",
        "player4_id": null,
        "player5_id": "team_b",
        "player6_id": "team_b",
        "player7_id": "team_b",
        "player8_id": "team_b",
        "player9_id": "team_b",
        "player10_id": "team_b"
      },
      "result": "team_b_wins",
      "completed_at": 1234568000
    }
  },
  
  "players": {
    "player1_id": {
      "name": "Player1",
      "stars": 45,
      "rank": "Grandmaster",
      "wins": 23,
      "losses": 12
    }
  }
}
```

---

## User Flows

### Flow 1: Creating Lobby & Queueing (3 Friends, Basketball 5v5)

**Lobby A (3 players):**
1. Player 1 opens app → Selects Basketball
2. Selects location "TH3RD Court"
3. Clicks "Create Lobby" → Code "Xy7aB" generated
4. Shares code with Player 2 and Player 3
5. Player 2 and 3 join via code
6. Lobby A now has 3 players
7. Player 1 (host) clicks "Find Match"
8. Popup: "You have 3 players. Choose: 3v3, 4v4, or 5v5?"
9. Selects "5v5"
10. Matchmaking starts (searching for 2-player lobby or 2 solos)

**Lobby B (2 players):**
1. Player 4 creates lobby → Code "Zk9mN"
2. Player 5 joins
3. Lobby B has 2 players
4. Player 4 clicks "Find Match"
5. Popup: "You have 2 players. Choose format?"
6. Selects "5v5"
7. Matchmaking starts

**Matchmaking:**
- System finds: Lobby A (3, selected 5v5) + Lobby B (2, selected 5v5)
- Merges into Team A (5 players)
- Finds opposing team (e.g., Lobby C with 5 players)
- Match: Team A [Lobby A + Lobby B] vs Team B [Lobby C]

**All 10 Players:**
1. "Match Found! Accept?" popup (15 sec)
2. Everyone accepts
3. Court Assignment Screen:
   - Location: TH3RD Basketball Court
   - Court: #2
   - YOUR TEAM: Player 1-5
   - ENEMY TEAM: Player 6-10
4. Players physically go to Court #2
5. Play basketball (app idle)
6. After game, players return to app
7. Vote screen appears
8. Each votes: "My Team" or "Enemy Team"
9. Real-time votes displayed
10. After 5 min or all votes → Results
11. Stars updated
12. Players return to ORIGINAL lobbies:
    - Lobby A: Player 1, 2, 3
    - Lobby B: Player 4, 5
13. Can queue again

---

### Flow 2: Solo Player (Badminton)

**Player 1 (Solo):**
1. Opens app → Selects Badminton
2. Selects location "DragonSmash"
3. Creates lobby → Code "AbC12"
4. Clicks "Find Match"
5. Popup: "You're alone. Choose: 1v1 or 2v2?"
6. Selects "1v1"
7. Matchmaking finds another solo player (Lobby B)
8. Match: Player 1 vs Player 2
9. Both accept
10. Court assigned
11. Play badminton
12. Vote → Results → Return to lobby

---

### Flow 3: Odd Player Count (7 Friends, Basketball)

**Not Possible in Single Lobby:**
- Max lobby size = 5 (basketball)
- 7 friends must split into multiple lobbies

**Option A: Split 5+2**
- Lobby A: 5 players → Select "5v5" → Queue
- Lobby B: 2 players → Select format → Separate queue

**Option B: Split 3+3+1**
- Lobby A: 3 players → Select "3v3" → Queue
- Lobby B: 3 players → Select "3v3" → Queue
- Lobby C: 1 player → Select "3v3" → Queue
- Matchmaking: Lobby A vs Lobby B (if both online)
- Lobby C waits for 2 more solos or a 2-player lobby

---

## Critical Rules to Remember

### Rule 1: Lobby = Team (or Part of Team)
- One lobby represents one team or partial team
- Lobbies never fight each other if in same lobby
- Lobbies can merge as teammates

### Rule 2: Matchmaking Merges as Teammates
- Lobby A (3) + Lobby B (2) = Team A (5)
- Team A fights Team B (NOT Lobby B)
- Merged lobbies are on the SAME side

### Rule 3: Format Selection = Matchmaking Pool
- Only lobbies with same format can match
- 3v3 lobbies only match with other 3v3 lobbies
- Cannot match 3v3 lobby with 5v5 lobby

### Rule 4: Court Assignment is Auto
- System picks available court
- Users don't choose court
- Admin configures courts in Firebase

### Rule 5: Votes are Public & Honor-Based
- All players see who voted what
- No verification of actual winner
- Public display deters dishonesty
- Deadlocks void the match

### Rule 6: Lobbies Return to Original State
- After match, merged lobbies separate
- Each lobby intact (same players, same code)
- Can immediately re-queue

---

## Design Specifications

### Visual Style
- **Theme:** Mobile Legends / MOBA gaming aesthetic
- **Colors:**
  - Primary: Deep purple (#2D1B69, #4A2F7A)
  - Accent: Electric blue (#00D9FF, #4F9FFF)
  - Highlight: Gold (#FFB800)
  - Background: Dark navy/black (#0A0E27, #151934)
- **Typography:** Futuristic sans-serif (bold headers)
- **Effects:** Glowing borders, gradient overlays, subtle animations

### Orientation
- **Landscape only** (like Mobile Legends)
- Locked via CSS/JavaScript
- Base resolution: 1920x1080 (scales down for mobile)

### Key Screens (5 Total)
1. Home / Sport Selection
2. Lobby Screen (players list + code)
3. Matchmaking / Queue Screen
4. Court Assignment Screen
5. Vote Screen

Full design specs in `STITCH_DESIGN_PROMPT.md`

---

## FAQ / Common Confusions

**Q: Can one lobby have 10 players?**  
A: No. Max lobby size = 5 (basketball), 2 (badminton). If 10 friends want to play, they create multiple lobbies.

**Q: How do 3 players play 5v5?**  
A: System finds a 2-player lobby (also selected 5v5) and merges them as teammates. Together = 5-player team.

**Q: Do merged lobbies fight each other?**  
A: NO. Lobby A + Lobby B = Team A (teammates). They fight Team C, not each other.

**Q: What if both teams claim they won?**  
A: Deadlock. Match voided, no stars awarded. Public votes show who lied.

**Q: Can admin see who's playing?**  
A: Admin has no UI. They only configure courts in Firebase manually.

**Q: What happens if someone quits mid-game?**  
A: Physical game = outside app. If they don't vote → -2 stars after 5-min timeout.

**Q: Can I create a lobby without location?**  
A: No. Location is required (court assignment needs it).

**Q: Do I need to report score?**  
A: No score tracking. Only vote winner (honor system).

---

## Next Steps for Development

1. **Design Phase:**
   - Use `STITCH_DESIGN_PROMPT.md` to create mockups
   - Design all 5 screens in landscape
   - Create component library

2. **Development Phase:**
   - Set up Firebase project
   - Build lobby system (create/join/realtime updates)
   - Implement matchmaking algorithm
   - Build vote system with timeout
   - Add rank/star tracking

3. **Testing Phase:**
   - Test with 10 players (5v5)
   - Test edge cases (odd numbers, deadlocks)
   - Test vote timeout logic
   - Test lobby merging/separation

4. **Deployment:**
   - Deploy as PWA
   - Configure Firebase security rules
   - Set up admin access (Firebase console)
   - Share with friend group

---

## Version History

- **v1.0** - Initial MVP specification (Current)
- Future: Multi-location support, advanced stats, seasons

---

## Contact / Support

This is a personal project for friend groups. No official support.

For questions about this spec, refer to the original conversation with Claude.
