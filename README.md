**Unified Deployment of React and FastAPI: Serving Multiple SPAs with Efficient Routing**

---

**Introduction**  
In modern web development, combining a React frontend with a FastAPI backend offers a powerful full-stack solution for applications behind login page. But what happens when you need **two separate React applications** (e.g., a user-facing app and an admin panel in an MVP) to coexist with a single backend, all while avoiding CORS configurations and React’s notorious 404-on-refresh issue? In this article, I’ll walk through an architecture that solves these challenges using Vite, Docker, and a clever FastAPI catch-all routing strategy.

---

### **The Problem**

1. **Multiple SPAs, One Backend**: Serving two or more React apps (main and admin) from a single FastAPI instance.
2. **Routing Conflicts**: Ensuring FastAPI handles `/api` routes while delegating non-API routes to React.
3. **Browser Refresh 404s**: Preventing errors when users refresh pages handled by React Router.
4. **CORS Avoidance**: Keeping frontend/backend communication seamless without cross-origin configurations.

---

### **The Solution**

A unified deployment where:

-   FastAPI serves static assets for both React apps.
-   API routes (`/api`, `/admin/api`) are prioritized.
-   Catch-all routes delegate unmatched paths to React.
-   Docker bundles everything into a single containerized service.

---

### **Architecture Breakdown**

#### 1. **Project Structure**

```
fast-react/
├── backend/          # FastAPI code
├── frontend/         # Two React apps (main-app, admin-app)
├── Dockerfile        # Multi-stage build
└── docker-compose.yml
```

Key insight: **Separation of frontend apps** (`main-app`, `admin-app`) allows independent development while sharing a backend.

---

#### 2. **Docker Multi-Stage Build**

The `Dockerfile` optimizes image size and dependencies:

-   **Stage 1**: Build React apps with `node:slim`.
-   **Stage 2**: Copy built assets into a lightweight `python:alpine` image and install FastAPI.

```dockerfile
# Build React apps
FROM node:slim AS frontend-builder
WORKDIR /app
COPY frontend/main-app/package.json ./frontend/main-app/
RUN npm ci --prefix frontend/main-app
...
```

---

#### 3. **FastAPI Catch-All Routing**

The secret sauce lies in `backend/src/main.py`:

-   **Priority to API routes**: Define API endpoints first.
-   **Serve static assets**: Mount React’s compiled `assets` directories.
-   **Catch-all routes**: Return React’s `index.html` for non-API paths.

```python
# Serve main React app
@app.get("/{full_path:path}")
async def serve_main(request: Request):
    return FileResponse("frontend/main-app/dist/index.html")

# Serve admin React app
@app.get("/admin/{full_path:path}")
async def serve_admin(request: Request):
    return FileResponse("frontend/admin-app/dist/index.html")
```

This ensures:

-   `/api` → FastAPI
-   `/admin/api` → FastAPI
-   `/admin/*` → Admin React app
-   `/*` → Main React app

---

#### 4. **Vite Configuration**

Each React app uses a custom `base` path to align with FastAPI’s routing:

-   **Main app** (`vite.config.ts`):
    ```js
    base: "/",  // Served at root
    proxy: { "/api": "http://localhost:8000" }
    ```
-   **Admin app** (`vite.config.ts`):
    ```js
    base: "/admin/",  // All assets prefixed with /admin/
    proxy: { "/admin/api": "http://localhost:8000" }
    ```
    This ensures assets load correctly even when nested under `/admin`.

---

### **Why This Works**

-   **No CORS**: Frontend/backend are served from the same origin.
-   **Refresh Resilience**: FastAPI always returns `index.html` for non-API routes.
-   **Scalability**: Adding more SPAs (e.g., `/dashboard`) follows the same pattern.

---

### **Considerations and Trade-offs**

1. **Build Coupling**: Frontend and backend are deployed together. For larger teams, consider decoupling builds.
2. **Static Asset Paths**: Absolute paths in React (e.g., images in the public directory) cannot be accessed, so all images goes to the `src/assets` directories.
3. **Server-Side Rendering (SSR)**: This setup assumes SPAs; SSR would require additional handling.

---

**Final Thoughts**  
This architecture simplifies deployment by unifying frontend and backend into a single service. By leveraging FastAPI’s routing priorities and Vite’s build flexibility, we achieve a clean separation of concerns without sacrificing usability. For small-to-medium projects, it’s an elegant solution but you should always evaluate scalability needs as your application grows.

**Deploy with confidence!** 🚀
