# Giveaways

You can manage giveaways with the `giveaway` (alias `g`) command.

| Command          | Description                             | 
| -------------    | -------------------------               | 
| `g start <time>` | Create a giveaways                      | 
| `g list`         | List all your giveaways.                |
| `g reroll <id>`  | Reroll a giveaways after it ended.      |
| `g delete <id>`  | Delete the giveaway with the given id.  |
| `g wipe`         | Delete all giveaways that have ended.   |
| `g end <id>`     | End a giveaway by id.                   | 

`id` : The ID of the giveaway you want to manage. You can get the id with `g list`.

`time` : A `1h2d1m` representation of a duration. Must not be bigger than 14 days.
