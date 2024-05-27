# web-chat

A short project to give anyone the ability to easily search and chat with online documetnation. It is also 
a sample of how to consider limitations of technical resources and work within the constraints. 

Using open-ai API and langchang it is simple to scrape a web page to give updated 
information chat-gpt. However the endpoint web-chat does not store scraped websites in any db.
Thus runs into a context/token limit for chat gpt for many websites. 

By adding more storage features like S3, NeonDB (storing chats) and Pinecone (store vector embeddings), 
we take into consideration our computational resourse limitations and effectively work around them. 

------

## Instructions: 

To install dependecies: 
npm install 

To run locally: 
npm run dev

localhost/web-chat (paste url and chat - this endpoint does not use any storage so will hit token limit for open ai API)

localhost/chat/[chatId] ( uses dbs so will not hit toke limit). 

---
## Tech and langauages: 

Next.js
Tyepscript (+ tailwind css) 
Clerk (auth)
Stripe (optional, used in dev mode for learning purposes)
Open AI API
Neon DB (user + message storage) 
Pinecone (vector storage)

---
Requried variables in env.local file: 

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
OPENAI_API_KEY=
DATABASE_URL (neon db)
PINECONE_API_KEY 
NEXT_PUBLIC_PINECONE_INDEX




