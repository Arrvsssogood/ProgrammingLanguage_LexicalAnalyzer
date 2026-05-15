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

## Frontend

- HTML5
- CSS3
- JavaScript

---

# Project Structure

```bash
project/
│
├── lexer.l
├── app.py
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

## 3. Run the Application

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
int a = 10;
```

---

# Sample Output

```text
KEYWORD: int
IDENTIFIER: a
OPERATOR: =
NUMBER: 10
PUNCTUATION: ;
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

# Future Improvements

- Add syntax analysis
- Export tokens as JSON or CSV
- Add real-time token highlighting
- Improve compiler visualization
- Add error handling and reporting

---

# Author

Developed as a requirement for the Programming Languages / Compiler Design course.