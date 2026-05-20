# DT Digital Profesional

Base inicial para rehacer Juego DT desde cero de forma profesional.

## Contenido

- `docs/vision_producto.md`: vision, plataforma recomendada y criterio de producto.
- `docs/alcance_mvp.md`: primera version jugable que hay que construir.
- `docs/modelo_reglas.md`: entidades y reglas que debe respetar el sistema.
- `prototipo_web/index.html`: maqueta jugable inicial para validar dinamica.

## Como abrir el prototipo

Abrir este archivo en el navegador:

`prototipo_web/index.html`

No requiere instalacion ni servidor.

## Que permite probar

- Tablero DT Estratega de 5 x 10.
- Turnos Azul/Rojo.
- Timer de partido de 15 minutos.
- Timer de turno de 15 segundos.
- Seleccion de fichas.
- Movimiento por una sola direccion.
- Capacidades distintas por posicion.
- Pelota asociada a ficha.
- Cartas especiales por equipo.
- Cartas A/B/C/D para disputa.
- Cartas 1/2/3/4 para remate/arquero.
- Pausa con boton y tecla `Esc`.

## Importante

Este prototipo no es el juego final. Es una mesa de prueba para validar reglas y experiencia antes de desarrollar la version final en Unity 6 LTS.

La version Unity debe usar el mismo modelo de reglas, pero con:

- arte final,
- animaciones,
- sonido,
- mejor flujo de cartas,
- IA completa,
- pantalla de inicio,
- configuracion de partido,
- guardado de opciones,
- build para Windows y Android.
