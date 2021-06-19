# Customize Messsages

You can use the `message` command to customize messages sent on join and leave events.
Syntax: `message join/leave my new message`
Use variables for a responsive message.

| Example                                                            | Example Result                             | 
| -------------                                                      | -------------------------                  | 
| `message join MEMBER_NAME joined, invited by INVITER_NAME`         | Miolus joined, invited by Joulxdr          |
| `message leave MEMBER_NAME left, he was invited by INVITER_MENTION`| Miolus left, he was invited by @Dominik    |


The message may be an error message if the bot can't figure out the inviter.

## Variables

Place this variables in your text when customizing a message to make the bot replace them with usefull information.


| Variable           | Description                                | Example  |
| -------------      | -------------------------                  | -------- |
| MEMBER_MENTION     | Mention the user joined.                   | @Miolus
| MEMBER_NAME        | Name of the user joined.                   | Miolus
| MEMBER_TAG         | The member's 4-digit tag.                  | 1234
| INVITER_NAME       | Name of the user that invited the member.  | Dominik
| INVITER_MENTION    | Mention of the inviter.                    | @Dominik
| INVITER_TAG        | 4-digit tag of the inviter.                | 5678
| MEMBER_COUNT       | Member count of your server.               | 92
| INVITE_COUNT       | Count how many people the inviter invited. | 69
| MEMBER_CREATED_AT  | Time of the member's account creation.     | 2020/10/09
| INVITER_CREATED_AT | Time of the inviter's account creation.    | 2019/03/14
