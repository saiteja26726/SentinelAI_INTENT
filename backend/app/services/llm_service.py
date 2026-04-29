import os

async def generate_response(prompt: str) -> str:
    api_key = os.getenv("LLM_API_KEY")

    if not api_key:
        return f"[STUB RESPONSE] You said: {prompt}"

    return "LLM response will appear here once API key is configured"
