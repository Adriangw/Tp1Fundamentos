import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { saveAs } from 'file-saver';

import filtro from './filtro';

const FormInputs = () => { 

  const [texto, setTexto] =  useState('');
  const [palabrasAborrar, setPalabrasAborrar] =  useState('');
  const [archivoData, crearArchivo] = useState('')
  const [resultText, setResultText] =  useState('');

  const createFile = () => {
    const blob = new Blob([ archivoData ], { type: 'text/plain;charset=utf-8' });
    saveAs( blob, 'texto.txt' );
  }

  const createFileResult = () => {
    const blob = new Blob([ resultText ], { type: 'text/plain;charset=utf-8' });
    saveAs( blob, 'result.txt' );
  }

  const readFile = ( e:any) => {

    const archivo = e.target.files[0];
    if ( !archivo ) return;

    const archivoAleer = new FileReader();

    archivoAleer.readAsText( archivo );

    archivoAleer.onload = () => {
      console.log( archivoAleer.result );
      if(archivoAleer.result!=null){
        setTexto( archivoAleer.result.toString() );
      } 
    }

    archivoAleer.onerror = () => {
      console.log( archivoAleer.error );
    }

  }

  function getTextoAfiltrar(e:any):void{
    var textoAfiltrar:string = e.target.value;
    crearArchivo(textoAfiltrar);//set para el archivo
    setTexto(textoAfiltrar);//set para el form
  }

  function getPalabras(e:any):void{
    var palabrasAborrar:string = e.target.value;
    setPalabrasAborrar(palabrasAborrar);
  }

  function filtrar():void{
    var resultTexto:string = filtro(texto,palabrasAborrar)
    setResultText(resultTexto);
  }

  return (
    
      <div>

        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Texto</Form.Label>
          <Form.Control
            onChange={getTextoAfiltrar}
            as="textarea"
            placeholder="Ingresar texto"
            style={{ height: '100px' }}
            value={texto}
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="form">
          <Button variant="success" onClick={filtrar} style={{marginRight:5}}>Convertir</Button>
          <Button variant="success" onClick={createFile}>Crear Archivo</Button>
        </Form.Group>

        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Elegir archivo a leer</Form.Label>
          <Form.Control onChange={readFile} type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Palabras a bloquear separadas por coma ','</Form.Label>
          <Form.Control type="text" placeholder="Ingresar texto" onChange={getPalabras}/>
        </Form.Group>  

        <Form.Group className="mb-3" controlId="form">
          <Form.Label>Resultado</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ingresar texto"
            style={{ height: '100px' }}
            value={resultText}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="form">
          <Button variant="success" onClick={createFileResult}>Guardar Resultado</Button>
        </Form.Group>
      
            
      </div>
    
  );
}

export default FormInputs;