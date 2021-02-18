---
id: goliothctl_logs
title: "goliothctl logs"
slug: goliothctl_logs
sidebar_label: goliothctl logs
url: /docs/goliothctl/goliothctl_logs/
hide_title: true
---
## goliothctl logs

Show device logs (from the last 4h by default)

```
goliothctl logs [flags]
```

### Examples

```
# Show not older than this interval (24h)
goliothctl logs --interval 24h

# Filter messages by a term
goliothctl logs --term "wifi"

# Filter messages by a module
goliothctl logs --module "settings"

# Filter messages by a single device
goliothctl logs --device <uuid>
```

### Options

```
      --device string       device id
  -h, --help                help for logs
      --interval duration   return entries not older than this value (ex: 15m,8h,1d) (default 4h0m0s)
      --level string        log level [NONE DEBUG INFO WARN ERROR]
      --module string       log module
      --term string         free term search
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.dev")
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/docs/goliothctl/goliothctl/)	 - Manage Golioth platform resources and developer workflow.
