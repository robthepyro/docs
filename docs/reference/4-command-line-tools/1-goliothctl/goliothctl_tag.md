---
id: goliothctl_tag
title: "goliothctl tag"
slug: goliothctl_tag
sidebar_label: goliothctl tag
url: /reference/command-line-tools/goliothctl/goliothctl_tag
hide_title: true
---
## goliothctl tag

Create, update, and delete tags.

### Synopsis

Use the `goliothctl tag` subcommands to create, delete, and update tags. Tags can exist independently from devices.

```
goliothctl tag [flags]
```

### Examples

```
# Create a tag
> goliothctl tag create --name my-tag

# Update it
> goliothctl tag update my-tag --name formally-known-as-my-tag

# Delete it
> goliothctl tag delete formally-known-as-my-tag
```

### Options

```
  -h, --help   help for tag
```

### Options inherited from parent commands

```
      --apiUrl string      golioth api server url (default "https://api.golioth.io")
  -c, --config string      config file (default is $HOME/.golioth/.goliothctl.yaml)
      --projectId string   golioth project id
```

### SEE ALSO

* [goliothctl](/reference/command-line-tools/goliothctl)	 - Manage Golioth platform resources and developer workflow.
* [goliothctl tag create](/reference/command-line-tools/goliothctl/goliothctl_tag_create)	 - Create a tag.
* [goliothctl tag delete](/reference/command-line-tools/goliothctl/goliothctl_tag_delete)	 - Delete a tag.
* [goliothctl tag list](/reference/command-line-tools/goliothctl/goliothctl_tag_list)	 - Show all tags.
* [goliothctl tag update](/reference/command-line-tools/goliothctl/goliothctl_tag_update/)	 - Update the name of an existing tag.

