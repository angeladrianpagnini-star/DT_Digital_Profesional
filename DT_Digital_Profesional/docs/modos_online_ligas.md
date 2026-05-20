# DT Digital - Modos Online y Ligas

## Modos de juego

### 1 vs 1 local

Dos jugadores usan el mismo dispositivo.

Debe existir modo oculto para decisiones secretas:

- cartas de disputa,
- cartas de remate,
- cartas del arquero,
- decisiones que no debe ver el rival.

Este modo sirve para prototipo, pero no es ideal para competencia porque el rival puede ver la eleccion.

Solucion local en un solo dispositivo:

- jugador 1 elige carta,
- el sistema tapa la carta,
- se muestra pantalla de "pasar dispositivo",
- jugador 2 elige su carta,
- ambas cartas se revelan juntas.

### 1 vs Maquina

Un jugador juega contra IA.

Dificultades:

- Facil: IA prioriza acciones basicas y puede cometer errores tacticos.
- Medio: IA usa pase, disputa y remate con criterio.
- Dificil: IA evalua riesgo, cartas especiales, posicionamiento y bloqueo de rivales.

La IA debe jugar con las mismas reglas que el usuario.

Primera IA del prototipo:

- mueve hacia el arco rival,
- pasa cuando conviene segun dificultad,
- remata si llega al arco,
- elige cartas al azar para resolver remate/arquero,
- no puede usar movimientos o cartas ilegales.

### 1 vs 1 por telefonos

Cada jugador usa su telefono o dispositivo.

Objetivo:

- sincronizar la misma partida,
- que cada jugador vea sus propias cartas,
- que las elecciones secretas no sean visibles para el rival,
- revelar cartas solo cuando ambos hayan elegido.

Necesita backend en tiempo real o WebSocket.

Flujo sugerido:

1. Un jugador crea partida.
2. El sistema genera enlace o codigo.
3. El rival entra desde su telefono.
4. Ambos quedan sincronizados.
5. El tablero compartido se actualiza en tiempo real.
6. Las cartas privadas se ven solo en el dispositivo propio.

### Online por enlace

Permite jugar con alguien remoto.

Debe incluir:

- crear partida,
- invitar por enlace,
- unirse por codigo,
- reconexion,
- chat o mensajes rapidos opcional,
- validacion de reglas desde servidor para evitar trampas.

## Liga

La liga es un modo competitivo organizado.

### Administrador de liga

Un usuario administrador puede:

- crear liga,
- definir nombre,
- definir cantidad de equipos,
- invitar participantes,
- cerrar inscripcion,
- iniciar torneo,
- cargar o validar resultados,
- avanzar jornadas,
- pausar o finalizar competencia.

### Registro de equipos

Cada participante registra:

- nombre de equipo,
- usuario responsable,
- escudo o identidad visual,
- indumentaria,
- datos publicos del equipo.

### Fixture

Cuando el administrador cierra la inscripcion:

- el sistema genera fixture,
- asigna rivales por jornada,
- define local/visitante,
- muestra calendario.

### Carga de resultados

Al terminar un partido:

- se guarda resultado,
- se actualiza tabla,
- se registran goles,
- se registran puntos,
- se publica resumen de jornada.

Opcional:

- validacion por ambos jugadores,
- validacion del administrador,
- resultado automatico si el partido se jugo online dentro de la plataforma.

### Tabla de competencia

Debe mostrar:

- posicion,
- equipo,
- partidos jugados,
- ganados,
- empatados,
- perdidos,
- goles a favor,
- goles en contra,
- diferencia de gol,
- puntos.

### Jornada

Cada jornada debe mostrar:

- partidos programados,
- resultados cargados,
- equipos que sumaron puntos,
- tabla actualizada,
- proxima fecha.

## Arquitectura necesaria

Para soportar online y ligas se necesita backend.

Opciones:

- Firebase.
- Supabase.
- PlayFab.
- Backend propio con Node.js/API/WebSocket.

Datos minimos:

- usuarios,
- equipos,
- partidas,
- ligas,
- fixtures,
- resultados,
- tablas,
- inventario cosmetico,
- ranking global.

## Recomendacion

Orden de desarrollo:

1. Prototipo local de reglas.
2. 1 vs Maquina.
3. 1 vs 1 por telefonos en la misma red o por enlace.
4. Cuentas de usuario.
5. Ranking.
6. Ligas con administrador, fixture y tabla.
