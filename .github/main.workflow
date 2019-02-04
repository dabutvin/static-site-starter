workflow "New workflow" {
  on = "push"
  resolves = ["NOTICE file generator"]
}

action "NOTICE file generator" {
  uses = "dabutvin/chive-action@token-check"
  secrets = ["GITHUB_TOKEN"]
}
