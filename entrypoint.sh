#!/bin/bash

echo "Starting Ollama server..."
ollama serve &

sleep 5

echo "Ollama started, now running deepseek-coder-v2 model..."
if pgrep -x "ollama" > /dev/null
then
    until ollama run deepseek-coder-v2; do
        sleep 1
        echo "deepseek-coder-v2 model not ready, waiting..."
    done
else
    echo "Ollama n'a pas démarré correctement."
    exit 1
fi

echo "Stopping deepseek-coder-v2 model..."
if ollama ls | grep "deepseek-coder-v2" > /dev/null
then
    pkill -f "deepseek-coder-v2"
    echo "deepseek-coder-v2 model stopped."

else
    echo "deepseek-coder-v2 n'a pas été exécuté correctement."
    exit 1
fi


python run_model.py