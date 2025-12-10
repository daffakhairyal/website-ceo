# ============================
# 1. BUILD STAGE
# ============================
FROM node:18-slim AS builder

WORKDIR /app

ENV NEXT_DISABLE_ESLINT_PLUGIN=1
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# ============================
# 2. RUNNER STAGE
# ============================
FROM node:18-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
