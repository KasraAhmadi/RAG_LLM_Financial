# Financial Trivia Server

This is a simple Flask server that handles the leaderboard functionality for the Youth Financial Trivia game.

## Setup

1. Make sure you have Python 3.7+ installed
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Server

To start the server, run:
```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### Get Leaderboard
- **GET** `/api/leaderboard`
- Returns the complete leaderboard

### Add Score
- **POST** `/api/leaderboard`
- Body:
  ```json
  {
    "id": "user123",
    "category": "credit",
    "score": 85,
    "timestamp": "2023-04-12T12:00:00Z"
  }
  ```

### Get Category Leaderboard
- **GET** `/api/leaderboard/<category>`
- Returns leaderboard entries for a specific category

## Data Storage

The leaderboard data is stored in `leaderboard.json` in the server directory. The file is automatically created when the first score is added.

## CORS

Cross-Origin Resource Sharing (CORS) is enabled for all routes, allowing the frontend to make requests from any origin. 