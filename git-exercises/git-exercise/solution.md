# Git Excercise insights

1. Staging area is never empty.
2. Stash will honor the order in which stash apply, since it is a stack. Can't apply 2 stashes simultaneously.
3. Stashed a single file. Can not stash untracked file individually.

    ```bash
    ➜  git-exercise git:(solution-git-exercise) ✗ git stash push -m "Stash conflict" solutionStash.txt
    error: pathspec 'git-exercises/git-exercise/solutionStash.txt' did not match any file(s) known to git
    Did you forget to 'git add'?
    ```

4. Once a tag is checked-out, Any new commit from there will not belong to a branch, as it'll be detached state.
5. Light weight tags carry no info on tag creation
6. Annotated tag consequence -

    ```bash
    tag v2.0
    Tagger: Vivek Thakur <vivek_thakur22@yahoo.com>
    Date:   Wed Feb 10 13:30:09 2021 +0530

    Annotated tag

    commit ab697e8f34e9408789a8c3a9d9ac0195ee61e513 (HEAD, tag: v2.0, tag: v1.0, solution-git-exercise)
    Author: Vivek Thakur <vivek_thakur22@yahoo.com>
    Date:   Wed Feb 10 12:00:11 2021 +0530

        PE-1 Committing stashed object, to re-apply the stash
    ```

7. Simple Merge -

    ```bash
    ➜  git-exercise git:(solution-git-exercise-temp-merge) ✗ git merge solution-git-exercise
    Updating d09a081..ab697e8
    Fast-forward
    git-exercises/git-exercise/solution.txt | 2 ++
    1 file changed, 2 insertions(+)
    create mode 100644 git-exercises/git-exercise/solution.txt
    ```

8. Merge Conflict - HEAD points to latest change while resolving the conflict.

    ```bash
    ➜  git-exercise git:(solution-git-exercise-temp-merge-conflict) ✗ git commit -m "PE-1 Merge conflict demo"
    husky > pre-commit (node v12.18.4)
    ℹ No staged files match any configured task.
    [solution-git-exercise-temp-merge-conflict 07c90e5] PE-1 Merge conflict demo
    1 file changed, 1 insertion(+)
    create mode 100644 git-exercises/git-exercise/solution.txt
    ➜  git-exercise git:(solution-git-exercise-temp-merge-conflict) ✗ git merge solution-git-exercise
    Auto-merging git-exercises/git-exercise/solution.txt
    CONFLICT (add/add): Merge conflict in git-exercises/git-exercise/solution.txt
    Automatic merge failed; fix conflicts and then commit the result.
    ➜  git-exercise git:(solution-git-exercise-temp-merge-conflict) ✗ 

    The Conflict -
    <<<<<<< HEAD
    This should reesult in a merge conflict.
    =======
    Hello, World!
    Stash it
    >>>>>>> solution-git-exercise
    ```

9. Commit-ids are simply standard SHA1 hashes.
