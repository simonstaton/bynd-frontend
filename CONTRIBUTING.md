# Contributing

When contributing to this project ensure you follow all [internal beyond coding standards](#), each module should have a relevant spec for it's unit tests and be fully commented following [jsdoc](http://usejsdoc.org/about-getting-started.html) standards. You should also include an example how to at the top of each file and inside the relevant README.md `scripts/src/react/README.md` or `scripts/src/vanilla/README.md`.

All modules commited to this repository should be self contained and completly standalone excluding any styling but including html class attributes for local styling.

## Issues and Suggestions

Logging to be setup (probably jira)

## Branching Strategy

We follow gitflow, ensure all pull-requests follow this branching strategy. All branches should be based off `develop` and merged in via a relevant pull request unless you are releasing a hotfix in which case this should go directly to master. Branch names should be structured as `[type]/[info]` with type being either `feature`, `change`, `bugfix` or `hotfix` - example being `feature/my-new-module`

## Commits

Commits should follow the same above structure including a description of the commit `[feature/my-new-module] adding xyz to the src files because...` these should be small and frequent commits that are easily digestible in chunks.

## Pull Requests

Every merge should have a relevant pull requst, before merging your pull request it must have 2 code reviews. Pull-requests should have a relevant title including the type of branch, example: `feature/my-new-module: adding module A for xxx` it should also include a relevant description with details that can help code reviews.

## Tagging, releasess and versioning

TODO (will be using semver but need to work out releases)
