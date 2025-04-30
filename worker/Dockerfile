# //an automated function which changes the status of of an order from pending to completed
# //worker is used as an automation script for Docker
# //worker: black guy of the group
FROM python:3.9-slim

WORKDIR /app

COPY worker.py .
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "worker.py"]
