from fastapi import APIRouter
from app.models.request_models import PromptRequest
from app.services.llm_service import generate_response

router = APIRouter()

@router.post("/generate")
async def generate_text(request: PromptRequest):
    result = await generate_response(request.prompt)
    return {"response": result}
