async function analyzeCode() {
    const code = document.getElementById("code").value;
    const output = document.getElementById("output");

    if (!code.trim()) {
        output.innerHTML = `<tr><td colspan="2">No input</td></tr>`;
        return;
    }

    output.innerHTML = `<tr><td colspan="2">Analyzing...</td></tr>`;

    try {
        const res = await fetch("/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code })
        });

        const data = await res.json();

        output.innerHTML = "";

        if (!data || data.length === 0) {
            output.innerHTML = `<tr><td colspan="2">No tokens generated</td></tr>`;
            addLog("No tokens found");
            return;
        }

        data.forEach(t => {
            output.innerHTML += `
                <tr>
                    <td>${t.type}</td>
                    <td>${t.value}</td>
                </tr>
            `;
        });

        addLog(`Analysis completed (${data.length} tokens)`);

    } catch (err) {
        output.innerHTML = `<tr><td colspan="2">Error during analysis</td></tr>`;
        addLog("Error: analysis failed");
        console.error(err);
    }
}


/* =========================
   CLEAR FUNCTION
========================= */
function clearCode() {
    document.getElementById("code").value = "";
    document.getElementById("output").innerHTML = "";

    // IMPORTANT: reset file input so same file can be uploaded again
    document.getElementById("fileInput").value = "";

    addLog("Editor cleared");
}


/* =========================
   FILE UPLOAD
========================= */
function uploadFile() {
    document.getElementById("fileInput").click();
}

function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById("code").value = e.target.result;
        addLog(`File loaded: ${file.name}`);
    };

    reader.readAsText(file);

    // CRITICAL FIX: allows re-uploading same file again
    event.target.value = "";
}


/* =========================
   LOG SYSTEM
========================= */
function addLog(message) {
    const logs = document.getElementById("logs");

    if (!logs) return;

    const time = new Date().toLocaleTimeString();

    logs.innerHTML += `
        <div style="margin-bottom:6px; color:#cbd5e1;">
            <span style="color:#60a5fa;">[${time}]</span> ${message}
        </div>
    `;

    logs.scrollTop = logs.scrollHeight;
}


/* =========================
   TAB SYSTEM
========================= */
function showTab(tab) {
    const editor = document.querySelector(".editor-card");
    const output = document.querySelector(".output-card");
    const logs = document.querySelector(".logs-card");

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(b => b.classList.remove("active"));

    if (tab === "editor") {
        editor.style.display = "flex";
        output.style.display = "flex";
        logs.style.display = "none";
        buttons[0].classList.add("active");
    }

    else if (tab === "tokens") {
        editor.style.display = "none";
        output.style.display = "flex";
        logs.style.display = "none";
        buttons[1].classList.add("active");
    }

    else if (tab === "logs") {
        editor.style.display = "none";
        output.style.display = "none";
        logs.style.display = "flex";
        buttons[2].classList.add("active");
    }
}