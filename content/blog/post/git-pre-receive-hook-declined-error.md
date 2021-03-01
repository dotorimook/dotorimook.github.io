---
type: post
title: Git push error pre-receive hook declined 에러
date: 2021-03-01 15:30:04
categories:
  - troubleshooting
  - git
tag:
  - git
  - "pre-receive hook declined"
---

# git 푸시 실패: pre-receive hook declined
git 브랜치에서 푸시를 하려고 하는데 푸시가 되지 않았다.

```
remote: GitLab: You are not allowed to force push code to a protected branch on this project.
[remote rejected] master -> master (pre-receive hook declined)
```

하려고 했던 푸시는 force to push였다.

## pre-receive hook declined 에러 해결 방법
그래서 내가 에러를 해결한 방법은? 푸시를 하려고 하는 해당 `master` 브랜치에 **protect** 설정이 있는지 확인했다. 역시나 **protect** 설정이 되어있었고 그걸 일시적으로 해제해서 해결을 했다.

## pre-receive hook declined 에러 원인은?
**pre-receive hook declined**는 에러 양상이 여러가지로 알고 있다. 일반적으로 원인은

- 브랜치 권한 문제
- 브랜치 protect 문제 (권한 문제로 봐도 무방한 것 같음)
- 커밋 메시지 규칙 준수 문제 (이슈 ID를 작성하지 않았다든지)

그냥 그렇게만 알고 있었는데 그 의미를 곱씹어보면 왜 한 가지가 아니라 다양하게 원인이 있는지 추측할 수 있다.
일반적으로 **pre-receive hook declined** `hook`이 거절됐다는 것인데, 우리가 푸시를 할 때에 *git hook*을 걸 수 있는데, 그 단계에서 푸시가 반려되었다고 추측해볼 수 있다. 일반적으로 위에 나열된 브랜치 권한이나 브랜치 보호, 커밋 메시지 규칙 준수 문제의 validation을 git hook으로 작동한다고 추측할 수도 있다. 그래서 해당 에러가 발생하면 어떤 훅이 설정되어있고, 어떤 훅에서 문제가 발생했는지 파악하는 것이 중요할 것 같다.

또 한가지 팁이 있는데, 사실 **pre-recevie hook declined** 라인 위에 한 줄이 더 있는데, 아마도 hook에 설정된 메시지 인 것 같은데, 그 메시지가 있는 경우도 아닌 경우도 있을 것 같지만, 해당 메시지가 있다면 그 메시지를 보는 것이 더 원인 파악에 중요할 것 같다.

