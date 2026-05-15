# Flex Lexical Analyzer Documentation

## Project Overview

This project is a web-based lexical analyzer created using Flex (Lex), Flask, and a simple frontend interface. The purpose of the project is to demonstrate how lexical analysis works in a compiler by identifying and classifying tokens from source code.

The application accepts code input from the user and processes it into different token types such as keywords, identifiers, operators, numbers, strings, and punctuation symbols.

---

# Features

- Lexical analysis using Flex
- Web-based code editor
- Token classification
- File upload support
- Clear and reset functions
- Sidebar navigation
- Scrollable token output
- Responsive user interface

---

# Tech Stack

## Backend

- Python
- Flask
- Flex (Lex)
- GCC Compiler
- Docker

## Frontend

- HTML5
- CSS3
- JavaScript

---

# Requirements

Before running the project, make sure the following are installed on your system:

- Docker Desktop
- Docker Compose
- Python 3.x (optional if using Docker)
- GCC Compiler
- Flex

You can download Docker Desktop from:

https://www.docker.com/products/docker-desktop/

---

# Project Structure

```bash
project/
│
├── lexer.l
├── app.py
├── Dockerfile
├── docker-compose.yml
│
├── build/
│   ├── lex.yy.c
│   └── lexer.exe
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

# Setup Instructions

# Option 1: Run Using Docker (Recommended)

## 1. Build the Docker Container

```bash
docker compose build
```

---

## 2. Start the Application Services

```bash
docker compose up
```

---

## Alternative Command

You can also build and run everything in one command:

```bash
docker compose up --build -d
```

---

## 3. Open the Application

Open your browser and go to:

```text
http://localhost:5000
```

---

# Option 2: Run Manually Without Docker

## 1. Install Dependencies

Install Flask using pip:

```bash
pip install flask
```

Check if Flex and GCC are installed:

```bash
flex --version
gcc --version
```

---

## 2. Compile the Lexer

Generate the lexer source file:

```bash
flex lexer.l
```

Compile the generated C file:

```bash
gcc lex.yy.c -o lexer
```

---

## 3. Run the Flask Application

```bash
python app.py
```

---

## 4. Open in Browser

```text
http://127.0.0.1:5000
```

---

# Sample Input

```c
a = 10
```

---

# Sample Output

```text
IDENTIFIER: a
OPERATOR: =
NUMBER: 10
```

---

# How the System Works

1. The user enters or uploads source code through the interface.
2. Flask receives the input from the frontend.
3. The source code is passed to the Flex lexer.
4. Flex scans the code and identifies tokens.
5. The generated tokens are sent back to Flask.
6. The frontend displays the tokens in a table format.

---

# Known Limitations

- Only performs lexical analysis
- No syntax checking or parsing
- Limited token support
- No error recovery mechanism
- Does not support a complete programming language grammar

---

# Challenges Encountered

During the development of the project, several issues were encountered:

- Flex rule parsing errors
- Docker build configuration issues
- File upload reset problem
- UI scrolling issues for large outputs
- Token overlap inside the output table

These problems were resolved by simplifying lexer rules, improving frontend rendering logic, and optimizing the UI layout.

---

# Future Improvements
- One of the improvements I am thinking about is having to export the file or tokens into JSON or CSV. In addition, sytax analysis would also be a fire improvement.

---

# Conclusion

The project successfully demonstrates the lexical analysis phase of a compiler using Flex integrated into a web-based application. It provides a simple and interactive environment for understanding how tokens are generated from source code.

The integration of Flask, Flex, Docker, and a modern frontend interface also helped improve the usability and presentation of the system.

---

# Author

Developed as a requirement for the Programming Languages / Compiler Design course.