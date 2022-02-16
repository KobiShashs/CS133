class AuthService{

    public isLoggedIn = false;
    public token:string = '';
}


const authService = new AuthService();

export default authService;