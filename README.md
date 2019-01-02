# Test User

### Sign-up
aws cognito-idp sign-up --region us-east-1 --client-id 40m9bhnsf0s8cpjnr0gjeq3qpg --username admin@example.com --password Passw0rd! --user-attributes "Name=family_name,Value=Reingold" "Name=email,Value=admin@example.com" "Name=name,Value=Ilia"

### Confirm
aws cognito-idp admin-confirm-sign-up --region us-east-1 --user-pool-id us-east-1_uJbakE5cJ --username admin@example.com

### Delete User
aws cognito-idp admin-delete-user --user-pool-id us-east-1_uJbakE5cJ --username admin@example.com