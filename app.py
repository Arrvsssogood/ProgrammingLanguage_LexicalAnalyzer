from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    code = request.json.get("code", "")

    with open("temp/input.py", "w", encoding="utf-8") as f:
        f.write(code)

    try:
        result = subprocess.run(
            ["./build/lexer", "temp/input.py"],
            capture_output=True,
            text=True
        )

        output = result.stdout

        tokens = []

        for line in output.splitlines():
            parts = line.split(":", 1)

            if len(parts) == 2:
                tokens.append({
                    "type": parts[0].strip(),
                    "value": parts[1].strip()
                })

        return jsonify(tokens)

    except Exception as e:
        return jsonify({
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)