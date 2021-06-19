# Invite Count Types

InviteChecker counts invites based on 3 types.

| Sign               | Type     | Description                            |
| -------------      | -------- | --------                               |
| ✅                 | Normal   | Normal invites from joins.             |
| :star:             | Bonus    | Extra invited added by server admins.  |
| :no_entry_sign:    | Leaves   | Negative invites from leaving members. |

The following formula is used to calculate the count: Bonus + Normal - Leaves = Real

Bonus invites can also be negative when admins execute a `remove` command. These user's have full control about the counts.
