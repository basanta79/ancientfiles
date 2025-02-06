from fastapi import APIRouter
from fastapi import status

router = APIRouter()

@router.get('/up', status_code=status.HTTP_200_OK)
def up_status():
    return {
        'status': 'up'
    }