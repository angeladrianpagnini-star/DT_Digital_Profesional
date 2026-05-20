# DT Digital - Vision de Producto

## Objetivo

Rehacer Juego DT desde cero como una version digital profesional, fiel al juego fisico, con foco en estrategia, lectura tactica, cartas, disputa de balon y experiencia de mesa.

La version digital no debe sentirse como un futbol arcade. Debe sentirse como el tablero fisico cobrado vida: fichas, cartas, turnos, decisiones y tension de jugada.

## Plataforma recomendada

La plataforma principal recomendada es Unity 6 LTS.

Motivos:

- Permite publicar en Windows para eventos y ferias.
- Permite publicar en Android para tablets.
- Permite construir una estetica profesional con camara, animaciones, sonido y efectos.
- Tiene buen soporte para 2D, UI, input tactil, audio e IA.
- Hay mas disponibilidad de desarrolladores Unity que de motores mas chicos.

## Estrategia de desarrollo

El juego debe desarrollarse en dos capas separadas:

1. Motor de reglas.
   - Tablero.
   - Fichas.
   - Turnos.
   - Cartas.
   - Disputas.
   - Remates.
   - Arquero.
   - Timer.
   - IA.

2. Presentacion visual.
   - Tablero digital.
   - Animacion de fichas.
   - Cartas visibles.
   - HUD.
   - Sonido.
   - Camara.

Esta separacion es clave. Si reglas y visuales quedan mezcladas, cada ajuste de reglamento rompe la pantalla o la IA.

## Experiencia deseada

El jugador debe ver una mesa digital clara:

- Campo central con cuadrantes reales.
- Fichas diferenciadas por equipo y posicion.
- Pelota visible y siempre asociada a una casilla.
- Cartas especiales en zona propia.
- Cartas de disputa A/B/C/D.
- Cartas de remate/arquero 1/2/3/4.
- Marcador, tiempo de partido y tiempo de turno.
- Mensajes cortos de estado: turno, disputa, remate, gol, atajada, cambio de posesion.

## Cuenta, progreso y personalizacion

El juego debe pensarse desde el inicio con login de usuario, aunque el primer MVP pueda funcionar como invitado.

La cuenta debe permitir:

- conservar nombre de usuario,
- historial de partidas,
- ranking,
- progreso,
- skins de jugadores,
- canchas desbloqueables,
- indumentarias,
- escudos o identidad de equipo,
- estadisticas personales.

La plataforma debe contemplar modos competitivos:

- 1 vs 1 local,
- 1 vs Maquina con dificultad facil, media y dificil,
- 1 vs 1 por telefonos/dispositivos sincronizados,
- online por enlace,
- ligas con administrador, fixture, resultados, jornadas y tabla.

Esto implica que el juego final necesita una capa de backend o servicio online. En el prototipo se puede simular localmente, pero en produccion debe existir un sistema de cuenta real.

## Publico

El juego debe funcionar para:

- Presentaciones comunitarias.
- Talleres de juegos.
- Ferias.
- Familias y grupos.
- Futboleros casuales.
- Jugadores que disfrutan estrategia de mesa.

## Principio rector

Primero fidelidad al tablero. Despues espectacularidad.

Una animacion linda no puede contradecir una regla. Una regla confusa no puede quedar escondida en la interfaz.
