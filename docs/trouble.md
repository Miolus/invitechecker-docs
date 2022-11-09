# Troubleshooting

We have listed the most common errors with solutions here.
Checking the `debug` command in advance could already resolve your issue.

- ## Invites are not counted

    These are possible reasons:  
     
    * InviteChecker missing `manage server` permission<br>
        To fix this, go to your Server Settings and add the requiredrequiredrequiredrequired permission to InviteChecker.  

    * InviteChecker's cache not being up to date<br>
        Running the `update` command will reload all invite links and fix this.  

    * InviteChecker is currently booting up<br>
        When you see a 🟡 symbol in the `debug` command, this means InviteChecker is currently loading.  
        Wait till the symbol turned 🟢 green. You can execute the `update` command to instantly load invites for your server.

- ## Ratelimits
    
    There are 2 types of ratelimits:

    * Guild Ratelimit<br>
        Takes into account all actions of users on a guild. You might recieve a ratelimit on your first action when other users spammed a function
    
    * User Ratelimit<br>
        The most common ratelimit. Waiting a few seconds will unlock you again.

- ## Bot missing permissions
    
    This is sent when InviteChecker is missing required permissions.
    These permissions are needed to make the bot working. InviteChecker does only use the given permissions to work.

    * Solutions
        - Add roles to InviteChecker that are granted the required permissions.
        - Go to channel settings and add required user permissions.
    
    * Purpose of permissions
        - `manage server` to track invites
        - `add reactions` to manage giveaways
        - `send messages` to send messages
        - `manage invites` to track invites
    




   
 
