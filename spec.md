# Goated Gamer

## Current State
The project has a frontend scaffold (React + TypeScript + Vite) but no App.tsx or component files yet. The user provided the full single-file implementation of the Goated Gamer Hub.

## Requested Changes (Diff)

### Add
- `src/frontend/src/App.tsx` — root component (GoatedGamerHub) with nav, section routing, state, and layout
- `src/frontend/src/data/gameData.ts` — all static data constants (GAMES, TRACKED_GAMES, TIERS, LEADERBOARD_DATA, HALL_OF_FAME, NFT_COLLECTIONS, TOURNAMENTS)
- `src/frontend/src/utils/tierUtils.ts` — getTier helper function
- `src/frontend/src/components/ParticleField.tsx` — canvas particle animation component
- `src/frontend/src/components/PlayerCard.tsx` — expandable leaderboard player card
- `src/frontend/src/components/sections/GamesSection.tsx` — games grid section
- `src/frontend/src/components/sections/LeaderboardsSection.tsx` — leaderboards section (rankings, hall of fame, tier system tabs)
- `src/frontend/src/components/sections/TournamentsSection.tsx` — tournaments section
- `src/frontend/src/components/sections/NftsSection.tsx` — collectibles/NFTs section
- `src/frontend/src/components/sections/TokenSection.tsx` — $GOATED token section
- `src/frontend/src/components/sections/CommunitySection.tsx` — community hub section

### Modify
- None

### Remove
- None

## Implementation Plan
1. Create data file with all static constants
2. Create tierUtils with getTier function
3. Create ParticleField component
4. Create PlayerCard component
5. Create each section component (Games, Leaderboards, Tournaments, NFTs, Token, Community)
6. Create App.tsx that imports and uses all components — same logic and JSX as the original, just references extracted components
