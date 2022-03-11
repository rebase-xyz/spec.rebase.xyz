%%%
title = "example spec"
abbrev = "example-spec"
ipr= "none"
area = "Internet"
workgroup = "none"
submissiontype = "IETF"
keyword = [""]

[seriesInfo]
name = "Individual-Draft"
value = "example-spec-00"
status = "informational"

[[author]]
initials = "O."
surname = "Steele"
fullname = "Orie Steele"
#role = "editor"
organization = "Transmute"
[author.address]
email = "orie@transmute.industries"

%%%

.# Abstract

This document defines a Verifiable Credential format for linked Decentralized Identifiers to existing identifiers, such as web origins, social network accounts, and crypto currency addresses.

{mainmatter}

# Notational Conventions

The keywords **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**,
**SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL**, when they appear in this
document, are to be interpreted as described in [@!RFC2119].

# Terminology

## Open API

- [spec.rebase.org/openapi](https://spec.rebase.org/openapi/)

This Open API Specification 3 defines all JSON-Schema in YAML.

## JSON-LD Context

- [https://w3id.org/rebase/v1](https://w3id.org/rebase/v1)

This is the root context for rebase, it defines all terms used by rebase.

Implementations are expected to cache this json / bundle it with their apps.

Implementations SHOULD NOT download this from the internet.

# Credential Types

The credential type schemas maintained here are exposed via Open API Specification 3.0.

The links maintained below provide term definitions for all defined semantics.

<!-- TODO generate this section of the markdown from the openapi. -->

## GitHub Account

- [Schema](https://spec.rebase.org/openapi/schemas/common/GitHubVerification.yml)

## Web Origin

## Bitcoin Address

## Ethereum Address

## Twitter Account

## Notational Conventions

The keywords **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**,
**SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL**, when they appear in this
document, are to be interpreted as described in [@!RFC2119].

{backmatter}
