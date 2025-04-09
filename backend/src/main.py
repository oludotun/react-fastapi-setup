import os
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.gzip import GZipMiddleware

BASE_DIR = Path(__file__).resolve().parent
ENV = "production"  # os.getenv("ENV")

app = FastAPI()

# Add middleware for GZip compression to reduce the size of the response body
app.add_middleware(GZipMiddleware)

# Include your API routers first
# app.include_router(main_router, prefix="/api")
# app.include_router(admin_router, prefix="/admin/api")

if ENV == "production":
    # Serve static files
    app.mount(
        "/assets",
        StaticFiles(
            directory=os.path.join(BASE_DIR, "../../frontend/main-app/dist/assets")
        ),
        name="main-assets",
    )
    app.mount(
        "/admin/assets",
        StaticFiles(
            directory=os.path.join(BASE_DIR, "../../frontend/admin-app/dist/assets")
        ),
        name="admin-assets",
    )

    # Catch-all routes for React apps
    @app.get("/admin")
    @app.get("/admin/{full_path:path}")
    async def serve_admin(request: Request):
        # return FileResponse("static/admin_app/index.html")
        return FileResponse(
            os.path.join(BASE_DIR, "../../frontend/admin-app/dist/index.html")
        )

    @app.get("/{full_path:path}")
    async def serve_main(request: Request):
        # return FileResponse("static/main_app/index.html")
        return FileResponse(
            os.path.join(BASE_DIR, "../../frontend/main-app/dist/index.html")
        )
