# Red Social: Tejiendo en Azul
### Nuestro primer contacto con las redes sociales 
Las tres integrantes del equipo: [Claudia](https://github.com/claudiaferrusca), [Lore](https://github.com/lore0223), y [Pau-za](https://github.com/Pau-za), conocimos el mundo de las redes sociales mediante [hi5](https://hi5.com/). Era un mundo nuevo por descubrir, y nos gustaba que podíamos personalizar el fondo de nuestro muro, e interactuar con nuestros amigos de la vida real, pero también podíamos conocer a gente nueva con la que compartíamos algunos intereses. 

### Necesidades de nuestros usuarios
La integrante del equipo Paulina, tuvo la oportunidad de darle clases a estudiantes de bachillerato con todo tipo de discapacidad. Y se dio cuenta de que los estudiantes que se tenían algún [Trastorno del Espectro Autista](https://www.who.int/features/qa/85/es/), solían tener dificultades para socializar e interactuar con sus compañeros. Los estudiantes con las características mencionadas querían tener amigos, pero no sabían cómo hacerlo, y algunos de ellos buscaban relacionarse con personas mediante redes sociales como [Facebook](https://www.facebook.com/). Sin embargo, Paulina se dio cuenta de que los estudiantes se ponían en situaciones de riesgo al realizar la práctica de agregar como sus "amigos/as" a personas que no conocían. 

Otra característica que notó Paulina fue que las personas dentro del *Trastorno del Espectro Autista*, es que tienen gustos e intereses muy particulares, y les encanta hablar de ellos todo el tiempo. Sin embargo, eso también los puede hacer vulnerables. Por ejemplo, a su ex-estudiante Juan le encanta coleccionar muñecas [Monster High](http://play.monsterhigh.com/en-us/character/index.html), lo cual lo hizo blanco de burlas de personas poco empáticas y conscientes de la Discapacidad. Y las personas con Discapacidad tienen tanto [derecho a la libertad de expresión, la comunicación, la inclusión, etc.](http://www.diputados.gob.mx/LeyesBiblio/pdf/LGIPD_120718.pdf) como todas nosotras.

Por lo tanto decidimos trabajar en una Red Social en la que las personas dentro del *Espectro Autista* puedan sentirse libres de compartir todo sobre sus intereses personales, y seguros al interactuar con personas que pueden estar viviendo situaciones similares en su día a día.

El nombre de nuestra Red Social es *Tejiendo en Azul*. La palabra "tejiendo" la elegimos porque queremos que sea un sitio en el que las personas dentro del *Espectro* pueda crear _redes_, hacer _comunidad_, y el "azul" lo elegimos como el color base de nuestra red social porque [es el color del *Autismo*](https://www.elcomercio.com/afull/azul-simbolo-autismo-dia-onu.html). Además agregamos como parte de nuestro logo, una pieza de rompecabezas, ya que se utiliza para conscientizar sobre la [complejidad del *Trastorno*](https://autismodiario.org/2017/06/13/autismo-una-pieza-rompecabezas-la-evolucion-humana/). A continuación se presenta nuestro logo:

![Logo-Tejiendo-en-Azul](https://github.com/lore0223/CDMX007-social-network/blob/master/public/images/logo-red-sin-fondo-contraste.png)

### Encuesta

Para conocer si las personas dentro del *Trastorno del Espectro Autista* utilizarían una red social con el enfoque de _Tejiendo en Azul_, decidimos realizar un [cuestionario](https://docs.google.com/forms/d/e/1FAIpQLSfV6EjAU24cl-rAF6pH_tPyC3RHnyCeo0XN_B9iXloXBVAqEw/viewform) a estudiantes con discapacidad de nivel bachillerato de entre 15 y 28 años, de un [Centro de Atención para Estudiantes con Discapacidad, CAED](http://www.sems.gob.mx/es_mx/sems/bnned_bachillerato_no_escolarizado_personas_discapacidad).

Obtuvimos cuatro respuestas de personas dentro del Espectro, y tres respuestas de personas con alguna otra discapacidad. Nos dimos cuenta de que en general a las personas con discapacidad se les dificulta relacionarse a través de redes sociales con otras personas que tengan alguna discapacidad. Todas las personas encuestadas afirmaron que utilizarían una red social con el enfoque que proponemos, ya que además de conocer personas con alguna discapacidad podrían utilizarla para intercambiar información sobre los visto en sus clases, y sobre las tareas, y sobre otros intereses personales.

A continuación se presentan las gráficas con la información que pudimos obtener de nuestros encuestados.

#### Edades de usuarios: 15 - 28 años
![Edades_usuarios](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/ages.PNG)

#### Sexo: la mayoría de los usuarios son de sexo masculino
![Sexo_usuarios](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/sex.PNG)

#### Colores preferidos
![Colores_usuarios](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/favorite-colors.PNG)

#### Relación con redes sociales
![Background_usuarios](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/social-media-background.PNG)

#### Uso que le dan a las redes sociales
![Background_usuarios_2](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/social-media-background-utility.PNG)

#### Frecuencia de uso de las redes sociales
![Background_usuarios_frecuencia_uso](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/frecuency.PNG)

#### Todos los encuestados utilizarían una red social con este enfoque
![Utilidad_red_social_propuesta](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/would-you-use-it.PNG)

#### A los usuarios les gustaría que la red social tuviera:
![Qué_debe_tener](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/respuestas_usuarios/wishes.PNG)


### Principales funcionalidades del producto

Actualmente la página le permite al usuario registrarse con su cuenta de [Facebook](https://www.facebook.com/) y de [Google](https://www.google.com/). 

En cuanto el usuario ingresa a la red social, tiene que llenar un formulario mediante el cual obtenemos su información personal, la cual guarda en nuestra base de datos, alojada en [Firebase](https://firebase.google.com/). 

Una vez que el usuario ha ingresado su datos, la información del usuario se puede ver reflejada en su perfil. Además puede comenzar a realizar publicaciones en el muro general.

El usuario activo pude ver, desde su cuenta que solo sus publicaciones tienen dos botones, uno con un ícono de un bote de basura que le indica que puede eliminar la publicación, y otro que le indica que puede editar su publicación. Hasta este momento, únicamente tiene la función de eliminar publicaciones. Estamos trabajando en la edición de las mismas.

Finalmente el usuario puede cerrar sesión con la seguridad de que su información estará intacta para cuando vuelva a ingresar a la plataforma.

### Pruebas de usabilidad

#### Parte Técnica
En las pruebas de usabilidad nos dimos cuenta de que tenemos que trabajar en algunos detalles de la página, como el registro con correo electrónico. 

#### Experiencia del Usuario
Descubrimos que hay algunas cosas que no entienden los usuarios sobre el flujo de la página. Como que si sale el formulario de registro, deben llenarlo antes de poder navegar por la página. 

Por lo tanto actualmente estamos trabajando en escribir instrucciones muy específicas en cada página de la red social para que los usuarios puedan realizar las tareas que se necesitan de manera sencilla y clara.

![Usability_test](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/UT/WhatsApp%20Image%202019-03-24%20at%205.56.51%20PM.jpeg)

### Cómo asegurarnos de que los usuarios utilicen la red

Puede ser utilizada por los profesores para iformarles sobre las tareas, o compartirles material para estudiar para sus exámenes.


## Historias de usuario

* Yo, como usuario, quiero poder registrarme en la página "Tejiendo en Azul" para poder comenzar a interactuar con otras personas dentro del Espectro Autista.

* Yo, como usuario, quiero poder llenar un formulario de registro para que se guarde mi información personal en una base de datos.

* Yo, como usuario, quiero poder ver reflejada mi información personal en la página de mi perfil para que mis amigos puedan observarla (en el futuro).

* Yo, como usuario, quiero poder hacer publicaciones para poder verlas reflejadas en un muro general, junto a las publicaciones de los demás usuarios de la red social.

* Yo, como usuario, quiero poder eliminar mis propias publicaciones siempre que lo desee para poder tener mejor control de mi actividad en la red social.


## Prototipos: Tejiendo en Azul

A continuación presentamos nuestro prototipo de alta fidelidad:

![loader-HFP](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/HFP/loader.PNG)

![login-HFP](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/HFP/login.PNG)

![register-HFP](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/HFP/register.PNG)

![wall-HFP](https://github.com/Pau-za/CDMX007-social-network/blob/master/public/images/HFP/wall.PNG)


----------------------------------------------

# Creando una Red Social

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos y/u odiamos, y muchos no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## Introducción

Una emprendedora nos ha encargado crear una red social. No nos da mucho detalle
sobre qué tipo de red social quiere, sólo nos dice que creemos la mejor que
podamos, y que luego la convenzamos de lanzarla al mercado. Nos da ciertos temas
en los que le gustaría invertir:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

## Objetivos de Aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
 (con más de una vista / página) en la que podamos **leer y escribir datos.**

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Entender las necesidades de los usuarios para los que crearás el producto y
  que ayudarás a resolver.
* Poner en juego tu creatividad para generar ideas que lleven a una solución
  original y valiosa del problema.
* Contar con el apoyo de tus compañeras, debes trabajar en equipo buscando
  _feedback_ constante.
* Definir como crear la estructura de tu propia data y de qué forma mostrarla en
  el producto.

## Consideraciones generales

Este proyecto se debe "resolver" en tríos.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6),
HTML y CSS :smiley:. Para este proyecto no está permitido utilizar
frameworks o librerías de JS.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### General

En este proyecto, tú junto a tus compañeras de equipo deberán definir los
_tests_ que consideren necesarios; puedes guiarte de los proyectos
anteriores. Igualmente el proyecto cuenta con una estructura de carpetas
y archivos ya definida pero pueden modificarla de acuerdo a como desean
trabajar la estructura de su proyecto :smiley:.

### Definición del producto

En el `README.md` colocar cómo conociste el mercado de las redes sociales, cómo
descubriste las necesidades de los usuarios, cómo llegaste  la definición final
de tu producto. Si tienes fotos de entrevistas, cuestionarios y/o sketches
(bocetos) compártelos. Es importante que detalles:

* Cuáles son los elementos básicos que tiene una red social
* Quiénes son los principales usuarios de producto
* Cómo descubriste las necesidades de los usuarios
* Qué problema resuelve el producto para estos usuarios
* Cuáles son los objetivos de estos usuarios en relación con el producto
* Cuáles son las principales funcionalidades del producto y cuál es su prioridad
* Cómo verificaste que el producto les está resolviendo sus problemas
* Cómo te asegurarás que estos usuarios usen este producto

Para poder llegar a estas definiciones te recomendamos ver: entrevistas con
usuarios y tests de usabilidad.

### Historias de usuario

Una vez que entiendas las necesidades de tu usuario, escribe las Historias de
Usuario que representen todo lo que el usuario necesita hacer/ver. Asegúrate
de incluir una definición de terminado (definition o done) para cada una.

### Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu producto y
con eso deberás diseñar la Interfaz de Usuario (UI por sus siglas en inglés) de
esta red social que siga este flujo.
Este diseño debe representar la solución que se implementará finalmente en
código.

### Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.). Te
sugerimos seguir la técnica de `mobile first` (más detalles sobre esta técnica
al final).

### Pruebas unitarias (unit tests)

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_, y _branches_.

### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

La idea para este producto es que el producto a desarrollar siga los
lineamientos propuestos en el diseño de la interfaz de usuario. Asegúrate a lo
largo de la implementación que los elementos propuestos están siendo
implementados correctamente.

La interfaz debe permitir lo siguiente:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Autenticación con Facebook y/o Google y/o Email.
* Validaciones:
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido privado.
* Perspectiva de interfaz:

  ![Login](https://user-images.githubusercontent.com/9284690/40994765-c3cf9602-68c2-11e8-89ac-8254859b5ebb.png)

#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en el input.
* Comportamiento:
  - Poder publicar un post.
  - Poder poner like a una publicación.
  - Llevar un conteo de los likes.
  - Poder eliminar un post específico.
  - Poder filtrar los posts sólo para mis amigos y para todo público.
  - Pedir confirmación antes de eliminar un post.
  - Al darle click en el botón editar, debe cambiar el texto por un input que
    permita editar el texto y cambiar el link por guardar.
  - Al darle guardar debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados
* Perspectiva de interfaz:

  ![Muro](https://user-images.githubusercontent.com/9284690/40994768-c52c3442-68c2-11e8-99a5-9e127e700dee.png)

#### Otras consideraciones

* La aplicación no debe dejar hacer publicaciones vacías de ningun tipo.
* El usuario debe poder agregar, editar y eliminar contenido de la red
  social.
* El usuario debe poder definir la privacidad de lo que pública.
* Al editar contenido, el contenido editado se verá automáticamente,
  inmediatamente después de guardar.
* Al recargar la página se deben poder ver los contenidos editados.

Personaliza estas guías con los colores y/o tipografías que creas convenientes.
Recuerda que al hacer estas adaptaciones deberás seguir los fundamentos de
_visual design_ como contraste, alineación, jerarquía, entre otros.

### Hacker edition

* Crear posts con imágenes
* Permite agregar amigos.
* Permite eliminar amigos.
* Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* Permite comentar o responder una publicación.
* Permite editar perfil.
* Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.

### Consideraciones técnicas

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con multiples vistas para esto tu aplicacion debera ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [Firebase](https://firebase.google.com/).

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### Consideraciones UX

Desde el punto de vista de UX, deberás:

* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de testing con el producto en HTML.

### Consideraciones Ágil

Esta vez te recomendamos que los ítems de tu Backlog de Producto estén escritos
como [Historias de Usuario](http://jmbeas.es/guias/historias-de-usuario/).
Esta es una técnica muy simple que te ayudará a:

* Organizar el trabajo en función del valor que le aporta al usuario.
* Poder publicar partes completas y utilizables del producto al final del
  sprint.
* Que el equipo trabaje de manera multidisciplinaria de manera natural.

### Habilidades Blandas

Trabajar en equipo es un gran desafío porque coordinarse no es una tarea fácil,
y es más difícil entre tres que entre dos. Trata que tu equipo te entienda,
facilitando siempre el diálogo en dentro del squad.

Planifica enumerando las tareas y distribuyéndolas, considerando los
recursos, las habilidades, y el tiempo del que dispones. Planifica de manera
que te permita avanzar en los distintos aspectos del proyecto de forma paralela,
teniendo un tablero donde puedas ver en qué está trabajando cada compañera.

Entrega tu trabajo a tu equipo a tiempo y colabora con el objetivo
final del proyecto, lo que puede implicar ayudar a los demás miembros del equipo
con sus pendientes, con el fin de entregar una red social de calidad.

**La división del trabajo debe permitir que todo el equipo
practique el aprendizaje de todas las habilidades esperadas. No se dividan el
trabajo como en una fábrica**

Para conocer a los usuario para eso debes salir e investigar. Tienes que
ejercitar tus habilidades de comunicación y toma de decisiones.
Existen infinitas opciones, depende de ti el camino que escoges.
Para que tu red social responda a las necesidades de sus usuarios, probablemente
deberás adquirir nuevos conocimientos para implementar sus preferencias.

Esta vez, haz _code review_(feedback de tu código) con **otro squad**, para
que puedas mejorar el producto. Mientras más feedback reciban, mejor.

Esperamos que valores y escuches los comentarios y críticas de los demás,
rescatando aquellos aspectos que sirven para tu crecimiento. Entrega siempre
tu opinión de manera constructiva, fundamentada y coherente, con el propósito
de ayudar a tus compañeras. Estos comentarios los debes hacer de manera honesta,
empática e inmediata.

Finalmente, deberás presentar el proyecto que creaste, al usuario que escogiste
y las necesidades que lograste resolver en este proceso. Como siempre, sabemos
que presentar puede ser una tarea difícil, esperamos que tengas capacidad de
síntesis y articules tus ideas con claridad para que logres mostrar tu trabajo
y que los demás lo comprendan.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad |  |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 
| Nomenclatura/semántica | 
| Funciones/modularidad | 
| Estructuras de datos | 
| Tests | 
| **HTML** | |
| Validación | 
| Estilo | 
| Semántica | 
| SEO | N/A
| **CSS** | |
| DRY | 
| Responsive | 
| **SCM** | |
| Git | 
| GitHub | 
| **CS** | 
| Lógica | 
| Arquitectura | 

### UX

| Habilidad | |
|-----------|----------------|
| User Centricity | 
| Visual Desing | 

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | |
|-----------|----------------|
| Planificación y organización | 
| Autoaprendizaje | 
| Solución de Problemas | 
| Dar y recibir feedback | 
| Adaptabilidad | 
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 
| Comunicación eficaz | 
| Presentaciones | 

***

## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***

## Checklist (no olvides llenarla)

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [x] Definición del producto
* [x] Resumen de entrevistas con usuarios.
* [x] Link/screenshots prototipo de baja fidelidad.
* [x] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [x] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [x] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [x] Muestra _muro_, o lista de publicaciones.
* [x] Permite hacer nuevas publicaciones.
* [x] Permite eliminar publicaciones.
* [x] Pide confirmación antes de borrar publicación.
* [ ] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [ ] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

### Hacker Edition

* [ ] Permite agregar amigos.
* [ ] Permite eliminar amigos.
* [ ] Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* [ ] Permite comentar o responder una publicación.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.
