# Channels Command


| Usage         | Customize the message sent on joins with variables. |
| Syntax        | `message join/leave <custom>`                       |
| Example       | `message join MEMBER_MENTION joined my cool server` |
| Permissions   | `manage_guild` or manager role                      | 

# Variables


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
