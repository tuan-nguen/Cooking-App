export class Recipe {
    constructor(
        recipeName, 
        shortDescription, 
        duration, 
        products, 
        imageResult, 
        fullDescription, 
        tags,
        userId, 
        username
    ) {
        this.recipeName = recipeName; 
        this.shortDescription = shortDescription; 
        this.duration = duration; 
        this.products = products; 
        this.imageResult = imageResult; 
        this.fullDescription = fullDescription; 
        this.tags = tags;
        this.userId = userId; 
        this.username = username; 
    }
}