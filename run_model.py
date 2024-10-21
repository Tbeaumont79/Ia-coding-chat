import subprocess
from flask import Flask, request, jsonify

app = Flask(__name__)

# Fonction pour exécuter la commande Ollama
def run_ollama_model(input_text):
    try:
        # Exécuter la commande `ollama run deepseek-coder-v2` avec l'input texte
        command = ["ollama", "run", "deepseek-coder-v2", input_text]
        result = subprocess.run(command, capture_output=True, text=True)
        
        # Vérifie si la commande s'est exécutée correctement
        if result.returncode == 0:
            print(result.stdout.strip())
            return result.stdout.strip()  # Retourner le résultat du modèle
        else:
            return f"Erreur dans l'exécution : {result.stderr}"
    except Exception as e:
        return f"Exception: {str(e)}"

# Route API pour faire la prédiction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    input_text = data.get('text', '')
    
    if not input_text.startswith("[BOS]"):
        input_text = "[BOS] " + input_text    # Si aucun texte n'est fourni
    if not input_text:
        return jsonify({"error": "Le texte d'entrée est vide"}), 400

    # Appel de la fonction pour exécuter Ollama
    prediction = run_ollama_model(input_text)
    return jsonify({"prediction": prediction})

# Lancer le serveur Flask
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
