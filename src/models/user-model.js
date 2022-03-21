export class User {
    constructor(
        firstName,
        lastName,
        username,
        password,
        userSex,
        userType,
        userAvatar = '',
        userDescription,
        userStatus = 'ACTIVE',
        dateOfRegistry,
        // dateOfLastActivity = 'none'
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.userSex = userSex;
        this.userType = userType;
        this.userAvatar = userAvatar; 
        this.userAvatar = userAvatar;
        this.userDescription = userDescription;
        this.userStatus = userStatus; 
        this.dateOfRegistry = dateOfRegistry;
        // this.dateOfLastActivity = dateOfLastActivity;
    }
}