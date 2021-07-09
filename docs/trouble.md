# Troubleshooting

We have listed the most common errors with solutions here.

- ## Invites are not counted
    This issue occurs when you use limited invite links. These are the solutions:
    - use permanent invite links
    - use invite links with unlimited uses
    - execute the `update` command

- ## Forbidden
    There are 2 types of Forbidden errors:
    - Permission not given
        - Occurs when the bot has not permission to perform the requested action (e.g. sending a message)
    - `manage_guild` needed
        - Occurs when you don't have enough permissions to perform this action.
        
- ## KeyError
    Is being raised when the bot couldn't resolve your arguments. Solution:
    - remove intendation
    - write command in a single line