function saveToGithub(content) {

    const text = encodeURIComponent(JSON.stringify(content, null, 2));

    const url =
    `https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues/${GITHUB_CONFIG.issue_number}`;

    alert("GitHub Issue 페이지가 열립니다. 내용을 붙여넣어 저장하세요.");

    window.open(url);

}