from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="LLM App")

app.include_router(router)
