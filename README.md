# ¿Cómo iniciar el Repositorio del Parcial?

Al tener el repositorio descargado y abierto en VSCode recomiendo hacer el siguiente ajuste para mirar el componente deseado en el archivo App.js

```
Quitar el "{/*" y "*/}" en el componente que se desee
```

```
function App() {
   return (
   <Container fluid>
     *<Login />
     {/*<Home />*/}
     {/*<Perfil />*/}
   </Container>
   );
}
```

Después de tener el componente configurado en el archivo recomiendo encarecidamente ejecutar estos 3 comandos en el siguiente orden

### 1 - `npm install`

### 2 - `npm install react-bootstrap bootstrap`

### 3 - `npm start`

Al ejecutar esos 3 comandos se abrirá una pestaña en su navegador para apreciar el resultado del Parcial
[http://localhost:3000](http://localhost:3000)

El desarrollo de este Parcial se basó en el PreParcial y los retos del Quiz Sorpresa lo cual infuyó y ayudó en realizar este parcial

Fotos del Preparcial y Quiz Sorpresa como ejemplo:

![Bonito](https://github.com/user-attachments/assets/debf0d9a-703d-42aa-9074-ace616086d9b)

![Web](https://github.com/user-attachments/assets/2f4cf4b6-2eb9-4666-acd1-edea683fad95)

![WEB2](https://github.com/user-attachments/assets/7ed5e7d8-c414-434c-8d39-898720424495)

Esto influyó en poner los elementos de forma organizada y pulcra en el parcial

![WEB4](https://github.com/user-attachments/assets/cf091227-87b5-48d1-8a7d-2b969198064e)

Hecho por: Juan Manuel Ramírez Tamayo - 202013256
