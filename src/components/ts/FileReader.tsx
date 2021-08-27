import * as fs from 'fs';
import * as React from "react";
import "reflect-metadata";



class FileReader extends React.Component
{

    public render():any 
    {
        let output = window.location.href;
        console.log("Context.. " + this.context);
        console.log("Path " + window.location.href);
        console.log(this.props);
        console.log(document.location.pathname);
        //output = this.readFile();
        return (<div>{output}</div>);
    }

    public readFile():any
    {
        let output = "no data";
        let url = 'https://raw.githubusercontent.com/SEMOSS/data/master/movies.csv';

        let json = fetch(url)
        .then(response => 
            {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            console.log(response.text);
            return response.text;
          })
          .then(data => {
              return data.toString();
          });
             // no file operations in react stupid
        //output = fs.readFileSync('c:/users/pkapaleeswaran/workspacej3/hello.txt', "utf-8");
        /*
        fs.readFile(
            'c:/users/pkapaleeswaran/workspacej3/hello.txt',
            {encoding: 'utf8'},
            (error, data) => {
              if (error) {
                return error;
              }
              console.info('success reading!', data)
              output = data;
            }
          );
          */
         console.log(json);
          return output;
    }

}


export  default FileReader;
