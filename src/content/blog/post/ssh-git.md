---
type: post
title: SSH로 git 사용하기
date: 2021-03-14 11:28:08
categories:
  - git
tag:
  - git
  - github
  - gitlab
  - git-authentication
  - ssh
---
# Github는 패스워드 기반 인증을 지원하지 않기로 했다.

대표적인 무료 git 저장소인 **github**가 패스워드기반 인증을 사용하지 않겠다고 발표했습니다. 앞으로는 **github**를 이용할 때에는 **1. 토큰 기반 인증** 또는 **2. SSH 기반 인증**을 해야합니다. github뿐만 아니라 BitBucket이나 gitlab 등 일반적으로 많이 사용하는 git 기반 저장소에서도 많은 경우에 HTTPS기반 인증을 사용하고 있지만, SSH기반 인증 역시 지원하고 있습니다. 저장소의 페이지에 있는 **Clone**버튼을 눌러보면 **Clone with SSH**가 있는데, SSH를 통해서도 저장소를 받을 수 있음을 확인할 수 있는 부분입니다.

# SSH기반 인증, 그거 어떻게 하는 건데?

그럼 슬슬 본론으로 넘어가서, SSH기반으로 인증할 수 있는 절차를 살펴보겠습니다.

SSH인증을 위해서는 2가지를 해야합니다.

1. **SSH키 생성**
2. **퍼블릭 키 등록**

## 1. SSH 키 생성

SSH키라는 것은 **SSH 프로토콜의 접근 크리덴셜**이라고 보면 됩니다. **퍼블릭 키(public key, 공개 키)**와 **프라이빗 키(private key, 개인 키)**를 가지고 있으며, **퍼블릭 키**를 서비스에 등록해 놓으면, **프라이빗 키**를 이용해서 인증하여 접속합니다.

SSH키를 생성하면 **퍼블릭 키**와 **프라이빗 키**가 나오는데, 이 퍼블릭 키를  github 등 서비스에 등록하여 사용합니다.

윈도우는 git-bash를 이용하세요.

### 프라이빗 키 생성

키 생성은 `ssh-keygen`이라는 명령어를 사용합니다. `-t`, `-b`,  `-C` 등 옵션을 제공합니다.

```bash
ssh-keygen
```

```bash
Generating public/private rsa key pair.
Enter file in which to save the key (/***/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /***/.ssh/id_rsa.
Your public key has been saved in /***/.ssh/id_rsa.pub.
The key fingerprint is:
*** ***
```

따로 경로를 지정하지 않으면, 일반적으로 *~/.ssh* 경로에 **id_rsa**와 **id_rsa.pub** 라는 파일이 생성됩니다.

### 프라이빗 키를 등록하기

퍼블릭 키를 서비스에 등록하여 사용하기 전에 `ssh-add` 커맨드를 이용해서 개인 키 파일을 **ssh-agent** 에 등록합니다.

```bash
ssh-add ~/.ssh/id_rsa
```

키를 다른 경로에 등록했을 경우 각 경로로 사용해야 합니다.

### 퍼블릭 키를 서비스에 등록하기

*pub* 확장자는 **퍼블릭 키(public key)** 를 의미합니다. `cat` 커맨드를 이용해서 그 내용을 터미널에 띄울 수 있습니다.

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAB3Nza어쩌구저쩌구..
```

터미널에 떠 있는 모든 내용을 복사해서 서비스에 등록을 해서 사용하면 됩니다.

- Github
    - Settings > SSH and GPG Keys 메뉴에서 **New **SSH Key** 버튼을 누르고 키를 title과 key를 입력 후 **Add SSH Key** 버튼을 눌러 등록
- Gitlab
    - Edit Profile > SSH Keys 에 Key를 붙여넣고 *Title, Expires at* (유효기간)을 입력 후 **Add Key** 버튼을 누른다.
- Bitbucket
    - Personal settings > Security > SSH keys 메뉴에서 **Add Key** 버튼을 누른 이후 *Label* 과 *Key* 값 입력 후 **Add Key** 버튼을 눌러 등록