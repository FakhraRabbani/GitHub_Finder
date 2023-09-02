//0b17f215979190fbaba7
//07a8cf3cbac6f274af6711a9adc841365218246c

//https://api.github.com/users/FakhraRabbani
//https://api.github.com/users/FakhraRabbani/repos

//Create class
class Github {
    constructor(){
        this.client_id = '0b17f215979190fbaba7';
        this.client_secret = '07a8cf3cbac6f274af6711a9adc841365218246c';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    //Get User function
    async getUser(user){
        //Request for profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //Request for repos
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
           // profile: profile <==> profile
           profile,
           repos
        }
    }
}