# Adecuacion del prototipo digital Juego DT

Fecha: 2026-05-07

## Diagnostico rapido

El material recibido es un build compilado de Unity, no el proyecto fuente. Se puede auditar parcialmente el contenido del build, pero para corregir jugabilidad, interfaz, tablero, camara, cartas y estados de partida hace falta pedir el proyecto Unity completo con `Assets`, `Packages` y `ProjectSettings`.

El ejecutable contiene logica separada para `BoardManager`, `CardManager`, `TurnManager`, `AIController`, `GameHUD`, `PenaltyManager`, cartas especiales, disputa de balon, remate, arquero, segundo movimiento y timer. Eso indica que el prototipo ya tiene una base, pero no esta alineado del todo con el tablero fisico ni con el reglamento.

## Fallas observadas a corregir

1. Falta boton visible para salir del juego.
   - Debe existir un boton de salir en menu y/o pausa.
   - Debe existir tecla rapida, por ejemplo `Esc`, que abra pausa con opcion `Continuar`, `Reiniciar`, `Menu`, `Salir`.

2. Movimiento de jugadores no alineado al fisico.
   - Cada ficha debe respetar sus capacidades por posicion: arquero, defensor, volante, extremo, media punta y delantero.
   - El jugador debe elegir una sola direccion por turno.
   - No se pueden combinar direcciones en un movimiento.
   - Puede usarse una cantidad parcial de la capacidad permitida.

3. El tablero digital debe respetar los cuadrantes del tablero fisico.
   - Tablero DT Estratega: 50 cuadrantes de campo mas zonas de definicion/arquero.
   - Los puntos/casillas validas deben coincidir visualmente con el tablero fisico.
   - El highlight de movimiento no debe mostrar casillas que no existen en el tablero.

4. Carta de disputa no aparece cuando corresponde.
   - Si una ficha rival entra a una casilla con balon o se disputa posesion, debe abrirse la seleccion de carta oculta.
   - El poseedor elige A/B/C/D.
   - El desafiante intenta adivinar A/B/C/D.
   - Si acierta, gana posesion; si no, la mantiene el poseedor.
   - Con Jugada Habilidosa, el desafiante gana automaticamente.

5. Las cartas aparecen en negro o sin identificacion clara.
   - Las 4 opciones deben verse siempre con texto/color: A, B, C, D para disputa y 1, 2, 3, 4 para remate/arquero.
   - Deben indicar estado: disponible, seleccionada, bloqueada o usada.

6. Remate y arquero muestran casillas incorrectas.
   - El rematador debe elegir carta 1/2/3/4.
   - El arquero debe elegir carta 1/2/3/4.
   - Si el arquero acierta, ataja; si no, es gol.
   - No se deben mostrar tres casilleros extra alrededor del arquero si no corresponden al tablero/reglamento.

7. Luego del gol o remate, la ficha queda mal posicionada.
   - Tras gol, se debe resetear balon al medio y reanudar con saque del equipo que recibio el gol.
   - Las fichas no deben quedar congeladas en posicion adelantada por error.
   - Al cambio de tiempo, deben conservarse o resetearse posiciones segun la regla definida, pero nunca quedar una ficha fuera de turno/campo.

8. Duracion de partido no respeta lo elegido.
   - Si se eligen 15 minutos, el partido debe durar 15 minutos.
   - El turno individual debe tener maximo 15 segundos.
   - No mezclar duracion de partido con temporizador de turno.

9. Cartas especiales por equipo.
   - Deben ser 4 cartas especiales por equipo:
   - 1 Jugada Habilidosa.
   - 1 Remate de Larga Distancia.
   - 2 Segundo Movimiento.
   - Una vez usada cada carta, debe quedar desactivada.

10. Sonido de tribuna.
   - Mantener el ambiente de tribuna, porque suma a la presentacion.
   - Regular volumen desde opciones para que no tape acciones ni UI.

## Especificacion visual recomendada

La pantalla principal debe parecerse al tablero fisico:

- Campo central con grilla 5 x 10 para DT Estratega.
- Zonas laterales visibles: tiempo, habilidades, cartas de disputa, cartas de remate, cartas especiales, zona de duelo, zona arquero/remate.
- Las cartas deben estar ubicadas como en el tablero fisico, no en paneles genericos desconectados.
- La pelota debe estar claramente sobre una casilla.
- La ficha seleccionada debe mostrar:
  - nombre/posicion,
  - movimiento disponible,
  - pase,
  - remate,
  - acciones posibles.
- Los highlights deben usar colores distintos:
  - movimiento valido,
  - pase valido,
  - remate valido,
  - disputa,
  - casilla bloqueada.

## Flujo de turno esperado

1. Indicar equipo activo.
2. Seleccionar ficha.
3. Mostrar acciones posibles: mover, mover con balon, pase, remate, carta especial.
4. Ejecutar una accion.
5. Si hay disputa, abrir cartas A/B/C/D.
6. Si hay remate, abrir cartas 1/2/3/4 para rematador y arquero.
7. Resolver resultado.
8. Actualizar posesion, marcador, timer y turno.
9. Si se uso Segundo Movimiento, permitir una segunda accion y luego cerrar turno.

## Prioridad de cambios

Prioridad alta:
- Salir/pausa con `Esc`.
- Arreglar timer 15 minutos vs 5 minutos.
- Alinear movimiento con capacidades reales de fichas.
- Arreglar cartas de disputa y remate.
- Corregir reset despues de gol/cambio de tiempo.

Prioridad media:
- Redibujar tablero digital segun tablero fisico.
- Mejorar visibilidad de cartas y estados.
- Ajustar IA para que use las mismas reglas que el jugador.

Prioridad baja:
- Mejoras de camara.
- Animaciones y transiciones.
- Opciones de volumen.

## Pedido tecnico para el programador

Solicitar el proyecto Unity completo, no solo el build:

- carpeta `Assets`
- carpeta `Packages`
- carpeta `ProjectSettings`
- version exacta de Unity usada
- escenas configuradas
- prefabs del tablero, fichas, cartas y HUD
- scripts fuente C#

Con solo el `.exe` se puede revisar y, en algunos casos, parchear detalles menores, pero no conviene rehacer reglas o interfaz desde el build compilado.
