# DT Digital - Alcance MVP

## Meta del MVP

Construir una primera version jugable completa de una partida corta, con dos jugadores locales, respetando el tablero DT Estratega y las reglas esenciales.

El MVP no busca tener todo el contenido final. Busca demostrar que la dinamica central funciona y se siente como el juego fisico.

## Incluye

### Modos

- Dos jugadores locales en la misma pantalla.
- Partido de 15 minutos configurable.
- Turno con limite de 15 segundos.
- Durante la validacion inicial, el limite de turno queda visible pero no cambia el turno automaticamente.

### Tablero

- Tablero DT Estratega.
- Campo de 5 x 10 cuadrantes.
- 50 cuadrantes de cancha.
- Zona de arquero fuera de la linea de fondo, en el cuadrante central.
- La zona de arquero no cuenta como cuadrante interno de cancha.
- Posesion de balon asociada a una ficha o casilla.

### Fichas

- 15 jugadores por equipo.
- 11 en cancha: 1 arquero y 10 jugadores de campo.
- 4 suplentes.
- Arquero.
- Defensor.
- Volante.
- Extremo.
- Media punta.
- Delantero.

Cada ficha debe tener:

- movimiento por direccion,
- pase,
- remate,
- equipo,
- posicion,
- estado activo/bloqueado.

### Acciones

- Mover sin balon.
- Mover con balon.
- Pasar sin mover la ficha, trasladando solo la pelota.
- Rematar solo si la ficha con pelota esta en condicion de atravesar la linea hacia la zona de arquero.
- Disputar balon.
- Usar carta especial.
- Finalizar turno.

### Cartas

Cada equipo tiene:

- 1 Jugada Habilidosa.
- 1 Remate de Larga Distancia.
- 2 Segundo Movimiento.

Cartas de resolucion:

- Disputa: A, B, C, D.
- Remate/arquero: 1, 2, 3, 4.

### Resoluciones

- Disputa de balon.
- Disputa visual con carta propia, carta rival tapada, revelado y ganador.
- Remate vs arquero.
- Gol.
- Atajada.
- Rebote basico opcional para version siguiente.

### UI

- Entrada como invitado para MVP.
- Espacio previsto para login de usuario.
- Boton de pausa/salir.
- Marcador.
- Equipo en turno.
- Tiempo de partido.
- Tiempo de turno.
- Panel de acciones.
- Panel de cartas.
- Historial breve de jugadas.
- Panel de capacidades de la ficha seleccionada.
- Activacion automatica de todos los destinos posibles segun accion.

## No incluye en MVP

- Login real online.
- Ranking real online.
- Tienda o inventario real de skins.
- Torneos.
- Editor avanzado de tacticas.
- Mercado de jugadores.
- Animaciones cinematicas largas.
- Comentarios narrados.
- Multiples estadios.

## Criterios de aceptacion

El MVP se considera aprobado si:

- Una partida puede empezar, jugar turnos, marcar goles y terminar.
- Las fichas no se mueven fuera de los cuadrantes.
- El jugador ve todas las direcciones posibles al seleccionar una ficha.
- El jugador puede elegir un destino valido sin cargar direccion manualmente.
- Puede haber mas de una ficha en el mismo cuadrante.
- Si hay fichas rivales y pelota en el mismo cuadrante, se activa disputa.
- Las cartas aparecen cuando corresponde.
- La duracion elegida se respeta.
- Despues de un gol, el balon vuelve al centro.
- La pelota existe como elemento propio y no como un efecto visual perdido.
- El arquero se ve fuera de la cancha, en el centro de la linea de fondo.
- Hay 15 jugadores por equipo, con 11 activos y 4 suplentes.
- Hay una forma clara de salir o pausar.
- Dos personas pueden entender el estado de la partida mirando la pantalla.
