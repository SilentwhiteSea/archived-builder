async function loadFromGithub() {

    const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues/${GITHUB_CONFIG.issue_number}`;

    try {

        const res = await fetch(url);
        const data = await res.json();

        if (data.body) {

            const json = JSON.parse(data.body);

            window.buildData = json;

            console.log("GitHub 데이터 불러오기 완료");

        }

    } catch (e) {

        console.error("GitHub 로드 실패", e);

    }

}