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
        favoriteRecipes = [],
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
        this.favoriteRecipes = favoriteRecipes; 
        // this.dateOfLastActivity = dateOfLastActivity;
    }
}