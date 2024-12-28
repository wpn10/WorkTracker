from git import Repo
from github import Github
import os

def get_commits():
    commits = []
    repo = Repo(os.path.join(os.path.dirname(__file__), ".."))
    for commit in repo.iter_commits():
        commits.append({
            "date": commit.committed_date,
            "message": commit.message,
            "author": commit.author.name,
        })
    return commits

if __name__ == "__main__":
    commits = get_commits()
    for commit in commits:
        print(commit)
