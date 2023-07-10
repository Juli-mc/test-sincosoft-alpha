#Prueba sencosoft 2023 - CRUD Con datos relacionales

En el siguiente README encontrarás a detalle la solución de la prueba técnica que ha sido asignada la cual es la siguiente.

##Tener en cuenta que este archivo de texto, se irá actualizando a medida que se completen los tres (3) puntos faltantes.

##1.1 Alcance de la aplicación
<br />
• La herramienta debe permitir crear los profesores de la institución.
Información: Identificación, Nombre, Apellido, Edad, Dirección, Teléfono. ✅ COMPLETO


• La herramienta debe permitir crear las asignaturas o materias que ofrece el colegio a los
estudiantes. Información: Código, Nombre ✅ COMPLETO


• La herramienta debe permitir crear los alumnos.


Información: Identificación, Nombre, Apellido, Edad, Dirección, Teléfono ✅ COMPLETO


• La herramienta debe permitir actualizar los datos de los alumnos o profesores en
cualquier momento. ✅ COMPLETO


• La herramienta debe permitir asignar materias a un profesor. Una materia solo puede
asignarse a un profesor. ⚙ EN CONSTUCCIÓN


• La herramienta debe permitir asignar materias a un alumno junto con su calificación final
para el año académico en el rango 0 a 5. A un alumno no se le puede asociar una materia
más de una vez en el mismo año académico. ⚙ EN CONSTRUCCIÓN


• La herramienta debe permitir borrar los alumnos siempre y cuando a estos no se les haya
asignado nunca una materia. ⚙ SE PUEDEN ELIMINAR ALUMNOS, PROFESORES Y MATERIAS.


• La herramienta debe permitir generar un reporte de calificaciones que muestre todos los
estudiantes con la siguiente información:
Año académico, Identificación y Nombre del alumno, Código y nombre de la materia,
identificación y nombre del profesor que dictó esa materia, calificación de la materia para
ese año académico, y finalmente una columna que indique si el estudiante aprobó o no
teniendo en cuenta que se aprueba con mínimo 3.0. ⚙ EN CONSTRUCCIÓN

##1.2 Condiciones técnicas

• El frontend de la aplicación web debe ser creado en React. Puede hacer uso de las librerías
que considere necesario para elaborar la aplicación. Redux, Axios, StyledComponents, etc.

• Para el backend se requiere hacer uso de un API construido en C# usando NET.Framework
o NET.Core. De preferencia usar Entity framework como ORM y acceso a datos.
Si su perfil está más enfocado a solo Frontend, se acepta que en lugar de usar un API la
información se almacena en objetos JSON en el frontend, usando localstorage o el
mecanismo de preferencia siempre y cuando se tenga una buena separación de
responsabilidades.

• Se tendrá en cuenta el uso de buenas prácticas de codificación, la usabilidad de la
aplicación, no tiene que ser un diseño demasiado elaborado mejor algo simple y sencillo
de usar.

• Queremos incentivar al candidato a que de igual manera intente realizar la prueba
inclusive si sus conocimientos son básicos o no alcanza a terminarla, siempre y cuando la
aplicación presentada tenga al menos un mínimo de funcionalidades implementadas que
permitan evidenciar el esfuerzo y conocimientos del candidato.

#1.3 Criterios adicionales que dan puntos

De acuerdo al rol y perfil que se esté buscando se tendrá en cuenta aspectos adicionales
que listamos a continuación, sin embargo el candidato estará en libertad de decidir si los
aplica o no.

o Aplicación web responsive ✅ COMPLETO
https://imgbox.com/racpNMtY

o Uso de un repositorio de git (github o gitlab) que evidencie el uso de ramas y
evolución de la aplicación. (Al enviar la prueba por favor indicar la url del
repositorio) ✅ COMPLETO

o Uso de patrones de software y uso de arquitectura y principios DDD y SOLID.

o Tests automatizados en cualquiera parte de la aplicación Frontend o Backend. ⚙ EN CONTRUCCIÓN
