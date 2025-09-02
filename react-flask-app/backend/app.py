from flask import Flask, jsonify
from flask_cors import CORS   # <--- add this

app = Flask(__name__)
CORS(app)  # <--- enable CORS

@app.route("/api/hello")
def hello():
    return jsonify(message="Hello from Flask backend!")

@app.route("/api/hello1")
def hello1():
    return jsonify(message="Hello Mayur!")

if __name__ == "__main__":
    app.run(debug=True, port=5000)
