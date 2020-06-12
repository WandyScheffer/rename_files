const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

var i = 1;
var dir_path = readline.question("Informe o caminho dos arquivos a serem renomeados: ");
var new_name = readline.question("Informe o padrão de novo nome: "); 
var extension = readline.question("Informe a extensão padrão dos arquivos (com ponto por favor): ");

const renaming = (name) => {
    fs.rename(path.join(dir_path, name), path.join(dir_path, `${new_name}${i}${extension}`), err => {
        if (err) {
            console.log(err);
            return
        }   
    });
    console.log("Arquivos renomeados até agora: " + i);
    i++
}

const reading_dir = (name) => {
    fs.readdir(name, (error, data) => {
        if (error) {
            console.log("Erro: ", error);
            return
        }
        data.map((iten) => {
            renaming(iten);
        });
        
    });
}

reading_dir(dir_path);