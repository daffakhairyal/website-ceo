# ============================
# 1. BUILD STAGE
# ============================
FROM node:18-alpine AS builder

WORKDIR /app

# Disable ESLint & telemetry
ENV NEXT_DISABLE_ESLINT_PLUGIN=1
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy seluruh project
COPY . .

# Build mode standalone (tidak butuh node_modules)
RUN npm run build

# ============================
# 2. RUNNER STAGE
# ============================
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_DISABLE_ESLINT_PLUGIN=1
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Copy standalone output dari builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./public/_next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
