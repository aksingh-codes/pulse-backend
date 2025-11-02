# API REFERENCE — PULSE BACKEND (PHASE 1)

---

## AUTH

- **Auth handled by Auth0**
- All protected routes require JWT in `Authorization` header
- Verifies user identity before any database action

---

## USERS

- **GET /users/me** — fetch current user profile
- **PATCH /users/me** — update profile (display name, bio, avatar)

---

## CHATS

- **GET /chats** — get all chats for current user
- **POST /chats** — create a new DM between two users

---

## MESSAGES

- **GET /messages/:chatId** — fetch all messages for a chat
- **POST /messages** — send a message

---

## FUTURE (PHASE 2)

- Realtime messaging via Socket.io
- Typing indicators
- Read receipts
- Group chat support
