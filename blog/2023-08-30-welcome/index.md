---
title: Tango LowCode Builder Released!
authors: [wwsun]
tags: [netease, tango, open-source]
---

## 📝 Introduction to Tango

Tango is a low-code designer framework used for rapidly building low-code platforms. With Tango, you can set up a basic front-end system for a low-code platform with just a few lines of code. The Tango low-code designer directly reads the source code of the front-end project, executes and renders the front-end view centered around the source code, and provides users with low-code visual building capabilities. User operations during the build process translate into modifications of the source code. Tools or platforms built using Tango can achieve seamless integration with an enterprise's existing development system, ensuring a smooth "source code in, source code out" experience.

### ✨ Features

- Proven in the production environment of NetEase Cloud Music's internal network, it can be flexibly integrated into low-code platforms, local development tools, and more.
- Driven by source code AST, with no proprietary DSL or protocols.
- Provides real-time code generation capabilities, supporting "source code in, source code out."
- Out-of-the-box front-end low-code designer with flexible and easy-to-use designer React components.
- Developed with TypeScript, providing comprehensive type definition files.

### 🏗️ Source Code-Based Low-Code Building Solution

The Tango low-code engine does not rely on proprietary building protocols and DSLs but directly uses source code as the driver. Internally, the engine converts the source code into AST. All user building operations translate into AST traversal and modifications, which then regenerate the code and synchronize it with an online sandbox for execution. Compared to traditional [schema-driven low-code solutions](https://mp.weixin.qq.com/s/yqYey76qLGYPfDtpGkVFfA), it is free from the constraints of proprietary DSLs and protocols, ensuring seamless integration between low-code building and source code development.

<img src="https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/13140534982/ee2e/f42c/cc9a/184e2918a011b57d46e6c64a2722fa44.png" />

### 📄 Source Code In, Source Code Out

As the engine core is entirely source code-driven, the Tango low-code engine can achieve a "source code in, source code out" visual building capability without offering any proprietary intermediate artifacts. If your company already has a comprehensive development system (code hosting, building, deployment, CDN), you can directly use the Tango low-code engine to integrate with existing services and build a low-code development platform.

![code in, code out](/img/blog/230830/codein-codeout.png)

### 🏆 Advantages

Compared to schema-based low-code building solutions, the Tango low-code engine has the following advantages:

| Comparison Item                         | Schema-Based Low-Code Building Solutions                                                                           | Tango (Source Code AST Transformation)                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Applicable Scenarios                    | Specific vertical building scenarios, such as forms, marketing pages, etc.                                         | 🔥 Source code-centric application building scenarios                                    |
| Language Capabilities                   | Dependent on proprietary protocol extensions, inflexible, and hard to align with programming language capabilities | 🔥 Directly based on JavaScript, can use all language features, no extensibility issues  |
| Development Capability                  | LowCode                                                                                                            | 🔥 LowCode + ProCode                                                                     |
| Source Code Export                      | Schema-centric, one-way code generation, irreversible                                                              | 🔥 Source code-centric, bidirectional code transformation                                |
| Custom Dependencies                     | Requires extension and encapsulation based on proprietary protocols, high customization cost                       | 🔥 Existing components can be seamlessly integrated at low cost                          |
| Integration with Development Facilities | High customization cost, requires additional customization                                                         | 🔥 Low-cost integration, can directly reuse existing deployment and release capabilities |

## 📐 Architecture

The Tango low-code engine is implemented with layered decoupling, allowing the upper-level low-code platform and the underlying low-code engine to be developed and maintained independently, facilitating rapid integration and deployment. Additionally, the Tango low-code engine defines an open material ecosystem, enabling developers to freely contribute attribute setters that extend component configuration capabilities and expand low-code materials with secondary and tertiary business components.

The specific technical architecture is as follows:

![low-code engine](/img/blog/230830/lowocode-engine.png)

## ⏰ Milestones

The Tango low-code engine is the core component of NetEase Cloud Music's internal low-code platform. Open-sourcing involves decoupling a significant amount of core logic, which adds considerable extra work to our regular tasks. Therefore, we plan to advance the open-source process for the Tango low-code engine in stages.

1. Today, we officially release the first community version of the Tango low-code engine, which will include the core codebase of the Tango low-code engine, the TangoBoot application framework, and a low-code component library adapted to antd v4.
2. We plan to release the 1.0 Beta version of the low-code engine on September 30th this year. This version will refactor the core implementation for community scenarios, remove some compatibility code from our internal use in Cloud Music, and optimize the core implementation.
3. We plan to release the 1.0 RC version of the low-code engine on October 30th this year. This version will ensure that the core API is basically stable, with no more BREAKING CHANGES. Additionally, we will provide comprehensive development guides, deployment documentation, and demo applications.
4. We aim to release the official version by the end of Q4 2023. By then, we will further improve our open-source community operation mechanism.

![milestones](/img/blog/230830/tango-milestones.png)

## 🤝 Community Building

Our open-source work is actively progressing. You can learn about our latest developments through the following information:

- GitHub Repository: https://github.com/NetEase/tango
- Documentation Site: https://netease.github.io/tango/

We welcome everyone to join our community and participate in the open-source construction of the Tango low-code engine. If you have any questions, you can provide feedback through [GitHub Issues](https://github.com/NetEase/tango/issues), and we will follow up promptly.

## 💗 Acknowledgments

Special thanks to the NetEase Cloud Music Public Technology Team, Frontend Team, Live Streaming Technology Team, and everyone who has participated in the Tango project.

Thanks to CodeSandbox for providing the [Sandpack](https://sandpack.codesandbox.io/) project, which offers powerful browser-based code building and execution capabilities for Tango.
