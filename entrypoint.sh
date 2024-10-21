#!/bin/bash

# Démarrer Ollama en arrière-plan
ollama serve &

# Démarrer Flask (ton application Python)
python run_model.py
