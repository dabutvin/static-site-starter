workflow "New workflow" {
  on = "push"
  resolves = ["NOTICE file generator"]
}

action "NOTICE file generator" {
  uses = "dabutvin/chive-action@no-components"
  secrets = ["GITHUB_TOKEN"]
  args = "--includeDev=true"
}
