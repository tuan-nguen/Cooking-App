const USER_API_BASE_URL = 'http://localhost:8000';

class UserApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    //USERS
    async fetchUsers() {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + '/users')); 
    }

    async fetchUserId(userId) {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + `/users/${userId}`));
    }

    async postNewUser(user) {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + '/users', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        }));
    }

    async addUserFavoriteRecipes(user, arrayRecipes) {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + `/users/${user.id}`,{
            headers: {
                'Content-Type': 'application/json'
            }, 
            method: 'PATCH', 
            body: JSON.stringify({
                "favoriteRecipes": arrayRecipes
            })
        }));
    }

    async deleteUser(userId) {
        return this.handleResponse(async() => fetch(USER_API_BASE_URL+`/users/${userId}`, {
            method: 'DELETE',
        }));
    }

    async updateUser(updatedUser, userId) {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + `/users/${userId}`,{
            headers: {
                'Content-Type': 'application/json'
            }, 
            method: 'PUT', 
            body: JSON.stringify(updatedUser),
        }));
    }


    //RECIPES
    async fetchRecipes() {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + '/recipe')); 
    }

    async postNewRecipe(recipe) {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + '/recipe', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(recipe)
        }));
    }

    async deleteRecipe(recipeId) {
        return this.handleResponse(async() => fetch(USER_API_BASE_URL+`/recipe/${recipeId}`, {
            method: 'DELETE',
        }));
    }

    async putUpdateRecipe(updatedRecipe, recipeId) {
        return this.handleResponse(async () => fetch(USER_API_BASE_URL + `/recipe/${recipeId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(updatedRecipe)
        }));
    }

    //FETCH
    async handleResponse(asyncRequestFunc) {
        try {
            const resp = await asyncRequestFunc();
            const content = await resp.json();
            if (resp.status < 400) {
                console.log('Content fetched');
                return content;
            } else {
                console.log(`HTTP error ${resp.status}`);
                return Promise.reject(`Error performing HTTP request: ${resp.status}`);
            }
        } catch (error) {
            console.log(`HTTP Error performing request: ${error}`);
            return Promise.reject(`Error performing HTTP request: ${error}`);
        }
    }
}

export default new UserApiClient(USER_API_BASE_URL); 