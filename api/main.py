from flask import Flask, request
import requests
import os
from dotenv import load_dotenv

load_dotenv("./.env.local")

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.getenv("UNSPLASH_KEY", "")

if not UNSPLASH_KEY:
    raise EnvironmentError("UNSPLASH_KEY is not set")

app = Flask(__name__)


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_KEY}"
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    data = response.json()
    print(data)
    return data

if __name__ == "__main__":
    app.run(debug=True)
