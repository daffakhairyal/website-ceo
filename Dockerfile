# ========= STAGE 1: Build =========
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependencies only
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Skip lint
ENV NEXT_DISABLE_ESLINT_PLUGIN=1
ENV NEXT_TELEMETRY_DISABLED=1

# Build production
RUN npm run build --no-lint


# ========= STAGE 2: Runner =========
FROM node:18-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Copy only production assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Only install production dependencies
RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
