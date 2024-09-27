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

Hecho por: Juan Manuel Ramírez Tamayo - 202013256
