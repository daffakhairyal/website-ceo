# Tahap 1: Build Next.js
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy seluruh project
COPY . .

# Build Next.js dengan skip ESLint
ENV NEXT_DISABLE_ESLINT_PLUGIN=1
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Tahap 2: Menjalankan aplikasi
FROM node:18-alpine AS runner

WORKDIR /app

# Copy hasil build dari tahap sebelumnya
COPY --from=builder /app ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]
