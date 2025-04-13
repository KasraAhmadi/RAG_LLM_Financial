from flask import abort, Flask, request, jsonify
from flask_cors import CORS
import json
import os
from pyngrok import ngrok
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# public_url = ngrok.connect(5000)
# print(" * ngrok tunnel \"{}\" -> \"http://127.0.0.1:5000\"".format(public_url))

# In-memory storage for leaderboard data
leaderboard = []

# File path for persistent storage
LEADERBOARD_FILE = 'leaderboard.json'
USERS = {}
def load_leaderboard():
    global leaderboard
    if os.path.exists(LEADERBOARD_FILE):
        with open(LEADERBOARD_FILE, 'r') as f:
            leaderboard = json.load(f)

def save_leaderboard():
    with open(LEADERBOARD_FILE, 'w') as f:
        json.dump(leaderboard, f)

# Load existing leaderboard data on startup
load_leaderboard()


@app.route('/api/leaderboard', methods=['POST'])
def add_score():
    """Add a new score to the leaderboard"""
    data = request.json
    
    # Validate required fields
    if not all(key in data for key in ['id', 'category', 'score']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    # Add timestamp
    data['timestamp'] = request.json.get('timestamp', '')
    
    # Add to leaderboard
    leaderboard.append(data)
    
    # Sort leaderboard by score (descending)
    leaderboard.sort(key=lambda x: x['score'], reverse=True)
    
    
    # Save to file
    save_leaderboard()
    
    return jsonify({'message': 'Score added successfully'}), 201

@app.route('/api/leaderboard/<category>', methods=['GET'])
def get_category_leaderboard(category):
    """Get leaderboard for a specific category"""
    category_scores = [score for score in leaderboard if score['category'] == category]
    return jsonify(category_scores)

@app.route('/api/send_score/<user_id>/<category>/<score>', methods=['GET'])
def send_score(user_id,category,score):
    if(user_id not in USERS.keys()):
        USERS[user_id] = {}
    if(category not in USERS[user_id].keys()):
        USERS[user_id][category] = None
    USERS[user_id][category] = score
    print(USERS)
    return jsonify({'message': 'User Created'}), 200

@app.route('/api/get_leaderboard/', methods=['GET'])
def get_leaderboard():
    entries = []
    for user_id, categories in USERS.items():
        for category, value in categories.items():
            # Convert the string value to an integer for proper numeric comparison.
            score = int(value)
            entries.append((user_id, category, score))

    # Step 2: Sort the list in descending order based on the score.
    sorted_entries = sorted(entries, key=lambda item: item[2], reverse=True)

    # Step 3: Get the top 100 entries.
    top_100 = sorted_entries[:100]

    # Optional: Convert the top 100 entries into a JSON-friendly structure.
    # For example, you might want to represent each entry as a dictionary.
    top_100_dict = [
        {"user_id": user_id, "category": category, "score": score}
        for user_id, category, score in top_100
    ]
    return jsonify(top_100_dict), 200
    

if __name__ == '__main__':
    app.run(debug=True, port=5000) 