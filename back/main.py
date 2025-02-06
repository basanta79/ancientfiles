from fastapi import FastAPI

from back.up.adapters.http import up_controller

app = FastAPI()

app.include_router(up_controller.router)
