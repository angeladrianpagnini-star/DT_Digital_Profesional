# DT Digital - Modelo de Reglas

## Entidades principales

### GameState

Representa el estado completo de la partida.

- equipo en turno,
- fase actual,
- tiempo restante de partido,
- tiempo restante de turno,
- marcador,
- tablero,
- fichas,
- balon,
- cartas disponibles,
- historial de acciones.

### Board

Representa el campo.

- ancho: 5 columnas,
- alto: 10 filas,
- 50 cuadrantes internos,
- zona de arquero superior fuera de la cancha,
- zona de arquero inferior fuera de la cancha,
- casillas validas,
- casillas ocupadas.

La zona del arquero esta por fuera de la linea de fondo. Visualmente debe quedar claro que no es un cuadrante interno del campo.

### Piece

Representa una ficha.

- id,
- equipo,
- posicion,
- columna,
- fila,
- tiene balon,
- bloqueada,
- stats.

Cada equipo tiene 15 fichas:

- 1 arquero,
- 10 jugadores de campo en cancha,
- 4 suplentes.

El arquero no es una pieza fija. Puede salir de la zona de arquero al campo si su capacidad de movimiento lo permite y el jugador decide hacerlo.

### PieceStats

Capacidades por posicion.

- movimiento por direccion,
- pase,
- remate.

Direcciones:

- adelante,
- adelante derecha,
- derecha,
- atras derecha,
- atras,
- atras izquierda,
- izquierda,
- adelante izquierda.

### CardInventory

Cartas especiales por equipo.

- jugada habilidosa: 1.
- remate larga distancia: 1.
- segundo movimiento: 2.

Cada carta debe tener estado:

- disponible,
- seleccionada,
- usada.

Las cartas especiales se agotan al usarse y no pueden volver a utilizarse durante la misma partida.

## Fases de turno

1. InicioTurno.
2. SeleccionFicha.
3. SeleccionAccion.
4. SeleccionDestino.
5. Resolucion.
6. Disputa, si corresponde.
7. Remate, si corresponde.
8. SegundoMovimiento, si fue activado.
9. FinTurno.

## Reglas de movimiento

- Una accion de movimiento permite elegir una sola direccion.
- La cantidad de casillas puede ser parcial hasta el maximo permitido.
- La direccion se interpreta segun el equipo.
- Para Azul, adelante es avanzar hacia el arco Rojo.
- Para Rojo, adelante es avanzar hacia el arco Azul.
- Por lo tanto, las capacidades impresas de la ficha son relativas al equipo, no absolutas del tablero.
- Una ficha puede terminar en un cuadrante ocupado por una ficha propia.
- Una ficha puede terminar en un cuadrante ocupado por una ficha rival.
- El cuadrante compartido es valido porque permite generar situaciones tacticas y disputas.
- Si en un mismo cuadrante hay al menos una ficha de cada equipo y la pelota esta presente, se activa disputa.

## Reglas de pase

- El pase mueve la pelota, no mueve la ficha que pasa.
- Al seleccionar pase, se muestran todos los cuadrantes alcanzables por capacidad de pase.
- Si el pase llega a un compañero, la pelota queda en posesion de ese compañero.
- Si el pase llega a un cuadrante libre, la pelota queda suelta en ese cuadrante.
- Si el pase llega a un cuadrante con rival y pelota presente, se activa disputa.
- En el saque del medio, ya sea al inicio del partido, al inicio de un tiempo o despues de un gol, la primera accion debe ser pase.
- En saque del medio no se permite trasladar con pelota ni rematar como primera accion.
- En saque del medio, el pase debe ir a un companero; no puede dejarse la pelota suelta como primer accion.
- Despues del gol, la pelota queda en posesion clara del equipo que saca.

## Reglas de disputa

- El poseedor del balon elige A/B/C/D.
- El desafiante elige A/B/C/D intentando adivinar.
- Si acierta, gana posesion.
- Si falla, la posesion se mantiene.
- Jugada Habilidosa gana automaticamente una disputa.
- Jugada Habilidosa se usa solo en disputa.
- Quien usa Jugada Habilidosa gana la posesion automaticamente, sin resolver duelo A/B/C/D.
- Cada equipo tiene una sola Jugada Habilidosa por partido; al usarla queda agotada.
- El arquero tambien puede usar Jugada Habilidosa si sale a disputar una pelota y la carta esta disponible.
- La ficha que pierde queda bloqueada para su siguiente turno, si esa regla se confirma como definitiva.
- Visualmente, la carta propia debe verse antes de elegir.
- La carta rival debe permanecer tapada hasta que ambas cartas esten definidas.
- Luego se revelan ambas cartas en formato una vs una.
- La interfaz debe mostrar claramente quien gano, quien perdio y quien continua.
- Las cartas fisicas se leen por pares frente/dorso: paginas 1/2, 3/4 y 5/6 del PDF de cartas.

## Reglas de remate

- El remate se inicia tocando la zona de arquero rival cuando esta al alcance.
- El rematador elige 1/2/3/4.
- El arquero elige 1/2/3/4.
- Si el arquero acierta, ataja.
- Si el arquero ataja, queda con posesion y debe poder pasar con potencia 4 o rematar con potencia 4 segun sus capacidades.
- El arquero no debe quedar obligado solamente a mover con pelota.
- Si no acierta, es gol.
- Remate de Larga Distancia suma 2 cuadrantes al alcance de remate.
- Para tener opcion de rematar, la ficha con pelota debe estar en condicion de atravesar la linea hacia la zona de arquero rival.
- Si la capacidad de remate no alcanza hasta esa zona externa, no hay remate valido y se debe seguir jugando.
- Remate de Larga Distancia se usa cuando la potencia normal no alcanza y agrega 2 cuadrantes.
- En Remate de Larga Distancia, el rematador elige una sola carta/direccion de disparo.
- En Remate de Larga Distancia, el arquero elige dos cartas:
  - una carta de atajada directa,
  - una carta de rebote.
- Si la carta de atajada directa coincide con la del remate, el arquero ataja.
- Si no ataja pero coincide la carta de rebote, la pelota queda rebotada a dos cuadrantes.
- Si ninguna carta coincide, es gol.
- Al seleccionar remate, se deben mostrar visualmente todos los cuadrantes dentro del alcance de remate y resaltar la zona de arquero si esta al alcance.
- En la interfaz, remate no debe mostrar todas las direcciones como movimiento.
- Remate debe mostrar la direccion/linea hacia el arco rival y habilitar la zona de arquero externa solo si el alcance llega.
- Al tocar la zona de arquero habilitada se inicia la resolucion con cartas 1/2/3/4.

## Reglas de Segundo Movimiento

- Segundo Movimiento permite realizar una accion extra dentro del mismo turno.
- La accion extra puede ser con la ficha que tiene la pelota o con otra ficha habilitada del mismo equipo.
- Ejemplos validos:
  - mover la ficha con pelota y luego mover otra ficha,
  - hacer un pase y luego mover una ficha,
  - mover una ficha sin pelota y luego mover con pelota,
  - realizar dos movimientos tacticos en el mismo turno.
- Segundo Movimiento no duplica cartas especiales ni permite reutilizar una carta agotada.
- Cada carta Segundo Movimiento se agota al jugarse.
- Hay dos cartas Segundo Movimiento por equipo, por partido.

## Interfaz de seleccion

- Al tocar una ficha, deben mostrarse automaticamente todas sus variables de desplazamiento.
- Si la ficha seleccionada no tiene la pelota, la accion por defecto es mover sin balon.
- Las acciones mover con balon, pase y remate solo se habilitan para la ficha que tiene la pelota.
- El jugador no debe cargar direccion por direccion para descubrir opciones.
- La UI debe activar los destinos posibles segun accion elegida:
  - mover,
  - mover con pelota,
  - pase,
  - remate.
- Cada accion puede mostrar alcances distintos aunque use la misma ficha.
- Remate mide alcance hacia la zona de arquero rival externa, no como pase ni como movimiento de ficha.
- Para calcular si llega al arco, el remate debe considerar la mejor trayectoria posible hacia la zona de arquero.
- Las diagonales cuentan como una unidad porque combinan avance y desplazamiento lateral.
- Si con diagonales y avance recto alcanza la zona de arquero, la opcion de remate debe quedar habilitada.

## Reglas de gol

- Sumar gol al equipo que remato.
- Detener resolucion actual.
- Resetear equipos a posicion inicial, cada uno de su lado.
- Resetear balon para saque del equipo que recibio el gol.
- Reanudar con posesion para el equipo que recibio el gol.
- El jugador que remato no debe quedar en la posicion desde donde pateo.

## Timer

- El partido tiene dos tiempos.
- Antes de empezar, se selecciona duracion por tiempo.
- Ambos tiempos usan la misma duracion elegida.
- Opciones de duracion:
  - 5 minutos reales por tiempo, visualizado como 15 minutos.
  - 10 minutos reales por tiempo, visualizado como 30 minutos.
  - 15 minutos reales por tiempo, visualizado como 45 minutos.
- Al terminar el primer tiempo, los equipos cambian de campo.
- El segundo tiempo empieza con formacion reiniciada: cada equipo queda en su lado, como al inicio, pero del lado contrario.
- No se deben arrastrar las posiciones finales del primer tiempo al segundo.
- Saca en el segundo tiempo el equipo que no saco en el primer tiempo.
- Tiempo de turno: visible como referencia.
- En etapa de validacion de jugabilidad, el turno no cambia automaticamente por agotamiento de tiempo.
- El corte automatico de turno se reactivara cuando la dinamica principal este validada.
- Si el tiempo de partido llega a 0, termina el partido o se pasa a penales en caso de empate.

## Cambios

- Despues de cada gol se abre una ventana para realizar cambios.
- Si el jugador decide realizar cambios, el tiempo queda detenido.
- El tiempo se reanuda al reanudar el juego.
- La interfaz de sustituciones debe respetar los suplentes disponibles y el limite de cambios definido.

## IA

La IA debe usar exactamente las mismas reglas que el jugador.

No debe:

- mover mas casillas de las permitidas,
- usar cartas agotadas,
- rematar desde zonas imposibles,
- saltarse disputas,
- alterar el timer.

## Cuenta y ranking

El sistema final debe contemplar:

- usuario,
- autenticacion,
- estadisticas,
- ranking,
- inventario visual,
- skins,
- canchas,
- indumentarias,
- historial de partidas.

El motor de reglas no debe depender de la cuenta. La cuenta solo guarda progresion, cosmeticos, ranking y datos persistentes.
