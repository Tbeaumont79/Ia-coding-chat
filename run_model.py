import subprocess
from flask import Flask, request, jsonify

app = Flask(__name__)

def clean_bos_token(input_text):
    # Si le texte commence par un token BOS, le retirer
    bos_token = "<BOS>"  # Adapte ce token au format utilisé par Ollama
    if input_text.startswith(bos_token):
        input_text = input_text[len(bos_token):].strip()
    return input_text

# Fonction pour exécuter le modèle Ollama via stdin
def run_ollama_model(input_text):
    try:
        # Construire la commande pour exécuter le modèle
        command = ["ollama", "run", "deepseek-coder-v2"]
        input_text = clean_bos_token(input_text)
        # Exécuter la commande et envoyer le texte via stdin
        process = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        stdout, stderr = process.communicate(input=input_text)

        # Vérifie si la commande s'est exécutée correctement
        if process.returncode == 0:
            print(stdout.strip())
            return stdout.strip()  # Retourner le résultat du modèle
        else:
            return f"Erreur dans l'exécution : {stderr}"
    except Exception as e:
        return f"Exception: {str(e)}"

# Route API pour faire la prédiction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_text = data.get('text', '')

    # Si aucun texte n'est fourni
    if not input_text:
        return jsonify({"error": "Le texte d'entrée est vide"}), 400

    # Appel de la fonction pour exécuter Ollama
    prediction = run_ollama_model(input_text)
    return jsonify({"prediction": prediction})

# Lancer le serveur Flask
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
