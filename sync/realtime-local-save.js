// 자동 저장 + 자동 불러오기 시스템

function loadLocalData() {

    const saved = localStorage.getItem("archived_builder_data");

    if (saved) {

        try {

            window.buildData = JSON.parse(saved);
            console.log("저장된 데이터 불러오기 완료");

        } catch (e) {

            console.error("데이터 불러오기 실패", e);

        }

    }

}

function saveLocalData() {

    if (window.buildData) {

        localStorage.setItem(
            "archived_builder_data",
            JSON.stringify(window.buildData)
        );

        console.log("자동 저장 완료");

    }

}

function startAutoSave() {

    loadLocalData();

    setInterval(() => {

        saveLocalData();

    }, 2000);

}

startAutoSave();