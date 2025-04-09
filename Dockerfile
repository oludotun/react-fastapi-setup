# Stage 1: Build React apps
FROM node:slim AS frontend-builder

WORKDIR /app

# Copy package.json files first
COPY frontend/main-app/package.json frontend/main-app/package-lock.json ./frontend/main-app/
COPY frontend/admin-app/package.json frontend/admin-app/package-lock.json ./frontend/admin-app/

# Install dependencies
RUN cd frontend/main-app && npm ci --silent
RUN cd frontend/admin-app && npm ci --silent

# Copy remaining frontend source
COPY frontend/main-app/ ./frontend/main-app/
COPY frontend/admin-app/ ./frontend/admin-app/

# Build apps
RUN cd frontend/main-app && npm run build
RUN cd frontend/admin-app && npm run build

# Stage 2: Build FastAPI
FROM python:alpine

WORKDIR /app

# Copy built frontend files
COPY --from=frontend-builder /app/frontend/main-app/dist/ frontend/main-app/dist/
COPY --from=frontend-builder /app/frontend/admin-app/dist/ frontend/admin-app/dist/

# Copy backend files
COPY backend/requirements.txt ./backend/
COPY backend/src/ ./backend/src/ 

# Install Python dependencies
RUN cd backend && pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "backend.src.main:app", "--host", "0.0.0.0", "--port", "8000"]