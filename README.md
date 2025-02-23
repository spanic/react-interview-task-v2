# React Interview Task

## Build & deploy

- `docker buildx build --platform=linux/amd64 -t react-interview-task-showcase:[version] .`
- `docker login public.cr.cloud.ru -u [user_id] -p [password]`
- `docker push public.cr.cloud.ru/react-interview-task-showcase:[version]`
- Create a new revision of the Container App that already exists on the Cloud.ru platform

### TODO:

- [ ] Configure CI/CD 

  Blockers:
    - [ ] Gitverse runner doesn't work on MacOS: actions cannot access Docker daemon - why?
    - [ ] Runner cannot be deployed as a Cloud.ru Container App: `var/run/docker.sock` is not being mounted even in privileged mode
    - [ ] Deploying runner to the existing VM needs resource constraints to be applied to avoid whole installation slowdown
