FROM python:3.11-slim

RUN apt-get update && apt-get install -y \
    flex \
    gcc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

RUN flex -o build/lex.yy.c lexer.l

RUN gcc build/lex.yy.c -o build/lexer

EXPOSE 5000

CMD ["python", "app.py"]