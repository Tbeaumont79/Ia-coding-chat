
FROM python:3.9-slim

RUN echo "Dowloading packages"
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    systemctl \
    sudo \
    && rm -rf /var/lib/apt/lists/*
RUN echo "Dowloading Ollama"
RUN curl -L https://ollama.com/download/ollama-linux-arm64.tgz -o ollama-linux-arm64.tgz
RUN tar -C /usr -xzf ollama-linux-arm64.tgz
RUN rm ollama-linux-arm64.tgz
RUN useradd -r -s /bin/false -U -m -d /usr/share/ollama ollama
RUN usermod -a -G ollama $(whoami)
COPY ollama.service /etc/systemd/system/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN sudo systemctl daemon-reload
RUN sleep 10
RUN sudo systemctl enable ollama

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

ENTRYPOINT [ "/entrypoint.sh" ]
