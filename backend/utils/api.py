from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import sys
from dotenv import load_dotenv

load_dotenv()
library = os.getenv("LIBRARY")
print(library)
sys.path.append(library)

from src import Profile

profile = Profile()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/getUser')
async def get_data():
    return {'user':profile.user.login}

@app.get('/getRepositories')
async def get_data():
    sorted_data = {k: v for k, v in sorted(profile.traffic.items(), key=lambda item: item[1]['uniques'], reverse=True)}
    return {'repositories':sorted_data}
