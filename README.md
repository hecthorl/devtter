## Devtter App

### Lo que tiene

-  Actualización en tiempo real
-  Base de datos para devits y usuarios
-  Autentificación de usuarios con Github
-  Páginas: inicio, home, status y profile
-  Enrutamiento superficial con Wouter

### Lo que quiero que tenga

-  Responsive al 100%
-  El botón like de Twitter, dificil
-  Página de error 404 personalizada
-  Temas configurables
-  Gestor de estado perfecto (xD)
-  Funcionalidad "likes" y "coments" como servicio

```js
/**
 * Problema: El condicional: if (!gifs.length) No le permite recojer las referencias de los "divs"
 * por tanto nunca entra en la condicional: if (visorRef.current). Para ejecutar: observer.observe(visorRef.current)
 * Solución: Ni pta idea [actualizar la referencia a la par del condicional] => Cuando el condicional pase a true, actualizar la referencia
 * Solución: Ni pta idea [mover el condicional dentro del cuerpo del componente]
 * Solución: Ni pta idea [recibir las referencias desde fuera del componente] => Recibir una referencia "padre" para buscar a travez de los nodos los que necesito
 * Solución: Ni pta idea [extraer las referencias usando el dom] => document.querySelector(#rootRef & #visorRef)
 */
// if (!gifs.length) return <Box>Loading</Box>
```
