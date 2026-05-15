%{
#include <stdio.h>
%}

%option noyywrap

DIGIT      [0-9]
ID         [a-zA-Z_][a-zA-Z0-9_]*
STRING     \"([^\\\"]|\\.)*\"

%%

"def"|"if"|"else"|"for"|"while"|"return"|"print" {
    printf("KEYWORD : %s\n", yytext);
}

{ID} {
    printf("IDENTIFIER : %s\n", yytext);
}

{DIGIT}+ {
    printf("INTEGER : %s\n", yytext);
}

{STRING} {
    printf("STRING : %s\n", yytext);
}

"+"|"-"|"*"|"/"|"="|"=="|"!="|"<"|">" {
    printf("OPERATOR : %s\n", yytext);
}

"("|")"|"{"|"}"|":"|";"|"," {
    printf("PUNCTUATION : %s\n", yytext);
}

[ \t\n]+ ;

. {
    printf("INVALID TOKEN : %s\n", yytext);
}

%%

int main(int argc, char *argv[]) {
    if (argc > 1) {
        yyin = fopen(argv[1], "r");
    }

    yylex();

    return 0;
}
