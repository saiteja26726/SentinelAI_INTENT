import os

class Settings:
    LLM_API_KEY: str = os.getenv("LLM_API_KEY", "")

settings = Settings()
