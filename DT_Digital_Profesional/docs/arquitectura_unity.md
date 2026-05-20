# DT Digital - Arquitectura Unity Recomendada

## Estructura de carpetas

```text
Assets/
  DT/
    Art/
    Audio/
    Prefabs/
    Scenes/
    Scripts/
      Core/
      Rules/
      UI/
      AI/
      Audio/
      Account/
    ScriptableObjects/
    Tests/
```

## Scripts principales

### Rules

- `GameState`
- `BoardState`
- `PieceState`
- `BallState`
- `TurnState`
- `CardState`
- `MoveRules`
- `PassRules`
- `ShotRules`
- `DisputeRules`
- `TimerRules`

### Core

- `GameController`
- `TurnController`
- `BoardController`
- `InputController`
- `MatchController`

### UI

- `HudView`
- `BoardView`
- `PieceView`
- `CardPanelView`
- `PauseMenuView`
- `HistoryLogView`

### AI

- `AiController`
- `AiMoveEvaluator`
- `AiCardEvaluator`

### Account

- `UserProfile`
- `AuthService`
- `RankingService`
- `InventoryService`
- `CosmeticCatalog`
- `PlayerProgress`

## Principio tecnico

La UI no decide reglas.

La UI solo muestra opciones y envia intenciones:

- seleccionar ficha,
- seleccionar accion,
- seleccionar destino,
- seleccionar carta.

El motor de reglas valida si eso es legal.

## Beneficio

Si cambia el reglamento, se modifica `Rules`.

Si cambia la estetica, se modifica `UI` y `Art`.

Si cambia la IA, se modifica `AI`.

Asi el proyecto no queda fragil como el build anterior.

## Cuenta y servicios

Para produccion conviene prever una capa de servicios:

- login,
- perfil,
- ranking,
- estadisticas,
- inventario cosmetico,
- sincronizacion online.

Opciones posibles para backend:

- Firebase,
- PlayFab,
- Supabase,
- backend propio con API.

La decision final depende de presupuesto, publicacion y si el ranking sera solo local, nacional o competitivo online.
