# Étape 1 : Utilise une image Python compatible ARM
# Ici, nous utilisons une image Python 3.9 slim, qui est légère et adaptée à ARM
FROM python:3.9-slim

# Étape 2 : Installer des dépendances système (si nécessaire)
# build-essential est utilisé pour compiler certaines dépendances Python
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    systemctl \
    sudo \
    && rm -rf /var/lib/apt/lists/*
RUN curl -L https://ollama.com/download/ollama-linux-arm64.tgz -o ollama-linux-arm64.tgz
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN tar -C /usr -xzf ollama-linux-arm64.tgz
RUN rm ollama-linux-arm64.tgz
RUN useradd -r -s /bin/false -U -m -d /usr/share/ollama ollama
RUN usermod -a -G ollama $(whoami)
COPY ollama.service /etc/systemd/system/

RUN sudo systemctl daemon-reload
RUN sudo systemctl enable ollama
WORKDIR /app

# Étape 4 : Copier les fichiers de ton projet dans le conteneur
# Le point "." fait référence au répertoire local, donc Docker copie tout le contenu dans le répertoire /app
COPY . .

# Étape 5 : Installer les bibliothèques Python
# Utilise le fichier requirements.txt pour installer toutes les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Étape 6 : Exposer un port (facultatif)
# Si tu souhaites rendre ton application accessible via un port spécifique
EXPOSE 8080

# Étape 7 : Définir la commande à exécuter au démarrage du conteneur
# Ici, on suppose que ton script Python mon_script_pour_deepseek.py contient l’instruction pour lancer le modèle

ENTRYPOINT ["/entrypoint.sh"]
