from flask import Flask, request, jsonify
from flask_cors import CORS  # フロントエンドからのアクセス許可

app = Flask(__name__)
CORS(app)  # 全てのオリジンを許可（開発中はこれでOK）

@app.route("/convert", methods=["POST"])
def convert():
    data = request.get_json()
    markdown_text = data.get("markdown", "")
    
    # （本来ここでMarkdown→HTML変換）
    html = f"<p>受け取ったマークダウン: {markdown_text}</p>"
    
    return jsonify({"html": html})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
