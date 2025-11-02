PULSE BACKEND — PHASE 1 (MVP)

Goal:
Build a simple direct-messaging backend with authentication, profiles, chats, and messages.

---

Core Features:

1. Auth (Auth0 + JWT verification)
2. Users (profile info for authenticated users)
3. Chats (DM only)
4. Messages (send + fetch)
5. REST-only MVP (Realtime in Phase 2)

---

Entities:
User

- id
- email
- userName
- displayName
- bio
- avatarImg
- createdAt

Chat

- id
- participants (2 user IDs)
- lastMessage
- updatedAt

Message

- id
- chatId
- senderId
- content
- createdAt

---

APIs Overview:
Auth:

- handled by Auth0
- JWT validated on all protected routes

Users:

- GET /users/me
- PATCH /users/me

Chats:

- GET /chats
- POST /chats

Messages:

- GET /messages/:chatId
- POST /messages

---

Tech Stack:

- NestJS (TypeScript)
- MongoDB / Firestore
- Auth0
- Socket.io (Phase 2)
- Render / Vercel (Deployment)

---

Phase 1 Output:

- Working Auth + Users + Chats + Messages
- Basic Postman-tested API
- Ready for Socket.io integration
