from github import Github, Auth
from pandas import DataFrame

from src import Repository

from dotenv import load_dotenv
import os

class Profile :

    def __init__(self) :
        self.profile = self.login()
        self.user = self.profile.get_user()
        self.repo = self.getRepos()
        self.traffic = {}
        self.getReposTraffic()
        self.df_traffic = DataFrame.from_dict(self.traffic, orient="index")

    def __str__(self) :
        return f"{self.user.login} profile"

    @staticmethod
    def login() :
        load_dotenv()
        TOKEN = os.getenv("TOKEN")
        auth = Auth.Token(TOKEN)
        g = Github(auth=auth)
        try : 
            print(f"Authenticated user : {g.get_user().login}")
            return g
        except Exception as e : 
            g.close()
            raise ValueError(f'Exception has occured during login : {e}')

    def logout(self) :
        self.github.close()
        print("User logout !!!")

    def getRepos(self) :
        return [Repository(repo) for repo in self.user.get_repos()]
    
    def getReposTraffic(self) :
        [self.traffic.update({repo.name : repo.getTraffic()}) for repo in self.repo]

    def displayTraffic(self, sort=False) :
        if sort :
            _sorted_df = self.df_traffic.sort_values(by=sort, ascending=False)
            _sorted_df.plot(kind="bar",figsize=(15, 8))
        else :
            self.df_traffic.plot(kind="bar",figsize=(15, 8))
