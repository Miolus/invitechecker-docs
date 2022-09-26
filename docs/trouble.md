# Troubleshooting

We have listed the most common errors with solutions here.
Checking the `debug` command in advance could already resolve your issue.

- ## Invites are not counted
     These are possible reasons:  
     
    * InviteChecker missing `manage server` permission  
        To fix this, go to your Server Settings and add the requiredrequiredrequiredrequired permission to InviteChecker.  

    * InviteChecker's cache not being up to date  
        Running the `update` command will reload all invite links and fix this.  

    * InviteChecker is currently booting up
        When you see a 🟡 symbol in the `debug` command, this means InviteChecker is currently loading.  
        Wait till the symbol turned 🟢 green. You can execute the `update` command to instantly load invites for your server.

- ## Ratelimits
    There are 2 types of ratelimits:

    * Guild Ratelimit
        Takes into account all actions of users on a guild. You might recieve a ratelimit on your first action when other users spammed a function
    
    * User Ratelimit
        The most common ratelimit. Waiting a few seconds will unlock you again.

   
 
