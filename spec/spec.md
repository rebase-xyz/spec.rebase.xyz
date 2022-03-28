%%%
title = "Rebase"
abbrev = "rebase"
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
initials = "W."
surname = "Chang"
fullname = "Wayne Chang"
#role = "editor"
organization = "Spruce"
[author.address]
email = "wayne@spruceid.com"

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
Rebase project aims to establish reputation-based Public Key Infrastructure on
the Internet by allowing people and organizations to link their various public,
semi-public, and private accounts to cryptographic keys at their own will,
also ensuring privacy.

# Vision
Through community agreed-upon data schemas and verification algorithms, Rebase
aims coordinate decentralized web-based services that allow people and
organizations to map their identities to cryptographic keys using social media
in a user-centric and publicly auditable way. A network of independent
validators will inspect identity proofs hosted across a variety of social media
platforms, such as GitHub, Twitter, Hacker News, Reddit, and BrightID.
Validators will issue credentials to people and organizations as authenticated
by their listed keys, verifiable using the identity proofs. As a result, users
will enjoy increased data portability within Rebase-compatible systems, meaning
that they can take their digital identities anywhere they want and manage them
however they choose.

# Scope of Work
This group is open to anyone interested in solving PKI for the Internet by
making existing online reputations and user data portable.

The Rebase project will:
- Align on use of existing specifications and technologies towards achieving
  the vision;
- Discuss use cases and roles within the Rebase ecosystem;
- Discuss security and privacy implications of the work;
- Invite additional interested parties from diverse organizations who may have
  more uses or concerns for this technology to publicly discuss their thoughts.

## Out of Scope

The Rebase project will not:
- Sign specific vendor contracts or business deals;
- Pursue concrete opportunities for commercial licensing;
- Pursuing explicit marketing or business development activities from private
  companies.


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
